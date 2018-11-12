import React from 'react';
import PropTypes from 'prop-types';

const CubeSpinner = ({status, fullscreen, debug}) => {
    let debugTitle;
    if (debug) {
        debugTitle = (
            <h3 className="dash-loading-title">
                Loading {status.componentName}
                's {status.propName}
            </h3>
        );
    }
    return (
        <div className={fullscreen ? 'dash-spinner-container' : ''}>
            {debugTitle}
            <div className="dash-cube-container">
                <div className="dash-cube">
                    <div className="dash-cube-side dash-cube-side--front" />
                    <div className="dash-cube-side dash-cube-side--back" />
                    <div className="dash-cube-side dash-cube-side--right" />
                    <div className="dash-cube-side dash-cube-side--left" />
                    <div className="dash-cube-side dash-cube-side--top" />
                    <div className="dash-cube-side dash-cube-side--bottom" />
                </div>
            </div>
            <style>
                {`
                    .dash-spinner-container {
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background-color: white;
                        z-index: 99;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                      .dash-loading-title {
                          text-align: center;
                      }
                      .dash-cube {
                        position: relative;
                        width: 80px;
                        height: 80px;
                        display: block;
                        transform-style: preserve-3d;
                        animation: rotate 4s infinite;
                        transition: all 0.5s;
                      }
                      .dash-cube-container {
                        display: block;
                        width: 80px;
                        margin: 7rem auto;
                      }
                      
                      .dash-cube-side {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        display: inline-block;
                      }
                      
                      .dash-cube-side--front {
                        background-color: #119DFF;  
                        animation: blowout-front 4s infinite;
                        transform: rotateY(0deg) translateZ(40px);
                      }
                      .dash-cube-side--back {
                        background-color: #0D76BF;
                        transform: rotateX(180deg) translateZ(40px);
                        animation: blowout-back 4s infinite;
                      }
                      
                      .dash-cube-side--left {
                        background-color: #0D76BF;
                        transform: rotateY(-90deg) translateZ(40px);
                        animation: blowout-left 4s infinite;
                      }
                      
                      .dash-cube-side--right {
                        background-color: #506784;
                        transform: rotateY(90deg) translateZ(40px);
                        animation: blowout-right 4s infinite;
                      }
                      
                      .dash-cube-side--top {
                        background-color: #0D76BF;
                        transform: rotateX(90deg) translateZ(40px);
                        animation: blowout-top 4s infinite;
                      }
                      
                      .dash-cube-side--bottom {
                        background-color: #119DFF;
                        transform: rotateX(-90deg) translateZ(40px);
                        animation: blowout-bottom 4s infinite;
                      }
                      
                      @keyframes rotate {
                          0% {
                            transform: rotateX(0deg) rotateY(0deg);
                          }
                          20% {
                            transform: rotateX(320deg) rotateY(320deg);
                        }
                          100% {
                            transform: rotateX(360deg) rotateY(360deg);
                        }
                      }
                      
                      @keyframes blowout-bottom {
                        20% {
                            transform: rotateX(-90deg) translateZ(40px);
                        }
                        30% {
                          transform: rotateX(-90deg) translateZ(120px);
                        }
                        60% {
                          transform: rotateX(-90deg) translateZ(120px);
                        }
                      }
                      @keyframes blowout-front {
                        20% {
                          transform: rotateY(0deg) translateZ(40px);
                        }
                        30% {
                          transform: rotateY(0deg) translateZ(120px);
                        }
                        60% {
                          transform: rotateY(0deg) translateZ(120px);
                        }
                      }
                      @keyframes blowout-top {
                        20% {
                        transform: rotateX(90deg) translateZ(40px);
                        }
                        30% {
                        transform: rotateX(90deg) translateZ(120px);
                        }
                        60% {
                        transform: rotateX(90deg) translateZ(120px);
                        }
                      }
                      @keyframes blowout-back {
                        20% {
                        transform: rotateX(180deg) translateZ(40px);
                        }
                        30% {
                        transform: rotateX(180deg) translateZ(120px);
                        }
                        60% {
                        transform: rotateX(180deg) translateZ(120px);
                        }
                      }
                      @keyframes blowout-right {
                        20% {
                        transform: rotateY(90deg) translateZ(40px);
                        }
                        30% {
                        transform: rotateY(90deg) translateZ(120px);
                        }
                        60% {
                        transform: rotateY(90deg) translateZ(120px);
                        }
                      }
                      @keyframes blowout-left {
                        20% {
                        transform: rotateY(-90deg) translateZ(40px);
                        }
                        30% {
                        transform: rotateY(-90deg) translateZ(120px);
                        }
                        60% {
                        transform: rotateY(-90deg) translateZ(120px);
                        }
                      }
                    `}
            </style>
        </div>
    );
};

CubeSpinner.propTypes = {
    status: PropTypes.object,
    fullscreen: PropTypes.bool,
    debug: PropTypes.bool,
};

export default CubeSpinner;
