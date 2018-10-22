import React from 'react';
import PropTypes from 'prop-types';
import {contains, merge, omit, mergeAll, memoize} from 'ramda';

// Style for single suggestion
const defaultSuggestionStyle = {
    padding: '0.125rem',
};

// Style for the selected suggestion (highlight the current selected.)`
const defaultSelectedSuggestionStyle = merge(defaultSuggestionStyle, {
    backgroundColor: '#428eff',
    color: 'white',
});

// Style for the suggestion container.
const defaultSuggestionsStyle = {
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    backgroundColor: 'white',
    border: '1px solid #dcdcdc',
};

const defaultSuggestionInputStyle = {
    position: 'relative',
    display: 'inline-block',
};

const getComputedNumStyleAttr = (elem, propName) =>
    parseFloat(window.getComputedStyle(elem, null).getPropertyValue(propName));

const Suggestion = props => (
    <div
        id={props.id}
        onClick={() => props.onSuggestion(props.value)}
        style={merge(
            props.selected
                ? defaultSelectedSuggestionStyle
                : defaultSuggestionStyle,
            props.selected ? props.selected_style || {} : props.style || {}
        )}
        title={props.description}
        className={props.selected ? props.selected_className : props.className}
    >
        {props.trigger}
        {props.display || props.value}
    </div>
);

Suggestion.propTypes = {
    id: PropTypes.string,
    onSuggestion: PropTypes.func,
    value: PropTypes.string,
    selected: PropTypes.bool,
    trigger: PropTypes.string,
    display: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    selected_style: PropTypes.object,
    selected_className: PropTypes.string,
    description: PropTypes.string,
};

class Suggestions extends React.Component {
    render() {
        const {
            options,
            id,
            className,
            trigger,
            index,
            style,
            suggestion_style,
            suggestion_className,
            selected_style,
            selected_className,
            onSuggestion,
            leftOffset,
        } = this.props;

        return (
            <div
                id={id}
                className={className}
                style={mergeAll([
                    defaultSuggestionsStyle,
                    style,
                    {left: leftOffset},
                ])}
            >
                {options.map((e, i) => (
                    <Suggestion
                        key={`${trigger}-${i}`}
                        selected={index === i}
                        onSuggestion={onSuggestion}
                        trigger={trigger}
                        style={suggestion_style}
                        className={suggestion_className}
                        selected_style={selected_style}
                        selected_className={selected_className}
                        {...e}
                    />
                ))}
            </div>
        );
    }
}

const mapSuggestions = suggestions =>
    suggestions.reduce((a, e) => {
        a[e.trigger] = e;
        return a;
    }, {});

const filterSuggestions = memoize((captured, options) =>
    options.filter(e => e.value.match(captured))
);

/**
 * An `<input>`/<textarea> with associated triggers that will display a menu
 * with suggestions.
 */
