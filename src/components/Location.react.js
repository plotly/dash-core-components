import {Component, PropTypes} from 'react';
/* global window:true */

/**
 * Update and track the current window.location object through the window.history state
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

            if (!propVal && window.location[fieldName] && setProps) { // Prop is undefined?
                const update = {};
                update[fieldName] = window.location[fieldName];
                setProps(update);
            } else if (propVal && (propVal !== window.location[fieldName])) { // Prop has changed?
                if (refresh) { // Refresh the page?
                    window.location[fieldName] = propVal;
                } else if ((this.props[fieldName] !== propVal)) { // If this prop has changed, need to setProps
                    const update = {};
                    update[fieldName] = propVal;

                    if (setProps)
                        setProps(update);
                    return true; // This needs to be pushed in the window.history
                }
            }

            return false;
        };

        // Check if the prop value needs to be updated (note that this mutates propsToSet)
        const pathnameUpdated = checkExistsUpdateWindowLocation('pathname');
        const hrefUpdated = checkExistsUpdateWindowLocation('href');
        const hashUpdated = checkExistsUpdateWindowLocation('hash');
        const searchUpdated = checkExistsUpdateWindowLocation('search');

        if (hrefUpdated) // Special case -- overrides everything!
            window.history.pushState({}, '', href);
        else if (pathnameUpdated || hashUpdated || searchUpdated) // Otherwise, we can mash everything together
            window.history.pushState({}, '', `${pathname}${search}${hash}`);
    }

    componentDidMount() {
        const listener = () => {
            return () => {
                const {setProps} = this.props;
                if (setProps)
                    setProps({
                        pathname: window.location.pathname,
                        href: window.location.href,
                        hash: window.location.hash,
                        search: window.location.search
                    });
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
    pathname: PropTypes.string,
    /** search in window.location - e.g., "?myargument=1" */
    search: PropTypes.string,
    /** hash in window.location - e.g., "#myhash" */
    hash: PropTypes.string,
    /** href in window.location - e.g., "/my/full/pathname?myargument=1#myhash" */
    href: PropTypes.string,

    /** Refresh the page when the location is updated? */
    refresh: PropTypes.bool
};

Location.defaultProps = {
    refresh: true
};
