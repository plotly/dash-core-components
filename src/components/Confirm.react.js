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
};

Confirm.propTypes = {
    id: PropTypes.string,

    /**
     * Message to show in the popup.
     */
    message: PropTypes.string,

    /**
     * Initial values
     * value: The value that will be sent in the result.
     * ask: Tell the component to ask the confirmation.
     */
    init: PropTypes.shape({
        value: PropTypes.any,
        ask: PropTypes.bool
    }),

    /**
     * If true, the callback will work even if the user click cancel.
     */
    call_on_cancel: PropTypes.bool,

    /**
     * The result sent when the user clicks ok.
     * timestamp: time at which the user clicked ok.
     * value: the value of init.value
     */
    result: PropTypes.shape({
        timestamp: PropTypes.number,
        value: PropTypes.any
    }),

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func
};
