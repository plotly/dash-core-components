# AUTO GENERATED FILE - DO NOT EDIT

export dcc_datepickerrange

"""
    dcc_datepickerrange(;kwargs...)
    dcc_datepickerrange(children::Any;kwargs...)
    dcc_datepickerrange(children_maker::Function;kwargs...)

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
- `start_date` (String; optional): Specifies the starting date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `start_date_id` (String; optional): The HTML element ID of the start date input field.
Not used by Dash, only by CSS.
- `end_date_id` (String; optional): The HTML element ID of the end date input field.
Not used by Dash, only by CSS.
- `end_date` (String; optional): Specifies the ending date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `min_date_allowed` (String; optional): Specifies the lowest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `max_date_allowed` (String; optional): Specifies the highest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `initial_visible_month` (String; optional): Specifies the month that is initially presented when the user
opens the calendar. Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- `start_date_placeholder_text` (String; optional): Text that will be displayed in the first input
box of the date picker when no date is selected. Default value is 'Start Date'
- `end_date_placeholder_text` (String; optional): Text that will be displayed in the second input
box of the date picker when no date is selected. Default value is 'End Date'
- `day_size` (Float64; optional): Size of rendered calendar days, higher number
means bigger day size and larger calendar overall
- `calendar_orientation` (a value equal to: 'vertical', 'horizontal'; optional): Orientation of calendar, either vertical or horizontal.
Valid options are 'vertical' or 'horizontal'.
- `is_RTL` (Bool; optional): Determines whether the calendar and days operate
from left to right or from right to left
- `reopen_calendar_on_clear` (Bool; optional): If True, the calendar will automatically open when cleared
- `number_of_months_shown` (Float64; optional): Number of calendar months that are shown when calendar is opened
- `with_portal` (Bool; optional): If True, calendar will open in a screen overlay portal,
not supported on vertical calendar
- `with_full_screen_portal` (Bool; optional): If True, calendar will open in a full screen overlay portal, will
take precedent over 'withPortal' if both are set to true,
not supported on vertical calendar
- `first_day_of_week` (a value equal to: 0, 1, 2, 3, 4, 5, 6; optional): Specifies what day is the first day of the week, values must be
from [0, ..., 6] with 0 denoting Sunday and 6 denoting Saturday
- `minimum_nights` (Float64; optional): Specifies a minimum number of nights that must be selected between
the startDate and the endDate
- `stay_open_on_select` (Bool; optional): If True the calendar will not close when the user has selected a value
and will wait until the user clicks off the calendar
- `show_outside_days` (Bool; optional): If True the calendar will display days that rollover into
the next month
- `month_format` (String; optional): Specifies the format that the month will be displayed in the calendar,
valid formats are variations of "MM YY". For example:
"MM YY" renders as '05 97' for May 1997
"MMMM, YYYY" renders as 'May, 1997' for May 1997
"MMM, YY" renders as 'Sep, 97' for September 1997
- `display_format` (String; optional): Specifies the format that the selected dates will be displayed
valid formats are variations of "MM YY DD". For example:
"MM YY DD" renders as '05 10 97' for May 10th 1997
"MMMM, YY" renders as 'May, 1997' for May 10th 1997
"M, D, YYYY" renders as '07, 10, 1997' for September 10th 1997
"MMMM" renders as 'May' for May 10 1997
- `disabled` (Bool; optional): If True, no dates can be selected.
- `clearable` (Bool; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- `style` (Dict; optional): CSS styles appended to wrapper div
- `className` (String; optional): Appends a CSS class to the wrapper div component.
- `updatemode` (a value equal to: 'singledate', 'bothdates'; optional): Determines when the component should update
its value. If `bothdates`, then the DatePicker
will only trigger its value when the user has
finished picking both dates. If `singledate`, then
the DatePicker will update its value
as one date is picked.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `persistence` (Bool | String | Float64; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, any `persisted_props` that the
user has changed while using the app will keep those changes, as long as
the new prop value also matches what was given originally.
Used in conjunction with `persistence_type` and `persisted_props`.
- `persisted_props` (Array of a value equal to: 'start_date', 'end_date's; optional): Properties whose user interactions will persist after refreshing the
component or the page.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
"""
function dcc_datepickerrange(; kwargs...)
        available_props = Set(Symbol[:id, :start_date, :start_date_id, :end_date_id, :end_date, :min_date_allowed, :max_date_allowed, :initial_visible_month, :start_date_placeholder_text, :end_date_placeholder_text, :day_size, :calendar_orientation, :is_RTL, :reopen_calendar_on_clear, :number_of_months_shown, :with_portal, :with_full_screen_portal, :first_day_of_week, :minimum_nights, :stay_open_on_select, :show_outside_days, :month_format, :display_format, :disabled, :clearable, :style, :className, :updatemode, :loading_state, :persistence, :persisted_props, :persistence_type])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("DatePickerRange", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_datepickerrange"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_datepickerrange(children::Any; kwargs...)
    result = dcc_datepickerrange(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_datepickerrange(children_maker::Function; kwargs...) = dcc_datepickerrange(children_maker(); kwargs...)
