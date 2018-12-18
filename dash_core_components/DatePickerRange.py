# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


schema = {'initial_visible_month': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'datetime'}], 'nullable': False}, 'reopen_calendar_on_clear': {'required': False, 'type': 'boolean', 'nullable': False}, 'disabled': {'required': False, 'type': 'boolean', 'nullable': False}, 'setProps': {'required': False, 'nullable': False}, 'id': {'required': False, 'type': 'string', 'nullable': False}, 'updatemode': {'required': False, 'nullable': False, 'type': ('string', 'number'), 'allowed': ['singledate', 'bothdates']}, 'number_of_months_shown': {'required': False, 'type': 'number', 'nullable': False}, 'min_date_allowed': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'datetime'}], 'nullable': False}, 'max_date_allowed': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'datetime'}], 'nullable': False}, 'dashEvents': {'required': False, 'nullable': False, 'type': ('string', 'number'), 'allowed': ['change']}, 'first_day_of_week': {'required': False, 'nullable': False, 'type': ('string', 'number'), 'allowed': ['0', 0, 0.0, '1', 1, 1.0, '2', 2, 2.0, '3', 3, 3.0, '4', 4, 4.0, '5', 5, 5.0, '6', 6, 6.0]}, 'clearable': {'required': False, 'type': 'boolean', 'nullable': False}, 'display_format': {'required': False, 'type': 'string', 'nullable': False}, 'start_date': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'datetime'}], 'nullable': False}, 'stay_open_on_select': {'required': False, 'type': 'boolean', 'nullable': False}, 'end_date': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'datetime'}], 'nullable': False}, 'month_format': {'required': False, 'type': 'string', 'nullable': False}, 'is_RTL': {'required': False, 'type': 'boolean', 'nullable': False}, 'show_outside_days': {'required': False, 'type': 'boolean', 'nullable': False}, 'calendar_orientation': {'required': False, 'nullable': False, 'type': ('string', 'number'), 'allowed': ['vertical', 'horizontal']}, 'with_full_screen_portal': {'required': False, 'type': 'boolean', 'nullable': False}, 'fireEvent': {'required': False, 'nullable': False}, 'with_portal': {'required': False, 'type': 'boolean', 'nullable': False}, 'minimum_nights': {'required': False, 'type': 'number', 'nullable': False}, 'day_size': {'required': False, 'type': 'number', 'nullable': False}, 'start_date_placeholder_text': {'required': False, 'type': 'string', 'nullable': False}, 'end_date_placeholder_text': {'required': False, 'type': 'string', 'nullable': False}}

