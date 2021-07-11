# AUTO GENERATED FILE - DO NOT EDIT

export dcc_datepickerrange

"""
    dcc_datepickerrange(;kwargs...)

A DatePickerRange component.
DatePickerRange is a tailor made component designed for selecting
timespan across multiple days off of a calendar.

The DatePicker integrates well with the Python datetime module with the
startDate and endDate being returned in a string format suitable for
creating datetime objects.

This component is based off of Airbnb's react-dates react component
which can be found here: https://github.com/airbnb/react-dates
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `calendar_orientation` (a value equal to: 'vertical', 'horizontal'; optional): Orientation of calendar, either vertical or horizontal.
Valid options are 'vertical' or 'horizontal'.
- `className` (String; optional): Appends a CSS class to the wrapper div component.
- `clearable` (Bool; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- `day_size` (Real; optional): Size of rendered calendar days, higher number
means bigger day size and larger calendar overall
- `disabled` (Bool; optional): If True, no dates can be selected.
- `disabled_days` (Array of Strings; optional): Specifies additional days between min_date_allowed and max_date_allowed
that should be disabled. Accepted datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `display_format` (String; optional): Specifies the format that the selected dates will be displayed
valid formats are variations of "MM YY DD". For example:
"MM YY DD" renders as '05 10 97' for May 10th 1997
"MMMM, YY" renders as 'May, 1997' for May 10th 1997
"M, D, YYYY" renders as '07, 10, 1997' for September 10th 1997
"MMMM" renders as 'May' for May 10 1997
- `end_date` (String; optional): Specifies the ending date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `end_date_id` (String; optional): The HTML element ID of the end date input field.
Not used by Dash, only by CSS.
- `end_date_placeholder_text` (String; optional): Text that will be displayed in the second input
box of the date picker when no date is selected. Default value is 'End Date'
- `first_day_of_week` (a value equal to: 0, 1, 2, 3, 4, 5, 6; optional): Specifies what day is the first day of the week, values must be
from [0, ..., 6] with 0 denoting Sunday and 6 denoting Saturday
- `initial_visible_month` (String; optional): Specifies the month that is initially presented when the user
opens the calendar. Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `is_RTL` (Bool; optional): Determines whether the calendar and days operate
from left to right or from right to left
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `max_date_allowed` (String; optional): Specifies the highest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `min_date_allowed` (String; optional): Specifies the lowest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `minimum_nights` (Real; optional): Specifies a minimum number of nights that must be selected between
the startDate and the endDate
- `month_format` (String; optional): Specifies the format that the month will be displayed in the calendar,
valid formats are variations of "MM YY". For example:
"MM YY" renders as '05 97' for May 1997
"MMMM, YYYY" renders as 'May, 1997' for May 1997
"MMM, YY" renders as 'Sep, 97' for September 1997
- `number_of_months_shown` (Real; optional): Number of calendar months that are shown when calendar is opened
- `persisted_props` (Array of a value equal to: 'start_date', 'end_date's; optional): Properties whose user interactions will persist after refreshing the
component or the page.
- `persistence` (Bool | String | Real; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, any `persisted_props` that the
user has changed while using the app will keep those changes, as long as
the new prop value also matches what was given originally.
Used in conjunction with `persistence_type` and `persisted_props`.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
- `reopen_calendar_on_clear` (Bool; optional): If True, the calendar will automatically open when cleared
- `show_outside_days` (Bool; optional): If True the calendar will display days that rollover into
the next month
- `start_date` (String; optional): Specifies the starting date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `start_date_id` (String; optional): The HTML element ID of the start date input field.
Not used by Dash, only by CSS.
- `start_date_placeholder_text` (String; optional): Text that will be displayed in the first input
box of the date picker when no date is selected. Default value is 'Start Date'
- `stay_open_on_select` (Bool; optional): If True the calendar will not close when the user has selected a value
and will wait until the user clicks off the calendar
- `style` (Dict; optional): CSS styles appended to wrapper div
- `updatemode` (a value equal to: 'singledate', 'bothdates'; optional): Determines when the component should update
its value. If `bothdates`, then the DatePicker
will only trigger its value when the user has
finished picking both dates. If `singledate`, then
the DatePicker will update its value
as one date is picked.
- `with_full_screen_portal` (Bool; optional): If True, calendar will open in a full screen overlay portal, will
take precedent over 'withPortal' if both are set to true,
not supported on vertical calendar
- `with_portal` (Bool; optional): If True, calendar will open in a screen overlay portal,
not supported on vertical calendar
"""
function dcc_datepickerrange(; kwargs...)
        available_props = Symbol[:id, :calendar_orientation, :className, :clearable, :day_size, :disabled, :disabled_days, :display_format, :end_date, :end_date_id, :end_date_placeholder_text, :first_day_of_week, :initial_visible_month, :is_RTL, :loading_state, :max_date_allowed, :min_date_allowed, :minimum_nights, :month_format, :number_of_months_shown, :persisted_props, :persistence, :persistence_type, :reopen_calendar_on_clear, :show_outside_days, :start_date, :start_date_id, :start_date_placeholder_text, :stay_open_on_select, :style, :updatemode, :with_full_screen_portal, :with_portal]
        wild_props = Symbol[]
        return Component("dcc_datepickerrange", "DatePickerRange", "dash_core_components", available_props, wild_props; kwargs...)
end

