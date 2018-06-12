from dash.development.base_component import Component


class RadioItems(Component):
    """A RadioItems component.
RadioItems is a component that encapsulates several radio item inputs.
The values and labels of the RadioItems is specified in the `options`
property and the seleced item is specified with the `value` property.
Each radio item is rendered as an input with a surrounding label.

Keyword arguments:
- id (string; optional)
- options (list; optional): An array of options
- value (string; optional): The currently selected value
- style (dict; optional): The style of the container (div)
- className (string; optional): The class of the container (div)
- inputStyle (dict; optional): The style of the <input> radio element
- inputClassName (string; optional): The class of the <input> radio element
- labelStyle (dict; optional): The style of the <label> that wraps the radio input
 and the option's label
- labelClassName (string; optional): The class of the <label> that wraps the radio input
 and the option's label

Available events: 'change'"""
    def __init__(self, **kwargs):
        self._prop_names = ['id', 'options', 'value', 'style', 'className', 'inputStyle', 'inputClassName', 'labelStyle', 'labelClassName']
        self._type = 'RadioItems'
        self._namespace = 'lib'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['id', 'options', 'value', 'style', 'className', 'inputStyle', 'inputClassName', 'labelStyle', 'labelClassName']
        self.available_wildcard_properties =            []

        for k in []:
            if k not in kwargs:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(RadioItems, self).__init__(**kwargs)

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
            return ('RadioItems(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'RadioItems(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
