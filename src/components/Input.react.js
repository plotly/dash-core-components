import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {omit, isEmpty} from 'ramda';

/**
 * A basic HTML input control for entering text, numbers, or passwords.
 *
 * Note that checkbox and radio types are supported through
 * the Checklist and RadioItems component. Dates, times, and file uploads
 * are also supported through separate components.
 */
export default class Input extends Component {
    constructor(props) {
        super(props);
        if (!props.setProps || props.debounce) {
            this.state = {value: props.value};
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.setProps) {
            this.props = nextProps;
            if (this.props.debounce) {
                this.setState({
                    value: nextProps.value,
                });
            }
        }
    }

    render() {
        const {setProps, type, min, max, debounce, loading_state} = this.props;
        const {value} = setProps
            ? debounce
                ? this.state
                : this.props
            : this.state;
        return (
            <input
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                onChange={e => {
                    const newValue = e.target.value;
                    if (
                        (!isEmpty(min) && Number(newValue) < min) ||
                        (!isEmpty(max) && Number(newValue) > max)
                    ) {
                        return;
                    }
                    if (!debounce && setProps) {
                        const castValue =
                            type === 'number' ? Number(newValue) : newValue;
                        setProps({
                            value: castValue,
                        });
                    } else {
                        this.setState({value: newValue});
                    }
                }}
                onBlur={() => {
                    if (setProps) {
                        const payload = {
                            n_blur: this.props.n_blur + 1,
                            n_blur_timestamp: Date.now(),
                        };
                        if (debounce) {
                            payload.value =
                                type === 'number' ? Number(value) : value;
                        }
                        setProps(payload);
                    }
                }}
                onKeyPress={e => {
                    if (setProps && e.key === 'Enter') {
                        const payload = {
                            n_submit: this.props.n_submit + 1,
                            n_submit_timestamp: Date.now(),
                        };
                        if (debounce) {
                            payload.value =
                                type === 'number' ? Number(value) : value;
                        }
                        setProps(payload);
                    }
                }}
                value={value}
                {...omit(
                    [
                        'debounce',
                        'value',
                        'n_blur',
                        'n_blur_timestamp',
                        'n_submit',
                        'n_submit_timestamp',
                        'selectionDirection',
                        'selectionEnd',
                        'selectionStart',
                        'setProps',
                        'loading_state',
                    ],
                    this.props
                )}
            />
        );
    }
}

Input.defaultProps = {
    n_blur: 0,
    n_blur_timestamp: -1,
    n_submit: 0,
    n_submit_timestamp: -1,
    debounce: false,
};

