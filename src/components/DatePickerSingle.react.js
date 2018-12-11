import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import PropTypes from 'prop-types';
import R from 'ramda';
import React, {Component} from 'react';

/**
 * DatePickerSingle is a tailor made component designed for selecting
 * a single day off of a calendar.
 *
 * The DatePicker integrates well with the Python datetime module with the
 * startDate and endDate being returned in a string format suitable for
 * creating datetime objects.
 *
 * This component is based off of Airbnb's react-dates react component
 * which can be found here: https://github.com/airbnb/react-dates
 */
export default class DatePickerSingle extends Component {
    constructor() {
        super();
        this.propsToState = this.propsToState.bind(this);
        this.isOutsideRange = this.isOutsideRange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    propsToState(newProps) {
        /*
         * state includes:
         * - user modifiable attributes
         * - moment converted attributes
         */
        const newState = {};
        const momentProps = [
            'date',
            'initial_visible_month',
            'max_date_allowed',
            'min_date_allowed',
        ];
        momentProps.forEach(prop => {
            if (R.type(newProps[prop]) !== 'Undefined') {
                newState[prop] = moment(newProps[prop]);
            }
            if (prop === 'max_date_allowed' && R.has(prop, newState)) {
                newState[prop].add(1, 'days');
            }
        });
        this.setState(newState);
    }

    componentWillReceiveProps(newProps) {
        this.propsToState(newProps);
    }

    componentWillMount() {
        this.propsToState(this.props);
    }

    isOutsideRange(date) {
        const {min_date_allowed, max_date_allowed} = this.state;
        const notUndefined = R.complement(
            R.pipe(
                R.type,
                R.equals('Undefined')
            )
        );
        return (
            (notUndefined(min_date_allowed) && date < min_date_allowed) ||
            (notUndefined(max_date_allowed) && date >= max_date_allowed)
        );
    }

    onDateChange(date) {
        const {setProps, fireEvent} = this.props;
        if (setProps && date !== null) {
            setProps({date: date.format('YYYY-MM-DD')});
        } else {
            this.setState({date});
        }
        if (fireEvent) {
            fireEvent('change');
        }
    }

    render() {
        const {date, focused, initial_visible_month} = this.state;

        const {
            calendar_orientation,
            clearable,
            day_size,
            disabled,
            display_format,
            first_day_of_week,
            is_RTL,
            month_format,
            number_of_months_shown,
            placeholder,
            reopen_calendar_on_clear,
            show_outside_days,
            stay_open_on_select,
            with_full_screen_portal,
            with_portal,
        } = this.props;

        const verticalFlag = calendar_orientation !== 'vertical';

        return (
            <SingleDatePicker
                date={date}
                onDateChange={this.onDateChange}
                focused={focused}
                onFocusChange={({focused}) => this.setState({focused})}
                initialVisibleMonth={() =>
                    date || initial_visible_month || moment()
                }
                isOutsideRange={this.isOutsideRange}
                numberOfMonths={number_of_months_shown}
                withPortal={with_portal && verticalFlag}
                withFullScreenPortal={with_full_screen_portal && verticalFlag}
                firstDayOfWeek={first_day_of_week}
                enableOutsideDays={show_outside_days}
                monthFormat={month_format}
                displayFormat={display_format}
                placeholder={placeholder}
                showClearDate={clearable}
                disabled={disabled}
                keepOpenOnDateSelect={stay_open_on_select}
                reopenPickerOnClearDate={reopen_calendar_on_clear}
                isRTL={is_RTL}
                orientation={calendar_orientation}
                daySize={day_size}
            />
        );
    }
}

DatePickerSingle.propTypes = {
    id: PropTypes.string,

    /**
     * Specifies the starting date for the component, best practice is to pass
     * value via datetime object
     */
    date: PropTypes.string,

    /**
     * Specifies the lowest selectable date for the component.
     * Accepts datetime.datetime objects or strings
     * in the format 'YYYY-MM-DD'
     */
    min_date_allowed: PropTypes.string,

    /**
     * Specifies the highest selectable date for the component.
     * Accepts datetime.datetime objects or strings
     * in the format 'YYYY-MM-DD'
     */
    max_date_allowed: PropTypes.string,

    /**
     * Specifies the month that is initially presented when the user
     * opens the calendar. Accepts datetime.datetime objects or strings
     * in the format 'YYYY-MM-DD'
     *
     */
    initial_visible_month: PropTypes.string,

    /**
     * Size of rendered calendar days, higher number
     * means bigger day size and larger calendar overall
     */
    day_size: PropTypes.number,

    /**
     * Orientation of calendar, either vertical or horizontal.
     * Valid options are 'vertical' or 'horizontal'.
     */
    calendar_orientation: PropTypes.oneOf(['vertical', 'horizontal']),

    /**
     * Determines whether the calendar and days operate
     * from left to right or from right to left
     */
    is_RTL: PropTypes.bool,
    /**
     * Text that will be displayed in the input
     * box of the date picker when no date is selected.
     * Default value is 'Start Date'
     */
    placeholder: PropTypes.string,

    /**
     * If True, the calendar will automatically open when cleared
     */
    reopen_calendar_on_clear: PropTypes.bool,

    /**
     * Number of calendar months that are shown when calendar is opened
     */
    number_of_months_shown: PropTypes.number,

    /**
     * If True, calendar will open in a screen overlay portal,
     * not supported on vertical calendar
     */
    with_portal: PropTypes.bool,

    /**
     * If True, calendar will open in a full screen overlay portal, will
     * take precedent over 'withPortal' if both are set to True,
     * not supported on vertical calendar
     */
    with_full_screen_portal: PropTypes.bool,

    /**
     * Specifies what day is the first day of the week, values must be
     * from [0, ..., 6] with 0 denoting Sunday and 6 denoting Saturday
     */
    first_day_of_week: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),

