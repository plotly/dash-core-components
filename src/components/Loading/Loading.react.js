import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GraphSpinner from './spinners/GraphSpinner.jsx';
import DefaultSpinner from './spinners/DefaultSpinner.jsx';
import CubeSpinner from './spinners/CubeSpinner.jsx';
import CircleSpinner from './spinners/CircleSpinner.jsx';
import DotSpinner from './spinners/DotSpinner.jsx';

/**
 * A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.
 */
export default class Loading extends Component {
    render() {
        const { status, fullscreen, debug } = this.props;
        if (status && status.isLoading) {
            switch (this.props.type) {
                case 'graph':
                    return <GraphSpinner status={status} debug={debug} fullscreen={fullscreen}/>;
                case 'cube':
                    return <CubeSpinner status={status} debug={debug} fullscreen={fullscreen} />;
                case 'circle':
                    return <CircleSpinner status={status} debug={debug} fullscreen={fullscreen} />;
                case 'dot':
                    return <DotSpinner status={status} debug={debug} fullscreen={fullscreen} />;
                default:
                    return <DefaultSpinner status={status} debug={debug} fullscreen={fullscreen} />;
            }
        }
        return this.props.children || null;
    }
}

Loading.defaultProps = {
    type: 'default',
};

Loading.propTypes = {
    id: PropTypes.string,

    /**
     * Array that holds components to render
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),

    type: PropTypes.oneOf(['graph', 'cube', 'circle', 'dot', 'default']),

    /**
     * String that determines which prop to listen to when loading
     */
    loadingProp: PropTypes.string,

    /**
     * Boolean that determines if the loading spinner will be displayed full-screen or not 
     */
    fullscreen: PropTypes.bool,

    /**
     * Boolean that determines if the loading spinner will display the status.propName and componentName 
     */
    debug: PropTypes.bool,

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
