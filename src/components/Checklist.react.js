import {append, contains, merge, without} from 'ramda';
import React, {Component, PropTypes} from 'react';

class Checkbox extends Component {

    constructor(props) {
        super(props);

        if (props.collapsable) {
            this.state = {
                collapsed: props.initiallyExpanded
            };
        }
        this.handleCollapseClick = this.handleCollapseClick.bind(this);
      }

    handleCollapseClick() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {

        const {
            children,
            collapsable,
            disabled,
            onChange,
            inputClassName,
            inputStyle,
            isChecked,
            label,
            labelClassName,
            labelStyle,
            value
        } = this.props;

        const arrow = (
            <div
              onClick={this.handleCollapseClick}
            >
            '▾'
            </div>
        );

        const CollapsableChildren = (
              <div>
                {this.state.collapsed ? null : children}
              </div>
          );

        return (
            <div>
                <label
                    key={value}
                    style={labelStyle}
                    className={labelClassName}
                >
                    <input
                        checked={isChecked}
                        className={inputClassName}
                        disabled={Boolean(disabled)}
                        style={inputStyle}
                        type="checkbox"
                        onChange={onChange(value)}
                    />
                    {label}
                    {collapsable? arrow : null}
                </label>
                {collapsable? CollapsableChildren : children}
            </div>
        );
        }
}

Checkbox.propTypes = {
    /**
     * The checkbox's label
     */
    label: PropTypes.string,

    /**
     * The value of the checkbox. This value
     * corresponds to the items specified in the
     * `values` property.
     */
    value: PropTypes.string,

    /**
     * If true, this checkbox is disabled and can't be clicked on.
     */
    disabled: PropTypes.bool,


    /**
     * Optinal wrapped components within this option
     */
    children: PropTypes.node,

    /**
     * Show a button to show/hide children components of this option
     */
     collapsable: PropTypes.boolean,

    /**
     * Change default for the initiallyExpanded to be initially collapsed (hidden)
     */
     initiallyExpanded: PropTypes.boolean,

     isChecked: PropTypes.function,
     onChange: PropTypes.function
}

Checkbox.defaultProps = {
    defaultChildrenHidden: false
}

/**
 * Checklist is a component that encapsulates several checkboxes.
 * The values and labels of the checklist is specified in the `options`
 * property and the checked items are specified with the `values` property.
 * Each checkbox is rendered as an input with a surrounding label.
 */
export default class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {values: props.values};
    }

    componentWillReceiveProps(newProps) {
        this.setState({values: newProps.values});
    }

    handleOnChange(value) {
        const {fireEvent, setProps} = this.props;
        const values = this.state.values;
        let newValues;
        if (contains(value, values)) {
            newValues = without([value], values);
        } else {
            newValues = append(value, values);
        }
        this.setState({values: newValues});
        if (setProps) setProps({values: newValues});
        if (fireEvent) fireEvent({event: 'change'});
    }

    render() {
        const {
            className,
            id,
            options,
            style,
            values,
            ...rest
        } = this.props;

        return (
            <div id={id} style={style} className={className}>
                {options.map(option => {
                    let optionProps = merge(rest, option);
                    return (<Checkbox
                            onChange = {this.handleOnChange}
                            checked = {({value}) => {contains(value, values)}}
                            collapsable = {option.children && option.collapseChildrenButton}
                            props = {optionProps} />
                    );
                }
                )}
            </div>
        );
    }
}

Checklist.propTypes = {
    id: PropTypes.string,

    /**
     * An array of options
     */
    options: PropTypes.shape({
        /**
         * The checkbox's label
         */
        label: PropTypes.string,

        /**
         * The value of the checkbox. This value
         * corresponds to the items specified in the
         * `values` property.
         */
        value: PropTypes.string,

        /**
         * If true, this checkbox is disabled and can't be clicked on.
         */
        disabled: PropTypes.bool,


        /**
         * Optinal wrapped components within this option
         */
        children: PropTypes.node,

        /**
         * Show a button to show/hide children components of this option
         */
         collapseChildrenButton: PropTypes.boolean,

        /**
         * Change default for the collapseChildrenButton to be initially hidden
         */
         initiallyExpanded: PropTypes.boolean
    }),

    /**
     * The currently selected value
     */
    values: PropTypes.arrayOf(PropTypes.string),

    /**
     * The class of the container (div)
     */
    className: PropTypes.string,

    /**
     * The style of the container (div)
     */
    style: PropTypes.object,


    /**
     * The style of the <input> checkbox element
     */
    inputStyle: PropTypes.object,

    /**
     * The class of the <input> checkbox element
     */
    inputClassName: PropTypes.string,

    /**
     * The style of the <label> that wraps the checkbox input
     *  and the option's label
     */
    labelStyle: PropTypes.object,

    /**
     * The class of the <label> that wraps the checkbox input
     *  and the option's label
     */
    labelClassName: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the checkbox item gets selected.
     */
    fireEvent: PropTypes.func,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    dashEvents: PropTypes.oneOf(['change'])
};

Checklist.defaultProps = {
    inputStyle: {},
    inputClassName: '',
    labelStyle: {},
    labelClassName: '',
    options: []
};
