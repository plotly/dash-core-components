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
        const { status, color, fullscreen, debug } = this.props;
        if (status && status.is_loading) {
            switch (this.props.type) {
                case 'graph':
                    return <GraphSpinner status={status} color={color} debug={debug} fullscreen={fullscreen}/>;
                case 'cube':
                    return <CubeSpinner status={status} color={color} debug={debug} fullscreen={fullscreen} />;
                case 'circle':
                    return <CircleSpinner status={status} color={color} debug={debug} fullscreen={fullscreen} />;
                case 'dot':
                    return <DotSpinner status={status} color={color} debug={debug} fullscreen={fullscreen} />;
                default:
                    return <DefaultSpinner status={status} color={color} debug={debug} fullscreen={fullscreen} />;
            }
        }
        return this.props.children || null;
    }
}

Loading.defaultProps = {
    type: 'default',
    color: '#119DFF'
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
     * Boolean that determines if the loading spinner will be displayed full-screen or not 
     */
    fullscreen: PropTypes.bool,

    /**
     * Boolean that determines if the loading spinner will display the status.prop_name and component_name 
     */
    debug: PropTypes.bool,

    /**
     * Additional CSS class for the root DOM node
     */
    className: PropTypes.string,

    /**
     * Primary colour used for the loading spinners 
     */
    color: PropTypes.string,

    /**
     * Object that holds the status object coming from dash-renderer
     */
    status: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
};
