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

        const initial_loading_state = R.isNil(loading_state)
            ? false
            : loading_state.is_loading;

        const isLoading = getLoadingStateInChildren(
            this.props.children,
            initial_loading_state
        );

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
            return <div className={className}>{this.props.children}</div>;
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

function getLoadingStateInChildren(children, initial_loading_state) {
    if (!Array.isArray(children)) {
        children = [children];
    }
    let isLoading = initial_loading_state;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // If we found another Loading component, we break,
        // because the next Loading component will take care of it's
        // own children
        if (child.type === Loading.type) {
            break;
        }
        if (
            child.props &&
            child.props.loading_state &&
            child.props.loading_state.is_loading
        ) {
            isLoading = true;
        }
        if (child.props && child.props.children) {
            isLoading = getLoadingStateInChildren(
                child.props.children,
                isLoading
            );
        }
    }
    return isLoading;
}
