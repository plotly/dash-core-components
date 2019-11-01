import React, {Component} from 'react';
import {assoc, omit} from 'ramda';
import {Range, createSliderWithTooltip} from 'rc-slider';

import {propTypes, defaultProps} from '../components/RangeSlider.react';

export default class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this.propsToState = this.propsToState.bind(this);
        this.DashSlider = props.tooltip
            ? createSliderWithTooltip(Range)
            : Range;
    }

    propsToState(newProps) {
        const state = {};

        if (newProps.value !== this.props.value) {
            state.value = newProps.value;
        }

        if (Object.keys(state)) {
            this.setState(state);
        }
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

        return (
            <div
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                className={className}
                style={vertical ? {height: '100%'} : {}}
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
                    {...omit(
                        ['className', 'value', 'setProps', 'updatemode'],
                        this.props
                    )}
                />
            </div>
        );
    }
}

RangeSlider.propTypes = propTypes;
RangeSlider.defaultProps = defaultProps;
