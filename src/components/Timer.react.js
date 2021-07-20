import {includes} from 'ramda';
import PropTypes from 'prop-types';
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import prettyMilliseconds from 'pretty-ms';

function getFormat(format_type) {
    const formats = {
        default: {},
        verbose: {verbose: true},
        colons: {colonNotation: true},
        compact: {compact: true},
    };
    return formats[format_type];
}

/**
 * The Timer component has all the functionality of the Interval component plus
 * the following additional features:
 *
 * Operate in either `countdown` or `stopwatch` (count up) modes.
 * Display custom messages, or start/stop jobs at specified times.
 * Convert milliseconds into human readable times.
 * Update messages clientside to help improve app performance.
 * Specify the elapsed times to fire a callback rather than every interval
 **/

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.intervalId = null;
        this.renderMessage = null;
        this.reportInterval = this.reportInterval.bind(this);
        this.handleTimer = this.handleTimer.bind(this);
        this.handleMessages = this.handleMessages.bind(this);
    }

    handleTimer(props) {
        const {
            n_intervals,
            max_intervals,
            disabled,
            rerun,
            interval,
            time,
            mode,
            duration,
        } = this.props;

        // Check if timer should stop or shouldn't even start
        if (
            max_intervals === 0 ||
            disabled ||
            (n_intervals >= max_intervals && max_intervals !== -1) ||
            duration === 0 ||
            duration < 0 ||
            (mode === 'countdown' && duration === null) || // operates as stopwatch only if duration is null
            (mode === 'countdown' && time === 0 && !rerun) ||
            (mode === 'stopwatch' && time === duration && !rerun) ||
            time < 0
        ) {
            // stop existing timer
            if (this.intervalId) {
                this.clearTimer();
            }
            // and don't start a timer
            return;
        }

        // keep the existing timer running
        if (this.intervalId) {
            if (
                (mode === 'countdown' && time === 0 && rerun) ||
                (mode === 'stopwatch' && time === duration && rerun)
            ) {
                this.initTimer(props);
            }
            return;
        }

        // it hasn't started yet (& it should start)
        this.intervalId = window.setInterval(this.reportInterval, interval);
    } // end handle timer

    handleMessages(props, new_time) {
        const {messages, timer_format} = this.props;

        const messagesObj = Object.assign({}, messages);
        if (new_time in messagesObj) {
            this.renderMessage = `${messagesObj[new_time]}`;
        }

        if (timer_format !== 'none') {
            const formatObj = getFormat(timer_format);
            this.renderMessage = prettyMilliseconds(new_time, formatObj);
        }
    } // end handleMessages

    reportInterval() {
        const {setProps, n_intervals, interval, mode, duration, fire_times} =
            this.props;

        const new_n_intervals = n_intervals + 1;
        const updateProps = {n_intervals: new_n_intervals};

        let new_time;
        new_time = duration > 0 ? duration - interval * new_n_intervals : 0;
        if (
            mode === 'stopwatch' ||
            duration === null ||
            duration === undefined
        ) {
            new_time = interval * new_n_intervals;
        }

        this.handleMessages(this.props, new_time);
        updateProps.time = new_time;

        if (includes(new_time, fire_times)) {
            updateProps.at_fire_time = new_time;
        }
        setProps(updateProps);
    } // end report interval

    initTimer() {
        const {setProps, duration, mode} = this.props;

        let startTime;
        if (mode === 'countdown' && duration > 0) {
            startTime = duration;
        } else {
            // stopwatch
            startTime = 0;
        }
        setProps({
            n_intervals: 0,
            reset: false,
            time: startTime,
        });
    }

    resetTimer(props) {
        this.clearTimer();
        this.initTimer(props);
        this.handleTimer(props);
    }

    clearTimer() {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }

    componentDidMount() {
        this.initTimer(this.props);
        this.handleTimer(this.props);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.interval !== this.props.interval ||
            prevProps.duration !== this.props.duration ||
            prevProps.max_intervals !== this.props.max_intervals ||
            prevProps.reset !== this.props.reset ||
            prevProps.rerun !== this.props.rerun ||
            prevProps.messages !== this.props.messages ||
            prevProps.mode !== this.props.mode
        ) {
            this.resetTimer(this.props);
        } else {
            this.handleTimer(this.props);
        }
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    render() {
        const {id, class_name, style} = this.props;
        return (
            <div id={id} style={style} className={class_name}>
                <div>{this.renderMessage}</div>
            </div>
        );
    }
}

