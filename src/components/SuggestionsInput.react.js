import React from 'react';
import PropTypes from 'prop-types';
import {contains, merge, omit} from 'ramda';

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
    padding: '0.25rem;',
    position: 'absolute',
    top: 16,
    left: 0,
    zIndex: 1,
    display: 'block',
    backgroundColor: 'white',
};

const defaultSuggestionInputStyle = {
    position: 'relative',
    display: 'inline-block',
};

const Suggestion = props => (
    <div
        id={props.id}
        onClick={() => props.onSuggestion(props.value)}
        style={merge(
            props.selected
                ? defaultSelectedSuggestionStyle
                : defaultSuggestionStyle,
            props.suggestion_style || {}
        )}
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
    suggestion_style: PropTypes.object,
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
            onSuggestion,
        } = this.props;

        return (
            <div
                id={id}
                className={className}
                style={merge(defaultSuggestionsStyle, style)}
            >
                {options.map((e, i) => (
                    <Suggestion
                        key={`${trigger}-${i}`}
                        selected={index === i}
                        onSuggestion={onSuggestion}
                        trigger={trigger}
                        suggestion_style={suggestion_style}
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

const filterSuggestions = (captured, options) =>
    options.filter(e => e.value.match(captured));

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
            this.setState({
                currentTrigger: e.key,
                filteredOptions: triggers[e.key].options,
            });
        } else if (currentTrigger) {
            switch (e.key) {
                case 'Enter':
                case 'Tab':
                    this.onSuggestion(filteredOptions[index].value);
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
                    if (this.state.captured.length - 1 === 0) {
                        this.resetSuggestions();
                    } else {
                        this.setState({
                            captured: captured.slice(0, captured.length - 1),
                        });
                    }
                    break;
                default:
                    if (e.key.length === 1) {
                        this.filterSuggestions(
                            captured + e.key,
                            triggers[currentTrigger].options
                        );
                    }
            }
        }
    }

    filterSuggestions(captured, options) {
        const filteredOptions = filterSuggestions(captured, options);
        this.setState({captured, filteredOptions});
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
        const {value, captured} = this.state;

        this.setState({
            value: `${value.substring(
                0,
                value.indexOf(captured) - 1
            )}${suggestion}`,
        });
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
        const {id, multi_line} = this.props;
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
            <div style={defaultSuggestionInputStyle}>
                {input}
                {currentTrigger && (
                    <Suggestions
                        {...omit(
                            ['options'],
                            this.state.triggers[currentTrigger]
                        )}
                        options={filteredOptions}
                        index={index}
                        onSuggestion={this.onSuggestion}
                    />
                )}
            </div>
        );
    }
}

SuggestionsInput.defaultProps = {
    multi_line: true,
    value: '',
};

SuggestionsInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
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

    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
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
                    value: PropTypes.string,
                    display: PropTypes.string,
                    description: PropTypes.string,
                })
            ),
            className: PropTypes.string,
            style: PropTypes.object,
        })
    ).isRequired,

    suggestions_className: PropTypes.string,
    suggestions_style: PropTypes.object,
    suggestion_selected_style: PropTypes.object,
    suggestion_selected_className: PropTypes.string,
};
