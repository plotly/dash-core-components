import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {assoc, omit, contains, pickBy, merge} from 'ramda';
import {Range, createSliderWithTooltip} from 'rc-slider';

/**
 * A double slider with two handles.
 * Used for specifying a range of numerical values.
 */
export default class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this.propsToState = this.propsToState.bind(this);
        this.DashSlider = props.tooltip
            ? createSliderWithTooltip(Range)
            : Range;
    }

    propsToState(newProps) {
        this.setState({value: newProps.value});
    }

    componentWillReceiveProps(newProps) {
        if (newProps.tooltip !== this.props.tooltip) {
            this.DashSlider = newProps.tooltip
                ? createSliderWithTooltip(Range)
                : Range;
        }
        this.propsToState(newProps);
    }

    componentWillMount() {
        this.propsToState(this.props);
    }

    render() {
        const {
            className,
            id,
            loading_state,
            setProps,
            tooltip,
            updatemode,
            vertical,
            verticalHeight,
        } = this.props;
        const value = this.state.value;

        let tipProps;
        if (tooltip && tooltip.always_visible) {
            /**
             * clone `tooltip` but with renamed key `always_visible` -> `visible`
             * the rc-tooltip API uses `visible`, but `always_visible is more semantic
             * assigns the new (renamed) key to the old key and deletes the old key
             */
            tipProps = assoc('visible', tooltip.always_visible, tooltip);
            delete tipProps.always_visible;
        } else {
            tipProps = tooltip;
        }

        const truncatedMarks = this.props.marks
            ? pickBy(
                  (k, mark) => mark >= this.props.min && mark <= this.props.max,
                  this.props.marks
              )
            : this.props.marks;

        let style = {
            padding: '25px',
        };

        if (
            !vertical &&
            (!tooltip ||
                !tooltip.always_visible ||
                !contains(tooltip.placement, ['top', 'topLeft', 'topRight']))
        ) {
            style = merge(style, {paddingTop: '0px'});
        }

        if (
            vertical &&
            (!tooltip ||
                !tooltip.always_visible ||
                !contains(tooltip.placement, [
                    'left',
                    'topRight',
                    'bottomRight',
                ]))
        ) {
            style = merge(style, {paddingLeft: '0px'});
        }

        if (vertical) {
            style = merge(style, {height: verticalHeight + 'px'});
        }

        return (
            <div
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                className={className}
                style={style}
            >
                <this.DashSlider
                    onChange={value => {
                        if (updatemode === 'drag') {
                            setProps({value});
                        } else {
                            this.setState({value});
                        }
                    }}
                    onAfterChange={value => {
                        if (updatemode === 'mouseup') {
                            setProps({value});
                        }
                    }}
                    tipProps={tipProps}
                    value={value}
                    marks={truncatedMarks}
                    {...omit(
                        [
                            'className',
                            'value',
                            'setProps',
                            'marks',
                            'updatemode',
                            'verticalHeight',
                        ],
                        this.props
                    )}
                />
            </div>
        );
    }
}

RangeSlider.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Marks on the slider.
     * The key determines the position (a number),
     * and the value determines what will show.
     * If you want to set the style of a specific mark point,
     * the value should be an object which
     * contains style and label properties.
     */
    marks: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.exact({
                label: PropTypes.string,
                style: PropTypes.object,
            }),
        ])
    ),

    /**
     * The value of the input
     */
    value: PropTypes.arrayOf(PropTypes.number),

    /**
     * allowCross could be set as true to allow those handles to cross.
     */
    allowCross: PropTypes.bool,

    /**
     * Additional CSS class for the root DOM node
     */
    className: PropTypes.string,

    /**
     * Determine how many ranges to render, and multiple handles
     * will be rendered (number + 1).
     */
    count: PropTypes.number,

    /**
     * If true, the handles can't be moved.
     */
    disabled: PropTypes.bool,

    /**
     * When the step value is greater than 1,
     * you can set the dots to true if you want to
     * render the slider with dots.
     */
    dots: PropTypes.bool,

    /**
     * If the value is true, it means a continuous
     * value is included. Otherwise, it is an independent value.
     */
    included: PropTypes.bool,

    /**
     * Minimum allowed value of the slider
     */
    min: PropTypes.number,

    /**
     * Maximum allowed value of the slider
     */
    max: PropTypes.number,

    /**
     * pushable could be set as true to allow pushing of
     * surrounding handles when moving an handle.
     * When set to a number, the number will be the
     * minimum ensured distance between handles.
     */
    pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

    /**
     * Configuration for tooltips describing the current slider values
     */
    tooltip: PropTypes.exact({
        /**
         * Determines whether tooltips should always be visible
         * (as opposed to the default, visible on hover)
         */
        always_visible: PropTypes.bool,

        /**
         * Determines the placement of tooltips
         * See https://github.com/react-component/tooltip#api
         * top/bottom{*} sets the _origin_ of the tooltip, so e.g. `topLeft`
         * will in reality appear to be on the top right of the handle
         */
        placement: PropTypes.oneOf([
            'left',
            'right',
            'top',
            'bottom',
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight',
        ]),
    }),

    /**
     * Value by which increments or decrements are made
     */
    step: PropTypes.number,

    /**
     * If true, the slider will be vertical
     */
    vertical: PropTypes.bool,

    /**
     * The height, in px, of the slider if it is vertical.
     */
    verticalHeight: PropTypes.number,

    /**
     * Determines when the component should update
     * its value. If `mouseup`, then the slider
     * will only trigger its value when the user has
     * finished dragging the slider. If `drag`, then
     * the slider will update its value continuously
     * as it is being dragged.
     * Only use `drag` if your updates are fast.
     */
    updatemode: PropTypes.oneOf(['mouseup', 'drag']),

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

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

    /**
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),
};

RangeSlider.defaultProps = {
    updatemode: 'mouseup',
    persisted_props: ['value'],
    persistence_type: 'local',
    verticalHeight: 400,
};
