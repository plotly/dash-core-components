from dash.development.base_component import Component


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
- id (string; optional)
- options (list; optional): An array of options
- value (string | list; optional): The value of the input. If `multi` is false (the default)
then value is just a string that corresponds to the values
provided in the `options` property. If `multi` is true, then
multiple values can be selected at once, and `value` is an
array of items with values corresponding to those in the
`options` prop.
- className (string; optional): className of the dropdown element
- clearable (boolean; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- disabled (boolean; optional): If true, the option is disabled
- multi (boolean; optional): If true, the user can select multiple values
- placeholder (string; optional): The grey, default text shown when no option is selected
- searchable (boolean; optional): Whether to enable the searching feature or not

Available events: 'change'"""
    def __init__(self, **kwargs):
        self._prop_names = ['id', 'options', 'value', 'className', 'clearable', 'disabled', 'multi', 'placeholder', 'searchable']
        self._type = 'Dropdown'
        self._namespace = 'lib'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['id', 'options', 'value', 'className', 'clearable', 'disabled', 'multi', 'placeholder', 'searchable']
        self.available_wildcard_properties =            []

        for k in []:
            if k not in kwargs:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Dropdown, self).__init__(**kwargs)

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
            return ('Dropdown(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Dropdown(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