    /**
     * If True the calendar will not close when the user has selected a value
     * and will wait until the user clicks off the calendar
     */
    stay_open_on_select: PropTypes.bool,

    /**
     * If True the calendar will display days that rollover into
     * the next month
     */
    show_outside_days: PropTypes.bool,

    /**
     * Specifies the format that the month will be displayed in the calendar,
     * valid formats are variations of "MM YY". For example:
     * "MM YY" renders as '05 97' for May 1997
     * "MMMM, YYYY" renders as 'May, 1997' for May 1997
     * "MMM, YY" renders as 'Sep, 97' for September 1997
     */
    month_format: PropTypes.string,

    /**
     * Specifies the format that the selected dates will be displayed
     * valid formats are variations of "MM YY DD". For example:
     * "MM YY DD" renders as '05 10 97' for May 10th 1997
     * "MMMM, YY" renders as 'May, 1997' for May 10th 1997
     * "M, D, YYYY" renders as '07, 10, 1997' for September 10th 1997
     * "MMMM" renders as 'May' for May 10 1997
     */
    display_format: PropTypes.string,

    /**
     * If True, no dates can be selected.
     */
    disabled: PropTypes.bool,

    /**
     * Whether or not the dropdown is "clearable", that is, whether or
     * not a small "x" appears on the right of the dropdown that removes
     * the selected value.
     */
    clearable: PropTypes.bool,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    dashEvents: PropTypes.oneOf(['change']),

    fireEvent: PropTypes.func,
};

DatePickerSingle.defaultProps = {
    calendar_orientation: 'horizontal',
    is_RTL: false,
    day_size: 39,
    with_portal: false,
    with_full_screen_portal: false,
    show_outside_days: true,
    first_day_of_week: 0,
    number_of_months_shown: 1,
    stay_open_on_select: false,
    reopen_calendar_on_clear: false,
    clearable: false,
    disabled: false,
};
