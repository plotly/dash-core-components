import React from 'react';
import PropTypes from 'prop-types';


class MemStore  {
    constructor() {
        this._data = {};
    }

    getItem(key) {
        return this._data[key];
    }

    setItem(key, value) {
        this._data[key] = value;
    }

    removeItem(key) {
        delete this._data[key];
    }
}

class WebStore {
    constructor(storage) {
        this._storage = storage;
    }

    getItem(key) {
        return JSON.parse(this._storage.getItem(key));
    }

    setItem(key, value) {
        this._storage.setItem(key, typeof value === 'string' ?
            value : JSON.stringify(value));
    }

    removeItem(key) {
        this._storage.removeItem(key);
    }
}

const _localStore = new WebStore(window.localStorage);
const _sessionStore = new WebStore(window.sessionStorage);

/**
 * Easily keep data on the client side with this component.
 * The data is not inserted in the DOM.
 * Data can be in memory, localStorage or sessionStorage.
 * The data will be kept with the id as key.
 */
export default class Storage extends React.Component {
    constructor(props) {
        super(props);

        if (props.storage_type === 'local') {
            this._backstore = _localStore;
        } else if (props.storage_type === 'session') {
            this._backstore = _sessionStore;
        } else if (props.storage_type === 'memory') {
            this._backstore = new MemStore();
        }

        this.onStorageChange = this.onStorageChange.bind(this);
    }

    onStorageChange(e) {
        const { id, setProps } = this.props;
        if (e.key === id && setProps  && e.newValue !== e.oldValue) {
            setProps({data: JSON.parse(e.newValue)});
        }
    }

    componentWillMount() {
        const { setProps, id, data, storage_type } = this.props;
        if (storage_type !== 'memory') {
            window.addEventListener('storage', this.onStorageChange);
        }

        if (setProps) {
            // Take the data from storage, ignore the prop data on load.
            const d = this._backstore.getItem(id);
            if (d !== data) {
                setProps({data: d});
                return;
            }
        }

        if (data) {
            this._backstore.setItem(id, data);
        }
    }

    componentWillUnmount() {
        if (this.props.storage_type !== 'memory') {
            window.removeEventListener('storage', this.onStorageChange);
        }
    }

    componentDidUpdate() {
        const { data, id, clear_data, setProps } = this.props;
        if (clear_data) {
            this._backstore.removeItem(id);
            if (setProps) {
                setProps({clear_data: false, data: null})
            }
        } else if (data) {
            this._backstore.setItem(id, data);
        }
    }

    render() {
        return null;
    }
}

Storage.defaultProps = {
    storage_type: 'memory',
    clear_data: false
};

Storage.propTypes = {
    /**
     * The key of the storage.
     */
    id: PropTypes.string.isRequired,

    /**
     * The type of the web storage.
     *
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    storage_type: PropTypes.oneOf(['local', 'session', 'memory']),

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
