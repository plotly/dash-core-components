import React from 'react';
import PropTypes from 'prop-types';

const DefaultSpinner = ({status, fullscreen, debug}) => {
    let debugTitle;
    window.console.log('debug?', debug)
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
            <div className="spinner-verts">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
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
                    .spinner-verts {
                        margin: 1rem auto;
                        width: 50px;
                        height: 40px;
                        text-align: center;
                        font-size: 10px;
                    }
                    
                    .spinner-verts > div {
                        background-color: #119DFF;
                        height: 100%;
                        width: 6px;
                        display: inline-block;
                        margin-right: 4px;
                        
                        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
                        animation: sk-stretchdelay 1.2s infinite ease-in-out;
                    }
                    
                    .spinner-verts .rect2 {
                        -webkit-animation-delay: -1.1s;
                        animation-delay: -1.1s;
                    }
                    
                    .spinner-verts .rect3 {
                        -webkit-animation-delay: -1.0s;
                        animation-delay: -1.0s;
                    }
                    
                    .spinner-verts .rect4 {
                        -webkit-animation-delay: -0.9s;
                        animation-delay: -0.9s;
                    }
                    
                    .spinner-verts .rect5 {
                        -webkit-animation-delay: -0.8s;
                        animation-delay: -0.8s;
                    }
                    
                    @-webkit-keyframes sk-stretchdelay {
                        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
                        20% { -webkit-transform: scaleY(1.0) }
                    }
                    
                    @keyframes sk-stretchdelay {
                        0%, 40%, 100% { 
                        transform: scaleY(0.4);
                        -webkit-transform: scaleY(0.4);
                        }  20% { 
                        transform: scaleY(1.0);
                        -webkit-transform: scaleY(1.0);
                        }
                    }
            `}
            </style>
        </div>
    );
};

DefaultSpinner.propTypes = {
    status: PropTypes.object,
    fullscreen: PropTypes.bool,
    debug: PropTypes.bool,
};

export default DefaultSpinner;
