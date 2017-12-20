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

        const propsToSet = {};

        /**
         * If any of these are not defined, then they were not set by the user
         * and they need to be equal to the value in window.location.
         * This only happens on page load (since props will no longer be
         * undefined after componentDidMount).
         */
        // pathname checks
        if (!pathname)
            propsToSet.pathname = window.location.pathname;
        else if (pathname && pathname !== window.location.pathname) {
            // pathname is defined and not equal to the current window pathname
            if (refresh) // Refresh the page
                window.location.pathname = pathname;
            else
                propsToSet.pathname = pathname;
        }


        if (!hash && window.location.hash)
            propsToSet.hash = window.location.hash;
        if (!href)
            propsToSet.href = window.location.href;
        if (!search && window.location.search)
            propsToSet.search = window.location.search;




        /*
         * if pathname isn't defined, then it wasn't set by the user
         * and it needs to be equal to the window.location.pathname
         * this just happens on page load
         */
        if (!pathname) {
            setProps({pathname: window.location.pathname});
        } else if (pathname !== window.location.pathname) {
            if (props.refresh) {
                // Refresh the page
                window.location.pathname = pathname;
            } else {
                // Just push the new location into the URL
                if (setProps) setProps({pathname});

                // Update the state to include pathname and search
                window.history.pushState({}, '', `${pathname}${search}`);
            }
        }

        /*
         * if search isn't defined, then it wasn't set by the user
         * and it needs to be equal to the window.location.search
         * this just happens on page load
         */
        if (!search) {
            setProps({search: window.location.search});
        } else if (search !== window.location.search) {
            if (props.refresh) {
                // Refresh the page
                window.location.pathname = pathname;
            } else {
                // Just push the new location into the URL
                if (setProps) setProps({pathname});
                window.history.pushState({}, '', pathname);
            }
        }
    }

    componentDidMount() {
        const listener = () => {
            return () => {
                const {setProps} = this.props;
                if (setProps) setProps({pathname: window.location.pathname});
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
    refresh: PropTypes.bool,
};

Location.defaultProps = {
    refresh: true
};
