import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper around the Web Storage api.
 * Persistent data storage on the client side. Keep the data upon refreshes.
 */
export default class Storage extends React.Component {
    constructor(props) {
        super(props);
        this._backstore = props.storage_type === 'local' ?
            window.localStorage : window.sessionStorage;
        this.onStorageChange = this.onStorageChange.bind(this);
    }

    getItem(key) {
        return JSON.parse(this._backstore.getItem(key));
    }

    setItem(key, value) {
        this._backstore.setItem(key, typeof value === 'string' ?
            value : JSON.stringify(value));
    }

    removeItem(key) {
        this._backstore.removeItem(key);
    }

    onStorageChange(e) {
        const { id, setProps} = this.props;
        if (e.key === id && setProps  && e.newValue !== e.oldValue) {
            setProps({data: JSON.parse(e.newValue)});
        }
    }

    componentWillMount() {
        window.addEventListener('storage', this.onStorageChange);
        const { setProps, id, data } = this.props;
        if (setProps) {
            // Take the data from storage, ignore the prop data on load.
            const data = this.getItem(id);
            if (data) {
                setProps({data});
                return;
            }
        }
        if (data) {
            this.setItem(id, data);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('storage', this.onStorageChange);
    }

    componentDidUpdate() {
        const { data, id, clear_data, setProps } = this.props;
        if (clear_data) {
            this.removeItem(id);
            if (setProps) {
                setProps({clear_data: false, data: null})
            }
        } else if (data) {
            this.setItem(id, data);
        }
    }

    render() {
        return null;
    }
}

Storage.defaultProps = {
    storage_type: 'local',
    clear_data: false
};

Storage.propTypes = {
    /**
     * The key of the storage.
     */
    id: PropTypes.string.isRequired,

    /**
     * The type of the web storage.
     * local -> window.localStorage: data is kept after the browser quit.
     * session -> window.sessionStorage: data is cleared once the browser quit.
     */
    storage_type: PropTypes.oneOf(['local', 'session']),

    /**
     * The stored data for the key.
     */
    data: PropTypes.object,

    /**
     * Set to true to remove the data contained in `data_key`.
     */
    clear_data: PropTypes.bool,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func
};
