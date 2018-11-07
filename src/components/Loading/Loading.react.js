import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DefaultSpinner from './spinners/DefaultSpinner.jsx';
import CubeSpinner from './spinners/CubeSpinner.jsx';

/**
 * A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.
 */
export default class Loading extends Component {
    render() {
        const status = this.props.status;
        if (status && status.isLoading) {
          switch(this.props.type) {
            case 'graph':
              return <DefaultSpinner status={status} />
            case 'cube':
              return <CubeSpinner status={status} />
            default:
              return <DefaultSpinner status={status} />
          }
        }
        return this.props.children || null;
    }
}

Loading.defaultProps = {
  type: 'default'
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

    type: PropTypes.oneOf(['graph', 'cube', 'default']),

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
