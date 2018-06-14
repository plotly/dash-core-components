import PropTypes from 'prop-types';
import {Component} from 'react';

/**
 * Confirm wraps window.confirm
 */
export default class Confirm extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        const previouslyAsked = prevProps.init && prevProps.init.ask;
        const currentlyAsking = this.props.init && this.props.init.ask;

        if (!previouslyAsked && currentlyAsking) {
            const accepted = window.confirm(this.props.message);
            if (!this.props.setProps) {
                return;
            }
            if (!accepted && !this.props.call_on_cancel) {
                this.props.setProps({init: {ask: false}});
            } else {
                this.props.setProps({
                    result: {
                        timestamp: Date.now(),
                        value: this.props.init.value,
                        accepted: accepted
                    },
                    init: {
                        ask: false
                    }
                })
            }
        }
    }

    render() {
        return null;
    }
}

Confirm.defaultProps = {
    result: {
        timestamp: -1
    },
    call_on_cancel: false
}

Confirm.propTypes = {
    id: PropTypes.string,
    message: PropTypes.string,
    init: PropTypes.shape({
        value: PropTypes.any,
        ask: PropTypes.bool
    }),
    call_on_cancel: PropTypes.bool,
    result: PropTypes.shape({
        timestamp: PropTypes.integer,
        value: PropTypes.any
    }),

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func
};
