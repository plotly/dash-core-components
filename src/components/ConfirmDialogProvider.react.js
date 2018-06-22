import React from 'react';
import PropTypes from 'prop-types';

import ConfirmDialog from './ConfirmDialog.react'



/**
 * Wrap children onClick to send a confirmation dialog.
 * You can add a button directly as a children:
 * `dcc.ConfirmDialogProvider(dcc.Button('click me', id='btn'), id='confirm')`
 */
export default class ConfirmDialogProvider extends React.Component {
    render() {
        const { id, setProps, children } = this.props;

        // Will lose the previous onClick of the child
        const wrapClick = (child) => React.cloneElement(child, {onClick: () =>
            {
                setProps({
                    displayed: true
                });
            }
        });

        const realChild = children.props
            ? children.props.children
            : children.map(e => e.props.children);

        return (
            <div id={id}>
                {
                    realChild && realChild.length
                        ? realChild.map(wrapClick)
                        : wrapClick(realChild)
                }
                <ConfirmDialog {...this.props}/>
            </div>
        )
    }
};

ConfirmDialogProvider.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
    submit_n_clicks: 0,
    cancel_n_clicks: 0,
};

ConfirmDialogProvider.propTypes = {
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
     * Set to true to send the popup.
     */
    send_confirm: PropTypes.bool,
    /**
     * Is the modal currently displayed.
     */
    displayed: PropTypes.bool,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
    children: PropTypes.any,
};
