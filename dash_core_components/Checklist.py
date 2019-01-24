# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Checklist(Component):
    """A Checklist component.
Checklist is a component that encapsulates several checkboxes.
The values and labels of the checklist is specified in the `options`
property and the checked items are specified with the `values` property.
Each checkbox is rendered as an input with a surrounding label.

Keyword arguments:
- labelClassName (string; optional): The class of the <label> that wraps the checkbox input
 and the option's label
- style (dict; optional): The style of the container (div)
- inputClassName (string; optional): The class of the <input> checkbox element
- inputStyle (dict; optional): The style of the <input> checkbox element
- labelStyle (dict; optional): The style of the <label> that wraps the checkbox input
 and the option's label
- options (list; optional): An array of options
- className (string; optional): The class of the container (div)
- values (list; optional): The currently selected value
- id (string; optional)

Available events: 'change'"""
    @_explicitize_args
    def __init__(self, labelClassName=Component.UNDEFINED, style=Component.UNDEFINED, inputClassName=Component.UNDEFINED, inputStyle=Component.UNDEFINED, labelStyle=Component.UNDEFINED, options=Component.UNDEFINED, className=Component.UNDEFINED, values=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'className', 'values', 'id', 'options']
        self._type = 'Checklist'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'className', 'values', 'id', 'options']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Checklist, self).__init__(**args)

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
            return ('Checklist(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Checklist(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
