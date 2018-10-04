import React from 'react';
import PropTypes from 'prop-types';
import {MentionsInput, Mention} from 'react-mentions';

export default class SearchInput extends React.Component {
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
        return true;
    }

    render() {
        const {id, className, style, search_data} = this.props;

        return (
            <div id={id} className={className} style={style}>
                <MentionsInput
                    value={this.state.value}
                    onChange={this.onChange}
                >
                    {search_data.map(e => (
                        <Mention trigger={e.trigger} data={e.options} />
                    ))}
                </MentionsInput>
            </div>
        );
    }
}

SearchInput.defaultProps = {
    value: '',
};

SearchInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    search_data: PropTypes.arrayOf(
        PropTypes.shape({
            trigger: PropTypes.string,
            options: PropTypes.string,
        })
    ),
    value: PropTypes.string,
    setProps: PropTypes.func,
};
