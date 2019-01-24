% Auto-generated: do not edit by hand
\name{coreDatePickerSingle}

\alias{coreDatePickerSingle}

\title{DatePickerSingle component}

\description{
DatePickerSingle is a tailor made component designed for selecting a single day off of a calendar.  The DatePicker integrates well with the Python datetime module with the startDate and endDate being returned in a string format suitable for creating datetime objects.  This component is based off of Airbnb's react-dates react component which can be found here: https://github.com/airbnb/react-dates
}

\usage{
coreDatePickerSingle(initial_visible_month=NULL, reopen_calendar_on_clear=NULL, disabled=NULL, id=NULL, number_of_months_shown=NULL, min_date_allowed=NULL, max_date_allowed=NULL, dashEvents=NULL, first_day_of_week=NULL, clearable=NULL, display_format=NULL, stay_open_on_select=NULL, month_format=NULL, is_RTL=NULL, show_outside_days=NULL, calendar_orientation=NULL, date=NULL, with_full_screen_portal=NULL, placeholder=NULL, fireEvent=NULL, with_portal=NULL, day_size=NULL, ...)
}

\arguments{
\item{initial_visible_month}{Specifies the month that is initially presented when the user
opens the calendar. Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'}

\item{reopen_calendar_on_clear}{If True, the calendar will automatically open when cleared}

\item{disabled}{If True, no dates can be selected.}

\item{id}{}

\item{number_of_months_shown}{Number of calendar months that are shown when calendar is opened}

\item{min_date_allowed}{Specifies the lowest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'}

\item{max_date_allowed}{Specifies the highest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'}

\item{dashEvents}{Dash-assigned callback that gets fired when the value changes.}

\item{first_day_of_week}{Specifies what day is the first day of the week, values must be
from [0, ..., 6] with 0 denoting Sunday and 6 denoting Saturday}

\item{clearable}{Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.}

\item{display_format}{Specifies the format that the selected dates will be displayed
valid formats are variations of "MM YY DD". For example:
"MM YY DD" renders as '05 10 97' for May 10th 1997
"MMMM, YY" renders as 'May, 1997' for May 10th 1997
"M, D, YYYY" renders as '07, 10, 1997' for September 10th 1997
"MMMM" renders as 'May' for May 10 1997}

\item{stay_open_on_select}{If True the calendar will not close when the user has selected a value
and will wait until the user clicks off the calendar}

\item{month_format}{Specifies the format that the month will be displayed in the calendar,
valid formats are variations of "MM YY". For example:
"MM YY" renders as '05 97' for May 1997
"MMMM, YYYY" renders as 'May, 1997' for May 1997
"MMM, YY" renders as 'Sep, 97' for September 1997}

\item{is_RTL}{Determines whether the calendar and days operate
from left to right or from right to left}

\item{show_outside_days}{If True the calendar will display days that rollover into
the next month}

\item{calendar_orientation}{Orientation of calendar, either vertical or horizontal.
Valid options are 'vertical' or 'horizontal'.}

\item{date}{Specifies the starting date for the component, best practice is to pass
value via datetime object}

\item{with_full_screen_portal}{If True, calendar will open in a full screen overlay portal, will
take precedent over 'withPortal' if both are set to True,
not supported on vertical calendar}

\item{placeholder}{Text that will be displayed in the input
box of the date picker when no date is selected.
Default value is 'Start Date'}

\item{fireEvent}{}

\item{with_portal}{If True, calendar will open in a screen overlay portal,
not supported on vertical calendar}

\item{day_size}{Size of rendered calendar days, higher number
means bigger day size and larger calendar overall}

\item{...}{wildcards of the form: `data-*` or `aria-*`}
}
