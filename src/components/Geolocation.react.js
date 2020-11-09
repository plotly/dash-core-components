import {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * The CurrentLocation component gets geolocation of the device from the web browser.  See more info here:
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 */

/*
 *  TODO/Questions:
 *
 *            In current_location.py I have a checklist item to turn on or off watchPosition.  However it only works
 *            correctly the first time. When watchPosition is started for the second time I cannot make it stop
 *            without restarting the app. clearWatch() does not work the second time.  Is there a way to force the
 *            component to re-mount?  It's easiest to see in Firefox.
 * *
 */

export default class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
    }

    updatePosition() {
        if (!navigator.geolocation) {
            alert('Your browser does not support Geolocation');
        } else {
            this.props.setProps({
                update_now: false,
            });

            const positionOptions = {
                enableHighAccuracy: this.props.high_accuracy,
                maximumAge: this.props.maximum_age,
                timeout: this.props.timeout,
            };

            if (this.props.watch_position) {
                this.watchID = navigator.geolocation.watchPosition(
                    this.success,
                    this.error,
                    positionOptions
                );
            } else {
                navigator.geolocation.getCurrentPosition(
                    this.success,
                    this.error,
                    positionOptions
                );
            }
        }
    }

    componentDidMount() {
        this.updatePosition();
    }

    componentWillUnmount() {
        if (this.props.watch_position) {
            navigator.geolocation.clearWatch(this.watchId);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.watch_position !== this.props.watch_position &&
            prevProps.watch_position
        ) {
            navigator.geolocation.clearWatch(this.watchId);
        }
        if (
            this.props.update_now ||
            prevProps.watch_position !== this.props.watch_position ||
            prevProps.maximum_age !== this.props.maximum_age ||
            prevProps.timeout !== this.props.timeout ||
            prevProps.high_accuracy !== this.props.high_accuracy
        ) {
            this.updatePosition();
        }
    }

    success(pos) {
        const crd = pos.coords;
        const position_obj = {
            lat: crd.latitude,
            lon: crd.longitude,
            accuracy: crd.accuracy,
            alt: crd.altitude,
            altAccuracy: crd.altitudeAccuracy,
            speed: crd.speed,
            heading: crd.heading,
        };

        this.props.setProps({
            local_date: new Date(pos.timestamp).toLocaleString(),
            //  option:  have the component report is seconds rather than milliseconds:
            //   timestamp: Math.floor(pos.timestamp / 1000),
            timestamp: pos.timestamp,
            position: position_obj,
            position_error: null,
        });
    }

    error(err) {
        if (this.props.show_alert) {
            alert(`ERROR(${err.code}): ${err.message}`);
        }
        this.props.setProps({
            position: null,
            position_error: {
                code: err.code,
                message: err.message,
            },
        });
    }

    render() {
        return null;
    }
}

Geolocation.defaultProps = {
    watch_position: false,
    update_now: false,
    high_accuracy: false,
    position_error: null,
    maximum_age: 0,
    timeout: Infinity,
    show_alert: false,
};

Geolocation.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The local date and time when the device position was updated.
     * Format:  MM/DD/YYYY, hh:mm:ss p   where p is AM or PM
     */
    local_date: PropTypes.string,

    /**
     * The Unix timestamp in seconds from when the position was updated
     */
    timestamp: PropTypes.number,

    /**
     * (dict)The position of the device.  Lat, lon, and accuracy will always be returned.  The other data will be included
     * when available, otherwise it will be NaN.
     *A dictionary with the following keys:
     *       lat:  latitude in degrees,
     *       lon: longitude in degrees,
     *       accuracy: accuracy of the lat/lon in meters,
     *
     *       When available:
     *       alt:  altitude above mean sea level in meters,
     *       altAccuracy:  accuracy of the altitude  in meters,
     *       heading: compass heading in degrees,
     *       speed:  speed in meters per sec,
     *
     */
    position: PropTypes.shape({
        lat: PropTypes.number,
        lon: PropTypes.number,
        accuracy: PropTypes.number,
        alt: PropTypes.number,
        altAccuracy: PropTypes.number,
        heading: PropTypes.number,
        speed: PropTypes.number,
    }),

    /**
     *  Position error
     */
    position_error: PropTypes.shape({
        code: PropTypes.number,
        message: PropTypes.string,
    }),

    /** If true, error messages will be displayed as an alert
     *
     */
    show_alert: PropTypes.bool,

    /**
     *  (boolean; default False).  If false, position is obtained as an asynchronous request.  If true, then  position data
     * is updated when either the location changes or more accurate information becomes available
     */
    watch_position: PropTypes.bool,

    /**
     *  (boolean; default False).  Forces a one-time update to the position data.   If set to True in a callback, the browser
     *   will update the position data and reset update_now back to False.  This can, for example, be used to update the
     *  position with a button or an interval timer.
     */
    update_now: PropTypes.bool,

    /**
     *  (boolean; default False).   If true and if the device is able to provide a more accurate position,
     *  it will do so. Note that this can result in slower response times or increased power consumption (with a GPS
     *  chip on a mobile device for example). If false (the default value), the device can save resources by
     *  responding more quickly and/or using less power.
     */
    high_accuracy: PropTypes.bool,

    /**
     * The maximum age in milliseconds of a possible cached position that is acceptable to return. If set to 0,
     * it means that the device cannot use a cached position and must attempt to retrieve the real current position.
     * If set to Infinity the device must return a cached position regardless of its age. Default: 0.
     */
    maximum_age: PropTypes.number,

    /**
     * The maximum length of time (in milliseconds) the device is allowed to take in order to return a position.
     * The default value is Infinity, meaning that data will not be return until the position is available.
     */
    timeout: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
