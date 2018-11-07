import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * A slider component with a single handle.
 */
export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const status = this.props.status;
        if (status && status.isLoading) {
            return (
                <div>
                    <h3 className="dash-loading-title">
                        Loading {status.componentName}
                        's {status.propName}
                    </h3>
                    <div className="dash-spinner">
                        <div className="dash-spinner__bottom">
                            <div className="dash-bar dash-bar__one" />
                            <div className="dash-bar dash-bar__two" />
                            <div className="dash-bar dash-bar__three" />
                        </div>
                        <div className="dash-spinner__background">
                            <div className="dash-spinner__bottom">
                                <div className="dash-vert dash-vert__one" />
                                <div className="dash-vert dash-vert__two" />
                                <div className="dash-vert dash-vert__three" />
                                <div className="dash-vert dash-vert__four" />
                            </div>
                        </div>
                    </div>
                    <style>
                        {`
                        .dash-loading-title {
                            text-align: center;
                        }
                        .container {
                            width: 100%;
                            height: 100%;
                            display: block;
                            padding: 2rem;
                          }
                          .dash-spinner {
                            display: flex;
                            margin: 0 auto;
                            width: 200px;
                            height: 200px;
                            overflow: hidden;
                            position: relative;
                            z-index: -2;
                            opacity: 0.8;
                            border-radius: 4px;
                          }
                          .dash-spinner__bottom {
                            display: flex;
                            margin-top: auto;
                            flex-direction: column;
                            height: 12px;
                            width: 100%;
                          }
                          .dash-spinner__background {
                            width: 100%;
                            height: 100%;
                            display: block;
                            position: absolute;
                            z-index: -1;
                            display: flex;
                          }
                          .dash-bar {
                            height: 40px;
                            background-color: #119DFF;
                            animation: bar-one 2s infinite;
                            transform-origin: 0% 0%;
                            display: inline-flex;
                            border-radius: 8px;
                          }
                          .dash-bar__one {
                            transform: rotate(-45deg);
                            bottom: -10px;
                            position: relative;
                          }
                          .dash-bar__two {
                            transform: rotate(45deg);
                            animation: bar-two 2s infinite;
                            left: 72px;
                            bottom: 64px;
                            position: relative;
                            animation-delay: 2s infinite;
                          }
                          .dash-bar__three {
                            transform: rotate(-45deg);
                            animation: bar-three 2s infinite;
                            left: 110px;
                            bottom: 27px;
                            position: relative;
                            animation-delay: 2s infinite;
                          }
                          .dash-vert {
                            display: inline-block;
                            transform-origin: 0% 0%;
                            position: absolute;
                            bottom: 0px;
                            width: 40px;
                          }
                          .dash-vert__one {
                            animation: vert-one 2s infinite;
                            background-color: #e763fa;
                          }
                          .dash-vert__two {
                            animation: vert-two 2s infinite;
                            left: 50px;
                            background-color: #636efa;
                          }
                          .dash-vert__three {
                            animation: vert-three 2s infinite;
                            left: 100px;
                            background-color: #00cc96;
                          }
                          .dash-vert__four {
                            animation: vert-four 2s infinite;
                            left: 150px;
                            background-color: #EF553B;
                          }
                          @keyframes vert-one {
                            0% {
                              height: 0px;
                            }
                            100% {
                              height: 80px;
                            }
                          }
                          @keyframes vert-two {
                            0% {
                              height: 0px;
                            }
                            30% {
                              height: 0px;
                            }
                            100% {
                              height: 120px;
                            }
                          }
                          @keyframes vert-three {
                            0% {
                              height: 0px;
                            }
                            30% {
                              height: 0px;
                            }
                            50% {
                              height: 0px;
                            }
                            100% {
                              height: 100px;
                            }
                          }
                          @keyframes vert-four {
                            0% {
                              height: 0px;
                            }
                            30% {
                              height: 0px;
                            }
                            50% {
                              height: 0px;
                            }
                            60% {
                              height: 0px;
                            }
                            100% {
                              height: 60px;
                            }
                          }
                          @keyframes bar-one {
                            0% {
                              width: 0%;
                            }
                            30% {
                              width: 50%;
                            }
                            60% {
                              width: 50%;
                            }
                            100% {
                              width: 50%;
                            }
                          }
                          @keyframes bar-two {
                            0% {
                              width: 0%;
                            }
                            30% {
                              width: 0%;
                            }
                            60% {
                              width: 30%;
                            }
                            100% {
                              width: 30%;
                            }
                          }
                          @keyframes bar-three {
                            0% {
                              width: 0%;
                            }
                            30% {
                              width: 0%;
                            }
                            60% {
                              width: 0%;
                            }
                            100% {
                              width: 70%;
                            }
                          }
                    `}
                    </style>
                </div>
            );
        }
        return this.props.children || null;
    }
}

Loading.propTypes = {
    id: PropTypes.string,

    /**
     * Array that holds components to render
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),

    /**
     * String that determines which prop to listen to when loading
     */
    loadingProp: PropTypes.string,

    /**
     * Additional CSS class for the root DOM node
     */
    className: PropTypes.string,

    /**
     * Object that holds the status object coming from dash-renderer
     */
    status: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        isLoading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        propName: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        componentName: PropTypes.string,
    }),
};
