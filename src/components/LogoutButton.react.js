import React from 'react';
import PropTypes from 'prop-types';

import './css/logout.css';

export default class LogoutButton extends React.Component {
    render() {
        const {id, logout_url, label, className, style} = this.props;
        return (
            <form
                action={logout_url}
                method="post"
                className="dash-logout-frame"
            >
                <button
                    className={`dash-logout-btn ${className}`}
                    style={style}
                    id={id}
                    type="submit"
                >
                    {label}
                </button>
            </form>
        );
    }
}

LogoutButton.defaultProps = {
    label: 'Logout',
};

LogoutButton.propTypes = {
    /**
     * Id of the button.
     */
    id: PropTypes.string,

    /**
     * Text of the button
     */
    label: PropTypes.string,
    /**
     * Url to submit a post logout request.
     */
    logout_url: PropTypes.string,
    /**
     * Style of the button
     */
    style: PropTypes.object,
    /**
     * CSS class for the button.
     */
    className: PropTypes.string,
    setProps: PropTypes.func,
};
