import {PropTypes, Component} from 'react';

/**
 * Beta: URL is a component that represents the state of the path of
 * the URL in the address bar.
 * When the URL's value changes, the page doesn't not refresh but the
 * URL in the address bar changes.
 *
 * This URL component can be used for declaritively describing
 * URLs and updating the app when the URL changes.
 *
 * Combine this component with the `Link` component for setting the
 * path of the address bar without without callbacks.
 */

/* eslint-disable no-console*/

class URL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bound: false,
            hasOverriddenPushState: false
        };
        this.bindEvents = this.bindEvents.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
    }



    bindEvents() {
        console.warn('---> bindEvents');
        this.setState({bound: true});
        window.onpopstate = (event) => {
            console.warn('onpopstate', event);
            /*
             * If the URL was updated by a property change like
             * if it was an Output component, then the locationbar
             * should already be updated through updateUrl.
             *
             * If it was updated through the history, then
             * sync the location pathname with the props.
             */
            console.warn(`${this.props.pathname} =? ${document.location.pathname}: ${(this.props.pathname !== document.location.pathname)}`);
            if (this.props.pathname !== document.location.pathname)  {
                if (this.props.setProps) {
                    console.warn('--> setProps', document.location);
                    this.props.setProps({
                        pathname: document.location.pathname
                    });
                }
                if (this.props.fireEvent) {
                    this.props.fireEvent({
                        event: 'change'
                    });
                }
            }
        }
    }

    componentWillMount() {
        this.bindEvents();
        if (this.props.pathname) {
            this.updateUrl(this.props.pathname);
        }
    }

    componentWillReceiveProps(newProps) {
        if (!this.state.bound) {
            this.bindEvents();
        }
        if (newProps.pathname !== this.props.pathname) {
            this.updateUrl(newProps.pathname);
        }
    }


    updateUrl(url) {
        if (url !== document.location.pathname) {
            window.history.pushState({}, document.title, url);
            if (this.props.fireEvent) {
                this.props.fireEvent({
                    event: 'change'
                });
            }
        }
    }

    render () {
        return null;
    }
}

URL.propTypes = {
    id: PropTypes.string,
    /**
     * The URL path as shown in the location bar of the web browser
     */
    pathname: PropTypes.string,

    /**
     * Dash controller supplied function that updates the state tree.
     */
    setProps: PropTypes.func,

    /**
     * Dash controller supplied function that fires events
     */
    fireEvent: PropTypes.func
};

export default URL
