import React from 'react';
import PropTypes from 'prop-types';
import {MentionsInput, Mention} from 'react-mentions';

/**
 * Wrapper around react-mentions. Suggest options when a character trigger is
 * typed.
 *
 * Example:
 *
 * ```python
 * dcc.SuggestionInput(suggestions=[{
 *     'trigger': '$',
 *     'options': [
 *         {
 *             'id': 'bob',
 *             'display': 'bob',
 *         },
 *         {
 *             'id': 'bill',
 *             'display': 'bill'
 *         }
 *     ],
 * }])
 * ```
 */
export default class SuggestionInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({value: e.target.value});
        if (this.props.setProps) {
            this.props.setProps({
                value: e.target.value,
            });
        }
    }

    render() {
        const {
            id,
            className,
            style,
            suggestions,
            single_line,
            allow_space_in_query,
            markup,
            mentions_style,
            mentions_className,
        } = this.props;

        return (
            <MentionsInput
                value={this.state.value}
                onChange={this.onChange}
                singleLine={single_line}
                className={className}
                style={style}
                markup={markup}
                allowSpaceInQuery={allow_space_in_query}
                id={id}
            >
                {suggestions.map(e => (
                    <Mention
                        trigger={e.trigger}
                        data={e.options}
                        style={e.style || mentions_style}
                        className={e.className || mentions_className}
                    />
                ))}
            </MentionsInput>
        );
    }
}

SuggestionInput.defaultProps = {
    value: '',
    single_line: false,
    allow_space_in_query: false,
};

SuggestionInput.propTypes = {
    id: PropTypes.string,

    /**
     * Class name for the top div container.
     */
    className: PropTypes.string,
    /**
     * Style for the top div container.
     */
    style: PropTypes.object,

    /**
     * Options for mentions.
     */
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The symbol to open the suggestions.
             */
            trigger: PropTypes.string,
            /**
             * Options to suggest when the symbol is typed.
             */
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    display: PropTypes.string,
                })
            ),
            /**
             * Style of the suggestions for this trigger.
             */
            style: PropTypes.object,
            /**
             * ClassName for a suggestion.
             */
            className: PropTypes.string,
        })
    ),

    /**
     * The current value of the input.
     */
    value: PropTypes.string,

    /**
     * Render <input> instead of <textarea>
     */
    single_line: PropTypes.bool,
    /**
     * Suggestions stays open even if the user separate words with spaces.
     */
    allow_space_in_query: PropTypes.bool,

    /**
     * Template to use when rendering the options
     * default: @[__display__](__id__)
     */
    markup: PropTypes.string,

    /**
     * Global style to give to the wrapped <Mention/>'s
     */
    mentions_style: PropTypes.object,
    /**
     * Global css class to give to every <Mention/> component.
     */
    mentions_className: PropTypes.string,

    setProps: PropTypes.func,
};
