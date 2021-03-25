import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import _JSXStyle from "styled-jsx/style";

/**
 * A basic HTML textarea for entering multiline text.
 *
 */
export default class ToolTip extends Component {
    render() {
        const {loading_state, value, children, direction, colors} = this.props;

        return (
            <span
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                className={`hover hover-${direction}`}
                {...omit([], this.props)}
            >
                <span className="hover-content">
                    {children}
                </span>
                <style jsx>{`
                    .hover,
                    .hover-right {
                        /* Offset so that the triangle caret lands directly on what's hovered */
                        transform: translate(5px, 0);

                        position: absolute;
                    }

                    .hover-left {
                        transform: translate(-5px, 0);
                    }

                    .hover-bottom {
                        transform: translate(0, 6px);
                    }

                    .hover-top {
                        transform: translate(0, -5px);
                    }

                    .hover-content {
                        position: absolute;
                        border: 1px solid ${colors.border};
                        border-radius: 2px;
                        padding: 5px 10px;
                        background: ${colors.background};
                        white-space: nowrap;
                    }

                    .hover .hover-content,
                    .hover-right .hover-content {
                        transform: translate(0, -50%);
                    }

                    .hover-left .hover-content {
                        transform: translate(-100%, -50%);
                    }

                    .hover-top .hover-content {
                        transform: translate(-50%, -100%);
                    }

                    .hover-bottom .hover-content {
                        transform: translate(-50%, 0);
                    }

                    /* Add a small triangle on the left side of the box */
                    .hover:before,
                    .hover:after {
                        content: '';
                        width: 0;
                        height: 0;
                        position: absolute;
                        border-style: solid;
                        top: -6px;
                    }

                    .hover:before,
                    .hover:after,
                    .hover-right:before,
                    .hover-right:after {
                        border-width: 6px 6px 6px 0;
                    }

                    .hover-top:before,
                    .hover-top:after {
                        border-width: 6px 6px 0 6px;
                    }

                    .hover-bottom:before,
                    .hover-bottom:after {
                        border-width: 0 6px 6px 6px;
                    }

                    .hover-left:before,
                    .hover-left:after {
                        border-width: 6px 0 6px 6px;
                    }

                    .hover:before,
                    .hover-right:before {
                        border-color: transparent ${colors.border} transparent transparent;
                        left: -5px;
                        z-index: 2;
                    }

                    .hover:after,
                    .hover-right:after {
                        border-color: transparent ${colors.background} transparent transparent;
                        left: -4px;
                        z-index: 3;
                    }

                    .hover-left:before {
                        border-color: transparent transparent transparent ${colors.border};
                        left: -1px;
                    }

                    .hover-left:after {
                        border-color: transparent transparent transparent ${colors.background};
                        left: -2px;
                    }

                    .hover-top:before,
                    .hover-top:after,
                    .hover-bottom:before,
                    .hover-bottom:after {
                        left: -6px;
                    }

                    .hover-bottom:before {
                        border-color: transparent transparent ${colors.border} transparent;
                    }

                    .hover-bottom:after {
                        border-color: transparent transparent ${colors.background} transparent;
                        top: -5px;
                    }

                    .hover-top:before {
                        border-color: ${colors.border} transparent transparent transparent;
                        top: -1px;
                    }

                    .hover-top:after {
                        border-color: ${colors.background} transparent transparent transparent;
                        top: -2px;
                    }
                `}</style>
                <style jsx global>{`
                    /* By default, hide the loader */
                    .hover-loader {
                        display: none;
                    }

                    /* Don't display hovers while server-side computation is taking place */
                    [data-dash-is-loading=true] .hover {
                        display: none;
                    }

                    /* Show a loader when the hover immediately preceeding it is loading */
                    [data-dash-is-loading=true] + .hover-loader {
                        display: block;
                    }
                `}</style>
            </span>
        );
    }
}

ToolTip.defaultProps = {
    persisted_props: ['value'],
    persistence_type: 'local',
    direction: 'right',
    colors: {
        border: '#d6d6d6',
        background: 'white',
    },
};

ToolTip.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * Defines the direction in which the hover opens.
     */
    direction: PropTypes.oneOf([
        'top',
        'right',
        'bottom',
        'left'
    ]),

    /**
     * Holds the colors used by the ToolTip component. If you set these, you should specify colors for all properties, so:
     * colors: {
     *    border: '#d6d6d6',
     *    primary: '#1975FA',
     *    background: '#f9f9f9'
     *  }
     */
    colors: PropTypes.exact({
        border: PropTypes.string,
        background: PropTypes.string,
    }),

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    hidden: PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,

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
