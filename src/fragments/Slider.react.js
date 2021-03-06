import React, {Component} from 'react';
import ReactSlider, {createSliderWithTooltip} from 'rc-slider';
import {assoc, omit, pickBy} from 'ramda';
import computeSliderStyle from '../utils/computeSliderStyle';
import Input from '../components/Input.react.js';

import 'rc-slider/assets/index.css';

import {propTypes, defaultProps} from '../components/Slider.react';

const timeoutTime = 2000;

/**
 * A slider component with a single handle.
 */
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.DashSlider = props.tooltip
            ? createSliderWithTooltip(ReactSlider)
            : ReactSlider;
        this.SyncedInput = Input;
        this._computeStyle = computeSliderStyle();
        this.state = {value: props.value};
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.tooltip !== this.props.tooltip) {
            this.DashSlider = newProps.tooltip
                ? createSliderWithTooltip(ReactSlider)
                : ReactSlider;
        }
        if (newProps.value !== this.props.value) {
            this.props.setProps({drag_value: newProps.value});
            this.setState({value: newProps.value});
        }
    }

    UNSAFE_componentWillMount() {
        if (this.props.value !== null) {
            this.props.setProps({drag_value: this.props.value});
            this.setState({value: this.props.value});
        }
    }

    render() {
        const {
            className,
            id,
            loading_state,
            setProps,
            tooltip,
            updatemode,
            syncedInput,
            step,
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
                {syncedInput ? (
                    <this.SyncedInput
                        onChange={e => {
                            e.persist();
                            if (this.timeout) {
                                clearTimeout(this.timeout);
                            }
                            this.timeout = setTimeout(
                                function() {
                                    this.setState({
                                        value: Number(e.target.value),
                                    });
                                    setProps({
                                        drag_value: Number(e.target.value),
                                    });
                                }.bind(this),
                                timeoutTime
                            );
                        }}
                        onBlur={e => {
                            this.setState({value: Number(e.target.value)});
                            setProps({drag_value: Number(e.target.value)});
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                this.setState({value: Number(e.target.value)});
                                setProps({drag_value: Number(e.target.value)});
                            }
                        }}
                        type="number"
                        value={value}
                        step={step}
                        style={{
                            width: '15%',
                            minWidth: '100px',
                            marginRight: '30px',
                        }}
                    />
                ) : null}
                <this.DashSlider
                    onChange={value => {
                        if (updatemode === 'drag') {
                            setProps({value: value, drag_value: value});
                        } else {
                            this.setState({value: value});
                            setProps({drag_value: value});
                        }
                    }}
                    onAfterChange={value => {
                        if (updatemode === 'mouseup') {
                            setProps({value});
                        }
                    }}
                    /*
                    if/when rc-slider or rc-tooltip are updated to latest versions,
                    we will need to revisit this code as the getTooltipContainer function will need to be a prop instead of a nested property
                    */
                    tipProps={{
                        ...tipProps,
                        getTooltipContainer: node => node,
                    }}
                    style={{position: 'relative', float: 'left', width: '85%'}}
                    value={value}
                    marks={truncatedMarks}
                    {...omit(
                        [
                            'className',
                            'setProps',
                            'updatemode',
                            'value',
                            'drag_value',
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
