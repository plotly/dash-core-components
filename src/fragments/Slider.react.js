import React, {Component} from 'react';
import ReactSlider, {createSliderWithTooltip} from 'rc-slider';
import {assoc, omit, pickBy} from 'ramda';
import computeSliderStyle from '../utils/computeSliderStyle';

import 'rc-slider/assets/index.css';

import {propTypes, defaultProps} from '../components/Slider.react';

/**
 * A slider component with a single handle.
 */
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.propsToState = this.propsToState.bind(this);
        this.DashSlider = props.tooltip
            ? createSliderWithTooltip(ReactSlider)
            : ReactSlider;
        this._computeStyle = computeSliderStyle();
        this.state = {
            value: props.value,
        };
    }

    propsToState(newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({value: newProps.value});
        }
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.tooltip !== this.props.tooltip) {
            this.DashSlider = newProps.tooltip
                ? createSliderWithTooltip(ReactSlider)
                : ReactSlider;
        }
        this.propsToState(newProps);
    }

    UNSAFE_componentWillMount() {
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
             * the rc-tooltip API uses `visible`, but `always_visible` is more semantic
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

        return (
            <div
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                className={className}
                style={this._computeStyle(vertical, verticalHeight, tooltip)}
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
                            'setProps',
                            'updatemode',
                            'value',
                            'marks',
                            'verticalHeight',
                        ],
                        this.props
                    )}
                />
            </div>
        );
    }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
