# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tab(Component):
    """A Tab component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- disabled (boolean; optional): Determines if tab is disabled or not - defaults to false
- style (dict; optional): Overrides the default (inline) styles for the Tab component.
- disabled_className (string; optional): Appends a class to the Tab component when it is disabled.
- value (string; optional): Value for determining which Tab is currently selected
- label (string; optional): The tab's label
- className (string; optional): Appends a class to the Tab component.
- selected_className (string; optional): Appends a class to the Tab component when it is selected.
- selected_style (dict; optional): Overrides the default (inline) styles for the Tab component when it is selected.
- disabled_style (dict; optional): Overrides the default (inline) styles when disabled
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.

Available events: """
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, style=Component.UNDEFINED, disabled_className=Component.UNDEFINED, value=Component.UNDEFINED, id=Component.UNDEFINED, disabled=Component.UNDEFINED, selected_className=Component.UNDEFINED, selected_style=Component.UNDEFINED, label=Component.UNDEFINED, disabled_style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'disabled', 'style', 'disabled_className', 'value', 'label', 'className', 'selected_className', 'selected_style', 'disabled_style', 'id']
        self._type = 'Tab'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'disabled', 'style', 'disabled_className', 'value', 'label', 'className', 'selected_className', 'selected_style', 'disabled_style', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tab, self).__init__(children=children, **args)

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
            return ('Tab(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Tab(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
