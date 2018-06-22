import PropTypes from 'prop-types';
import {Component} from 'react';

/**
 * ConfirmDialog is used to display the browser's native "confirm" modal,
 * with an optional message and two buttons ("OK" and "Cancel").
 * This ConfirmDialog can be used in conjunction with buttons when the user
 * is performing an action that should require an extra step of verification.
 */
export default class ConfirmDialog extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const { displayed, message, setProps, cancel_n_clicks, submit_n_clicks, n_clicks } = this.props;

        if (displayed) {
            new Promise(resolve => resolve(window.confirm(message))).then(result => setProps({
                n_clicks: n_clicks + 1,
                n_clicks_timestamp: Date.now(),
                cancel_n_clicks: !result ? cancel_n_clicks + 1 : cancel_n_clicks,
                submit_n_clicks: result ? submit_n_clicks + 1: submit_n_clicks,
                displayed: false,
            }));
        }
    }

    render() {
        return null;
    }
}

ConfirmDialog.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
    submit_n_clicks: 0,
    cancel_n_clicks: 0,
};

ConfirmDialog.propTypes = {
    id: PropTypes.string,

    /**
     * Message to show in the popup.
     */
    message: PropTypes.string,

    /**
     * Number of times the modal was submited or canceled.
     */
    n_clicks: PropTypes.number,
    /**
     * Last timestamp the popup was clicked.
     */
    n_clicks_timestamp: PropTypes.number,
    /**
     * Number of times the submit was clicked
     */
    submit_n_clicks: PropTypes.number,
    /**
     * Number of times the popup was canceled.
     */
    cancel_n_clicks: PropTypes.number,
    /**
     *  Set to true to send the ConfirmDialog.
     */
    displayed: PropTypes.bool,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func
};