class DatePickerRange(Component):
    """A DatePickerRange component.
DatePickerRange is a tailor made component designed for selecting
timespan across multiple days off of a calendar.

The DatePicker integrates well with the Python datetime module with the
startDate and endDate being returned in a string format suitable for
creating datetime objects.

This component is based off of Airbnb's react-dates react component
which can be found here: https://github.com/airbnb/react-dates

Keyword arguments:
- id (string; optional)
- start_date (string; optional): Specifies the starting date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- end_date (string; optional): Specifies the ending date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- min_date_allowed (string; optional): Specifies the lowest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- max_date_allowed (string; optional): Specifies the highest selectable date for the component.
Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- initial_visible_month (string; optional): Specifies the month that is initially presented when the user
opens the calendar. Accepts datetime.datetime objects or strings
in the format 'YYYY-MM-DD'
- start_date_placeholder_text (string; optional): Text that will be displayed in the first input
box of the date picker when no date is selected. Default value is 'Start Date'
- end_date_placeholder_text (string; optional): Text that will be displayed in the second input
box of the date picker when no date is selected. Default value is 'End Date'
- day_size (number; optional): Size of rendered calendar days, higher number
means bigger day size and larger calendar overall
- calendar_orientation (a value equal to: 'vertical', 'horizontal'; optional): Orientation of calendar, either vertical or horizontal.
Valid options are 'vertical' or 'horizontal'.
- is_RTL (boolean; optional): Determines whether the calendar and days operate
from left to right or from right to left
- reopen_calendar_on_clear (boolean; optional): If True, the calendar will automatically open when cleared
- number_of_months_shown (number; optional): Number of calendar months that are shown when calendar is opened
- with_portal (boolean; optional): If True, calendar will open in a screen overlay portal,
not supported on vertical calendar
- with_full_screen_portal (boolean; optional): If True, calendar will open in a full screen overlay portal, will
take precedent over 'withPortal' if both are set to true,
not supported on vertical calendar
- first_day_of_week (a value equal to: 0, 1, 2, 3, 4, 5, 6; optional): Specifies what day is the first day of the week, values must be
from [0, ..., 6] with 0 denoting Sunday and 6 denoting Saturday
- minimum_nights (number; optional): Specifies a minimum number of nights that must be selected between
the startDate and the endDate
- stay_open_on_select (boolean; optional): If True the calendar will not close when the user has selected a value
and will wait until the user clicks off the calendar
- show_outside_days (boolean; optional): If True the calendar will display days that rollover into
the next month
- month_format (string; optional): Specifies the format that the month will be displayed in the calendar,
valid formats are variations of "MM YY". For example:
"MM YY" renders as '05 97' for May 1997
"MMMM, YYYY" renders as 'May, 1997' for May 1997
"MMM, YY" renders as 'Sep, 97' for September 1997
- display_format (string; optional): Specifies the format that the selected dates will be displayed
valid formats are variations of "MM YY DD". For example:
"MM YY DD" renders as '05 10 97' for May 10th 1997
"MMMM, YY" renders as 'May, 1997' for May 10th 1997
"M, D, YYYY" renders as '07, 10, 1997' for September 10th 1997
"MMMM" renders as 'May' for May 10 1997
- disabled (boolean; optional): If True, no dates can be selected.
- clearable (boolean; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- updatemode (a value equal to: 'singledate', 'bothdates'; optional): Determines when the component should update
its value. If `bothdates`, then the DatePicker
will only trigger its value when the user has
finished picking both dates. If `singledate`, then
the DatePicker will update its value
as one date is picked.

Available events: 'change'"""
    _schema = schema
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, start_date=Component.UNDEFINED, end_date=Component.UNDEFINED, min_date_allowed=Component.UNDEFINED, max_date_allowed=Component.UNDEFINED, initial_visible_month=Component.UNDEFINED, start_date_placeholder_text=Component.UNDEFINED, end_date_placeholder_text=Component.UNDEFINED, day_size=Component.UNDEFINED, calendar_orientation=Component.UNDEFINED, is_RTL=Component.UNDEFINED, reopen_calendar_on_clear=Component.UNDEFINED, number_of_months_shown=Component.UNDEFINED, with_portal=Component.UNDEFINED, with_full_screen_portal=Component.UNDEFINED, first_day_of_week=Component.UNDEFINED, minimum_nights=Component.UNDEFINED, stay_open_on_select=Component.UNDEFINED, show_outside_days=Component.UNDEFINED, month_format=Component.UNDEFINED, display_format=Component.UNDEFINED, disabled=Component.UNDEFINED, clearable=Component.UNDEFINED, updatemode=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'start_date', 'end_date', 'min_date_allowed', 'max_date_allowed', 'initial_visible_month', 'start_date_placeholder_text', 'end_date_placeholder_text', 'day_size', 'calendar_orientation', 'is_RTL', 'reopen_calendar_on_clear', 'number_of_months_shown', 'with_portal', 'with_full_screen_portal', 'first_day_of_week', 'minimum_nights', 'stay_open_on_select', 'show_outside_days', 'month_format', 'display_format', 'disabled', 'clearable', 'updatemode']
        self._type = 'DatePickerRange'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['id', 'start_date', 'end_date', 'min_date_allowed', 'max_date_allowed', 'initial_visible_month', 'start_date_placeholder_text', 'end_date_placeholder_text', 'day_size', 'calendar_orientation', 'is_RTL', 'reopen_calendar_on_clear', 'number_of_months_shown', 'with_portal', 'with_full_screen_portal', 'first_day_of_week', 'minimum_nights', 'stay_open_on_select', 'show_outside_days', 'month_format', 'display_format', 'disabled', 'clearable', 'updatemode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args}
        args.pop('children', None)
        super(DatePickerRange, self).__init__(**args)
    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('DatePickerRange(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'DatePickerRange(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