Timer.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * This component will increment the counter `n_intervals` every
     * `interval` milliseconds
     */
    interval: PropTypes.number,

    /**
     * If True, the n_interval counter and the timer no longer updates. This pauses the timer.
     */
    disabled: PropTypes.bool,

    /**
     * Number of times the interval has passed (read-only)
     */
    n_intervals: PropTypes.number,

    /**
     * Number of times the interval will be fired.
     * If -1, then the interval has no limit (the default)
     * and if 0 then the interval stops running.
     */
    max_intervals: PropTypes.number,

    /**
     * When in countdown mode, the timer will count down to zero from the starting `duration` and will show the number
     *  of milliseconds remaining.
     *  When in stopwatch mode, the timer will count up from zero and show the number of milliseconds elapsed.
     *  (read-only)
     */
    time: PropTypes.number,

    /**
     * The timer will count down to zero in `countdown` mode and count up from zero in `stopwatch` mode
     */
    mode: PropTypes.oneOf(['stopwatch', 'countdown']),

    /**
     * Sets the number of milliseconds the timer will run. A duration > 0 is required for the countdown timer to run.
     * If 0 then the timer will not start.
     */
    duration: PropTypes.number,

    /**
     * This will start the timer at the beginning with the given prop settings.
     */
    reset: PropTypes.bool,

    /**
     * A list of the time(s) in milliseconds at which to fire a callback. This can be used to start a task at a given
     * time rather than using the timer. Since the timer is typically set at a small interval like one second, using
     * fire_times can reduce the number of times a callback is fired and can increase app performance. Each time must be a
     * multiple of the interval.
     */
    fire_times: PropTypes.arrayOf(PropTypes.number),

    /**
     * This is updated when the timer reaches one of the times in the `fire_times` list. Using `at_fire_time` in a
     * callback will trigger the callback at the time(s) in `fire_times` (Read only)
     */
    at_fire_time: PropTypes.number,

    /**
     * When True, the timer repeats once the timer has run for the number of milliseconds set in the duration.
     */
    rerun: PropTypes.bool,

    /**
     * Timer messages to be displayed by the component rather than showing the timer. It is a dictionary in the form of:
     * {integer: string} where integer is the time in milliseconds of when the string message is to be displayed.
     * Note: timer_format will override messages. For example, {10000 : "updating in 10 seconds"} will display the message
     * "updating in 10 seconds" once the timer equals 10000.
     */
    messages: PropTypes.objectOf(PropTypes.string),

    /**
     * If a timer is displayed, it will override timer `messages`.  This formats the timer (milliseconds) into human
     * readable formats.  The options are:
     *  `'none'`: no timer will be displayed;
     *  `'display'`:  example - 1337000000 milliseconds will display as: '15d 11h 23m 20s';
     *  `'compact'`: will show only the first unit: 1h 10m → 1h ;
     *  `'verbose'`: will show full-length units. Example --  5 hours 1 minute 45 seconds
     *  `'colons'`: Useful when you want to show time without the time units, similar to
     *                   a digital watch. Will always shows time in at least minutes: 1s → 0:01.
     *                   Example - 5h 1m 45s → 5:01:45.
     */
    timer_format: PropTypes.oneOf([
        'none',
        'default',
        'compact',
        'verbose',
        'colons',
    ]),

    /**
     * The messages styles
     */
    style: PropTypes.object,

    /**
     * The class  name of the messages container
     */
    class_name: PropTypes.string,

    /**
     * Dash assigned callback
     */
    setProps: PropTypes.func,
};

Timer.defaultProps = {
    interval: 1000,
    n_intervals: 0,
    max_intervals: -1,
    duration: null,
    time: 0,
    mode: 'stopwatch',
    reset: true,
    rerun: false,
    messages: {},
    fire_times: [],
    at_fire_time: null,
    timer_format: 'none',
};
