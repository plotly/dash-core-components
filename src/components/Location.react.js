import {Component} from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
/* global window:true */

/**
 * Update and track the current window.location object through the window.history state.
 * Use in conjunction with the `dash_core_components.Link` component to make apps with multiple pages.
 */
export default class Location extends Component {
    constructor(props) {
        super(props);
        this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(props) {
        const {
            hash,
            href,
            pathname,
            refresh,
            search,
            setProps
        } = props;

        // Keep track of props relating to window.location that may need to be updated via setProps
        const propsToSet = {};

        /**
         * Check if the field exists in props. If the prop with "fieldName" is not defined,
         * then it was not set by the user and needs to be equal to the value in window.location.
         * This only happens on page load (since props will no longer be undefined after componentDidMount).
         *
         * @param {string} fieldName
         *  The name of the prop in window.location and in the component's prop
         *
         * @returns {boolean}
         *  Returns true if the prop with fieldName is different and the window state needs to be updated
         */
        const checkExistsUpdateWindowLocation = (fieldName) => {
            const propVal = props[fieldName];

            if ((R.type(propVal) === 'Undefined' || propVal === null)
                && R.type(window.location[fieldName]) !== 'Undefined') {
                // propVal is undefined or null, but window.location has this fieldName defined
                propsToSet[fieldName] = window.location[fieldName];
            } else if (propVal !== window.location[fieldName]) {
                // Prop has changed?
                if (refresh) {
                    // Refresh the page?
                    window.location[fieldName] = propVal;
                } else if (this.props[fieldName] !== propVal) {
                    // If this prop has changed, need to setProps
                    propsToSet[fieldName] = propVal;
                    // This (`${fieldName}`: propVal) needs to be pushed in the window.history
                    return true;
                }
            }
            // This (`${fieldName}`: propVal) DOES NOT need to be pushed in the window.history
            return false;
        };

        // Check if the prop value needs to be updated (note that this mutates propsToSet)
        const pathnameUpdated = checkExistsUpdateWindowLocation('pathname');
        const hrefUpdated = checkExistsUpdateWindowLocation('href');
        const hashUpdated = checkExistsUpdateWindowLocation('hash');
        const searchUpdated = checkExistsUpdateWindowLocation('search');

        // propsToSet has been updated -- batch update to Dash
        if (R.type(setProps) === 'Function' && (Object.keys(propsToSet).length > 0)) {
            setProps(propsToSet);
        }

        // Special case -- overrides everything!
        if (hrefUpdated)
            {window.history.pushState({}, '', href);}
        else if (pathnameUpdated || hashUpdated || searchUpdated) {
            // Otherwise, we can mash everything together
            const searchVal = R.type(search) !== 'Undefined' ? search : '';
            const hashVal = R.type(hash) !== 'Undefined'  ? hash : '';
            window.history.pushState({}, '', `${pathname}${searchVal}${hashVal}`);
        }
    }

    componentDidMount() {
        const listener = () => {
            return () => {
                const {setProps} = this.props;
                if (setProps)
                    {setProps({
                        pathname: window.location.pathname,
                        href: window.location.href,
                        hash: window.location.hash,
                        search: window.location.search
                    });}
            }
        };
        window.addEventListener('onpopstate', listener());
        window.onpopstate = listener('POP');

        // non-standard, emitted by Link.react
        window.addEventListener('onpushstate', listener());
        this.updateLocation(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateLocation(nextProps);
    }

    render() {
        return null;
    }
}

Location.propTypes = {
    id: PropTypes.string.isRequired,

    /** pathname in window.location - e.g., "/my/full/pathname" */
    pathname: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null])
    ]),
    /** search in window.location - e.g., "?myargument=1" */
    search: PropTypes.string,
    /** hash in window.location - e.g., "#myhash" */
    hash: PropTypes.string,
    /** href in window.location - e.g., "/my/full/pathname?myargument=1#myhash" */
    href: PropTypes.string,

    /** Refresh the page when the location is updated? */
    refresh: PropTypes.bool,

    setProps: PropTypes.func,
};

Location.defaultProps = {
    refresh: true
};
