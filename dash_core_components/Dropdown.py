# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Dropdown(Component):
    """A Dropdown component.
Dropdown is an interactive dropdown element for selecting one or more
items.
The values and labels of the dropdown items are specified in the `options`
property and the selected item(s) are specified with the `value` property.

Use a dropdown when you have many options (more than 5) or when you are
constrained for space. Otherwise, you can use RadioItems or a Checklist,
which have the benefit of showing the users all of the items at once.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- options (dict; optional): An array of options {label: [string|number], value: [string|number]},
an optional disabled field can be used for each option. options has the following type: list of dicts containing keys 'label', 'value', 'disabled', 'title'.
Those keys have the following types:
  - label (string | number; required): The dropdown's label
  - value (string | number; required): The value of the dropdown. This value
corresponds to the items specified in the
`value` property.
  - disabled (boolean; optional): If true, this option is disabled and cannot be selected.
  - title (string; optional): The HTML 'title' attribute for the option. Allows for
information on hover. For more information on this attribute,
see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
- value (string | number | list of string | numbers; optional): The value of the input. If `multi` is false (the default)
then value is just a string that corresponds to the values
provided in the `options` property. If `multi` is true, then
multiple values can be selected at once, and `value` is an
array of items with values corresponding to those in the
`options` prop.
- optionHeight (number; default 35): height of each option. Can be increased when label lengths would wrap around
- className (string; optional): className of the dropdown element
- clearable (boolean; default True): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- disabled (boolean; default False): If true, this dropdown is disabled and the selection cannot be changed.
- multi (boolean; default False): If true, the user can select multiple values
- placeholder (string; optional): The grey, default text shown when no option is selected
- searchable (boolean; default True): Whether to enable the searching feature or not
- search_value (string; optional): The value typed in the DropDown for searching.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- loading_state (dict; optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading
- persistence (boolean | string | number; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- persisted_props (list of a value equal to: 'value's; default ['value']): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, options=Component.UNDEFINED, value=Component.UNDEFINED, optionHeight=Component.UNDEFINED, className=Component.UNDEFINED, clearable=Component.UNDEFINED, disabled=Component.UNDEFINED, multi=Component.UNDEFINED, placeholder=Component.UNDEFINED, searchable=Component.UNDEFINED, search_value=Component.UNDEFINED, style=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'options', 'value', 'optionHeight', 'className', 'clearable', 'disabled', 'multi', 'placeholder', 'searchable', 'search_value', 'style', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._type = 'Dropdown'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'options', 'value', 'optionHeight', 'className', 'clearable', 'disabled', 'multi', 'placeholder', 'searchable', 'search_value', 'style', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Dropdown, self).__init__(**args)
