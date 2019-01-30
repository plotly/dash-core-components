import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GraphSpinner from './spinners/GraphSpinner.jsx';
import DefaultSpinner from './spinners/DefaultSpinner.jsx';
import CubeSpinner from './spinners/CubeSpinner.jsx';
import CircleSpinner from './spinners/CircleSpinner.jsx';
import DotSpinner from './spinners/DotSpinner.jsx';
import R from 'ramda';

function getSpinner(type) {
    switch (type) {
        case 'graph':
            return GraphSpinner;
        case 'cube':
            return CubeSpinner;
        case 'circle':
            return CircleSpinner;
        case 'dot':
            return DotSpinner;
        default:
            return DefaultSpinner;
    }
}

/**
 * A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.
 */
export default class Loading extends Component {
    render() {
        const {
            loading_state,
            color,
            className,
            style,
            fullscreen,
            debug,
            type,
        } = this.props;
        // is_loading could be true on the <Loading /> component itself
        let isLoading = loading_state ? loading_state.is_loading : false;

        let children = this.props.children;
        if (!Array.isArray(this.props.children)) {
            children = [this.props.children];
        }

        // Check if Loading component's direct children have a loading state
        children.forEach(child => {
            // Because the Loading component's children could also be wrapped in a NotifyObservers component,
            // (coming from dash-renderer), we look at the children of those as well
            // which should be the actual component we want to look at
            if(child && child.props && child.props.children){
                if(child.props && child.props.loading_state && child.props.loading_state.is_loading){
                    isLoading = child.props.loading_state.is_loading;
                }
            }
            // But if there's a loading_state on the direct child, that should take precedence!
            if(child.props.loading_state && child.props.loading_state.is_loading){
                isLoading = child.props.loading_state.is_loading;
            }
        });

        if (isLoading) {
            const Spinner = getSpinner(type);
            return (
                <Spinner
                    className={className}
                    style={style}
                    status={loading_state}
                    color={color}
                    debug={debug}
                    fullscreen={fullscreen}
                />
            );
        }
        if (
            R.type(this.props.children) !== 'Object' ||
            R.type(this.props.children) !== 'Function'
        ) {
            return <div>{this.props.children}</div>;
        }
        return this.props.children;
    }
}

Loading.defaultProps = {
    type: 'default',
    color: '#119DFF',
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

    /**
     * Property that determines which spinner to show - one of 'graph', 'cube', 'circle', 'dot', or 'default'.
     */
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
     * Additional CSS styling for the root DOM node
     */
    style: PropTypes.object,

    /**
     * Primary colour used for the loading spinners
     */
    color: PropTypes.string,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
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
