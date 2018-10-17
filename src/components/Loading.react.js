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
        if (this.props.loading) {
            return (
                <div>
                    <div className="spinner-verts">
                        <div className="rect1" />
                        <div className="rect2" />
                        <div className="rect3" />
                        <div className="rect4" />
                        <div className="rect5" />
                    </div>
                    <style>
                        {`
                            .spinner-verts {
                                margin: 100px auto;
                                width: 50px;
                                height: 40px;
                                text-align: center;
                                font-size: 10px;
                            }
                            
                            .spinner-verts > div {
                                background-color: #1975FA;
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
        }
        return this.props.children;
    }
}

Loading.propTypes = {
    id: PropTypes.string,

    /**
     * Array that holds components to render
     */
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),

    /**
     * Additional CSS class for the root DOM node
     */
    className: PropTypes.string,

    loading: PropTypes.bool,
};