Input.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The value of the input
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The input's inline styles
     */
    style: PropTypes.object,

    /**
     * The class of the input element
     */
    className: PropTypes.string,

    /**
     * If true, changes to input will be sent back to the Dash server only on enter or when losing focus.
     * If it's false, it will sent the value back on every change.
     */
    debounce: PropTypes.bool,

    /**
     * The type of control to render.
     */
    type: PropTypes.oneOf([
        // Only allowing the input types with wide browser compatibility
        'text',
        'number',
        'password',
        'email',
        'range',
        'search',
        'tel',
        'url',
        'hidden',
    ]),

    /**
     * This attribute indicates whether the value of the control can be automatically completed by the browser.
     */
    autoComplete: PropTypes.string,

    /**
     * The element should be automatically focused after the page loaded.
     * autoFocus is an HTML boolean attribute - it is enabled by a boolean or
     * 'autoFocus'. Alternative capitalizations `autofocus` & `AUTOFOCUS`
     * are also acccepted.
     */
    autoFocus: PropTypes.oneOfType([
        PropTypes.oneOf(['autoFocus', 'autofocus', 'AUTOFOCUS']),
        PropTypes.bool,
    ]),

    /**
     * If true, the input is disabled and can't be clicked on.
     * disabled is an HTML boolean attribute - it is enabled by a boolean or
     * 'disabled'. Alternative capitalizations `DISABLED`
     */
    disabled: PropTypes.oneOfType([
        PropTypes.oneOf(['disabled', 'DISABLED']),
        PropTypes.bool,
    ]),

    inputMode: PropTypes.oneOf([
        /**
         * Alphanumeric, non-prose content such as usernames and passwords.
         */
        'verbatim',

        /**
         * Latin-script input in the user's preferred language with typing aids such as text prediction enabled. For human-to-computer communication such as search boxes.
         */
        'latin',

        /**
         * As latin, but for human names.
         */
        'latin-name',

        /**
         * As latin, but with more aggressive typing aids. For human-to-human communication such as instant messaging or email.
         */
        'latin-prose',

        /**
         * As latin-prose, but for the user's secondary languages.
         */
        'full-width-latin',

        /**
         * Kana or romaji input, typically hiragana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
         */
        'kana',

        /**
         * Katakana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
         */
        'katakana',

        /**
         * Numeric input, including keys for the digits 0 to 9, the user's preferred thousands separator character, and the character for indicating negative numbers. Intended for numeric codes (e.g. credit card numbers). For actual numbers, prefer using type="number"
         */
        'numeric',

        /**
         * Telephone input, including asterisk and pound key. Use type="tel" if possible instead.
         */
        'tel',

        /**
         * Email input. Use type="email" if possible instead.
         */
        'email',

        /**
         * URL input. Use type="url" if possible instead.
         */
        'url',
    ]),

    /**
     * Identifies a list of pre-defined options to suggest to the user.
     * The value must be the id of a <datalist> element in the same document.
     * The browser displays only options that are valid values for this
     * input element.
     * This attribute is ignored when the type attribute's value is
     * hidden, checkbox, radio, file, or a button type.
     */
    list: PropTypes.string,

    /**
     * The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value.
     */
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. It can exceed the value of the size attribute. If it is not specified, the user can enter an unlimited number of characters. Specifying a negative number results in the default behavior (i.e. the user can enter an unlimited number of characters). The constraint is evaluated only when the value of the attribute has been changed.
     */
    maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value.
     */
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in Unicode code points) that the user can enter. For other control types, it is ignored.
     */
    minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file, otherwise it is ignored.
     */
    multiple: PropTypes.bool,

    /**
     * The name of the control, which is submitted with the form data.
     */
    name: PropTypes.string,

    /**
     * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url, email, or password, otherwise it is ignored. The regular expression language is the same as JavaScript RegExp algorithm, with the 'u' parameter that makes it treat the pattern as a sequence of unicode code points. The pattern is not surrounded by forward slashes.
     */
    pattern: PropTypes.string,

    /**
     * A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. Note: Do not use the placeholder attribute instead of a <label> element, their purposes are different. The <label> attribute describes the role of the form element (i.e. it indicates what kind of information is expected), and the placeholder attribute is a hint about the format that the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it.
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * This attribute indicates that the user cannot modify the value of the control. The value of the attribute is irrelevant. If you need read-write access to the input value, do not add the "readonly" attribute. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit).
     * readOnly is an HTML boolean attribute - it is enabled by a boolean or
     * 'readOnly'. Alternative capitalizations `readonly` & `READONLY`
     * are also acccepted.
     */
    readOnly: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['readOnly', 'readonly', 'READONLY']),
    ]),

    /**
     * This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate.
     * required is an HTML boolean attribute - it is enabled by a boolean or
     * 'required'. Alternative capitalizations `REQUIRED`
     * are also acccepted.
     */
    required: PropTypes.oneOfType([
        PropTypes.oneOf(['required', 'REQUIRED']),
        PropTypes.bool,
    ]),

    /**
     * The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. On platforms on which it's possible this value isn't known, the value can be "none"; for example, on macOS, the default direction is "none", then as the user begins to modify the selection using the keyboard, this will change to reflect the direction in which the selection is expanding.
     */
    selectionDirection: PropTypes.string,

    /**
     * The offset into the element's text content of the last selected character. If there's no selection, this value indicates the offset to the character following the current text input cursor position (that is, the position the next character typed would occupy).
     */
    selectionEnd: PropTypes.string,

    /**
     * The offset into the element's text content of the first selected character. If there's no selection, this value indicates the offset to the character following the current text input cursor position (that is, the position the next character typed would occupy).
     */
    selectionStart: PropTypes.string,

    /**
     * The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case it is an integer number of characters. Starting in, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password, otherwise it is ignored. In addition, the size must be greater than zero. If you do not specify a size, a default value of 20 is used.' simply states "the user agent should ensure that at least that many characters are visible", but different characters can have different widths in certain fonts. In some browsers, a certain string with x characters will not be entirely visible even if size is defined to at least x.
     */
    size: PropTypes.string,

    /**
     * Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked.
     */
    spellCheck: PropTypes.oneOfType([
        // enumerated property, not a boolean property: https://www.w3.org/TR/html51/editing.html#spelling-and-grammar-checking
        PropTypes.oneOf(['true', 'false']),
        PropTypes.bool,
    ]),

    /**
     * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum.
     */
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Number of times the `Enter` key was pressed while the input had focus.
     */
    n_submit: PropTypes.number,
    /**
     * Last time that `Enter` was pressed.
     */
    n_submit_timestamp: PropTypes.number,

    /**
     * Number of times the input lost focus.
     */
    n_blur: PropTypes.number,
    /**
     * Last time the input lost focus.
     */
    n_blur_timestamp: PropTypes.number,

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
};
