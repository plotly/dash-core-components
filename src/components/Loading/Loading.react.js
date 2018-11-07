import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DefaultSpinner from './spinners/DefaultSpinner.jsx';

/**
 * A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.
 */
export default class Loading extends Component {
    render() {
        const status = this.props.status;
        if (status && status.isLoading) {
            return <DefaultSpinner status={status} />
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