export default class SuggestionsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            index: 0,
            currentTrigger: null,
            triggers: mapSuggestions(props.suggestions),
            captured: '',
            filteredOptions: [],
        };
        this._input = null;
        this._initialValue = props.value;
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuggestion = this.onSuggestion.bind(this);
        this.resetSuggestions = this.resetSuggestions.bind(this);
        this.preventTabNavigation = this.preventTabNavigation.bind(this);
        this._suggestionsRequest = null;
    }

    requestSuggestions(route, captured) {
        const url = captured
            ? `${route}?captured=${encodeURIComponent(captured)}`
            : route;

        if (!this._suggestionsRequest) {
            this._suggestionsRequest = fetch(url, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
            })
                .then(r => r.json())
                .then(o => {
                    this.setState({
                        filteredOptions: o,
                    });
                    this._suggestionsRequest = null;
                });
        } else {
            this._suggestionsRequest.then(() =>
                this.requestSuggestions(route, captured)
            );
        }
    }

    updateSuggestions({captured, options, suggestion_route}) {
        this.setState({captured});
        if (suggestion_route) {
            this.requestSuggestions(suggestion_route, captured);
        } else {
            this.filterSuggestions(captured, options);
        }
    }

    onKeyUp(e) {
        const {
            currentTrigger,
            index,
            triggers,
            captured,
            filteredOptions,
        } = this.state;

        if (
            !currentTrigger &&
            contains(e.key, Object.keys(this.state.triggers))
        ) {
            const trigger = triggers[e.key];
            this.setState({currentTrigger: e.key});
            if (trigger.suggestion_route) {
                this.requestSuggestions(trigger.suggestion_route, '');
            } else {
                this.setState({
                    filteredOptions: trigger.options,
                });
            }
        } else if (currentTrigger) {
            const trigger = triggers[currentTrigger];
            const options = trigger.options;
            switch (e.key) {
                case 'Enter':
                case 'Tab':
                    if (filteredOptions.length > 0) {
                        this.onSuggestion(filteredOptions[index].value);
                    } else {
                        this.resetSuggestions();
                    }
                    break;
                case 'ArrowUp':
                    if (index > 0) {
                        this.setState({index: index - 1});
                    }
                    break;
                case 'ArrowDown':
                    if (index < filteredOptions.length - 1) {
                        this.setState({index: index + 1});
                    }
                    break;
                case 'Backspace':
                    if (this.state.captured.length - 1 <= 0) {
                        this.resetSuggestions();
                    } else {
                        this.updateSuggestions({
                            captured: captured.slice(0, captured.length - 1),
                            suggestion_route: trigger.suggestion_route,
                            options,
                        });
                    }
                    break;
                case ' ':
                    if (!this.props.allow_space_in_suggestions) {
                        this.resetSuggestions();
                    } else {
                        this.updateSuggestions({
                            captured: captured + e.key,
                            options,
                            suggestion_route: trigger.suggestion_route,
                        });
                    }
                    break;
                default:
                    if (e.key.length === 1) {
                        this.updateSuggestions({
                            captured: captured + e.key,
                            suggestion_route: trigger.suggestion_route,
                            options,
                        });
                    }
            }
        }
    }

    filterSuggestions(captured, options) {
        const filteredOptions = filterSuggestions(captured, options);
        this.setState({filteredOptions});
    }

    onChange(e) {
        const {setProps} = this.props;

        this.setState({value: e.target.value});
        if (setProps) {
            setProps({
                value: e.target.value,
            });
        }
    }

    preventTabNavigation(e) {
        if (e.key === 'Tab') {
            this._input.focus();
            e.preventDefault();
        }
    }

    onSuggestion(suggestion) {
        const {value, captured, currentTrigger} = this.state;

        const payload = {
            value: `${value.substring(0, value.indexOf(captured) - 1)}${
                this.props.include_trigger ? currentTrigger : ''
            }${suggestion}`,
        };

        this.setState(payload);
        if (this.props.setProps) {
            this.props.setProps(payload);
        }
        this.resetSuggestions();
    }

    resetSuggestions() {
        this.setState({
            currentTrigger: null,
            index: 0,
            captured: '',
        });
    }

    componentWillReceiveProps(e) {
        const payload = {
            triggers: mapSuggestions(e.suggestions),
        };
        if (
            e.value &&
            e.value !== this._initialValue &&
            e.value !== this.state.value
        ) {
            payload.value = e.value;
        }
        this.setState(payload);
    }

    render() {
        const {
            id,
            multi_line,
            style,
            className,
            suggestions_style,
            suggestions_className,
            suggestion_style,
            suggestion_className,
            suggestion_selected_className,
            suggestion_selected_style,
        } = this.props;

        const {value, currentTrigger, index, filteredOptions} = this.state;

        const inputProps = {
            id,
            value: value,
            onChange: this.onChange,
            onKeyUp: this.onKeyUp,
            tabindex: -1,
            ref: r => (this._input = r),
            onKeyDown: this.preventTabNavigation,
        };

        const input = multi_line ? (
            <textarea {...inputProps} />
        ) : (
            <input {...inputProps} />
        );

        return (
            <div
                style={merge(defaultSuggestionInputStyle, style)}
                className={className}
            >
                {input}
                {currentTrigger && (
                    <Suggestions
                        {...omit(
                            ['options'],
                            this.state.triggers[currentTrigger]
                        )}
                        options={filteredOptions}
                        index={index}
                        topOffset={
                            this._input
                                ? `${getComputedNumStyleAttr(
                                      this._input,
                                      'height'
                                  )}px`
                                : '16px'
                        }
                        leftOffset={
                            this._hiddenValue
                                ? `${getComputedNumStyleAttr(
                                      this._hiddenValue,
                                      'width'
                                  )}`
                                : 0
                        }
                        onSuggestion={this.onSuggestion}
                        style={suggestions_style}
                        className={suggestions_className}
                        suggestion_style={suggestion_style}
                        suggestion_className={suggestion_className}
                        selected_style={suggestion_selected_style}
                        selected_className={suggestion_selected_className}
                    />
                )}
                <div
                    ref={r => (this._hiddenValue = r)}
                    style={merge(style, {
                        display: 'inline-block',
                        visibility: 'hidden',
                    })}
                >
                    {this.state.value}
                </div>
            </div>
        );
    }
}

SuggestionsInput.defaultProps = {
    multi_line: false,
    value: '',
    allow_space_in_suggestions: false,
};

SuggestionsInput.propTypes = {
    id: PropTypes.string,
    /**
     * Css class for the container of the input and suggestions modal.
     */
    className: PropTypes.string,
    /**
     * Style object given to the topmost container.
     */
    style: PropTypes.object,

    /**
     * true -> <textarea>
     * false -> <input>
     */
    multi_line: PropTypes.bool,
    /**
     * Current value of the input/textarea
     */
    value: PropTypes.string,

    /**
     * Suggestions array containing the options to show
     * when a trigger is activated.
     */
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * Activate these suggestions when the trigger is entered in the
             * input value.
             */
            trigger: PropTypes.string,
            /**
             * Call this route to retrieve the options
             * It needs to return a json array of options shape.
             */
            suggestion_route: PropTypes.string,
            /**
             * The options this suggestion trigger will display.
             */
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired,
                    display: PropTypes.string,
                    description: PropTypes.string,
                })
            ),
        })
    ).isRequired,

    /**
     * Continue capturing the input when a space is entered while
     * the suggestion menu is open.
     */
    allow_space_in_suggestions: PropTypes.bool,

    /**
     * Include the trigger in the rendered value.
     */
    include_trigger: PropTypes.bool,

    /**
     * Given to the suggestions modal.
     */
    suggestions_className: PropTypes.string,
    /**
     * Given and merged with the default style to the suggestions modal.
     */
    suggestions_style: PropTypes.object,

    /**
     * Style of the suggestion elements (single suggestion).
     */
    suggestion_style: PropTypes.object,
    /**
     * CSS class for a single suggestion element.
     */
    suggestion_className: PropTypes.string,
    /**
     * Style of a suggestion while it is selected.
     */
    suggestion_selected_style: PropTypes.object,
    /**
     * CSS class for a suggestion while it is selected.
     */
    suggestion_selected_className: PropTypes.string,

    setProps: PropTypes.any,
};
