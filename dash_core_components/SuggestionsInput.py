# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SuggestionsInput(Component):
    """A SuggestionsInput component.


Keyword arguments:
- id (string; optional)
- className (string; optional)
- style (dict; optional)
- multi_line (boolean; optional): true -> <textarea>
false -> <input>
- value (string; optional): Current value of the input/textarea
- suggestions (list; required)
- suggestions_className (string; optional)
- suggestions_style (dict; optional)
- suggestion_selected_style (dict; optional)
- suggestion_selected_className (string; optional)

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, multi_line=Component.UNDEFINED, value=Component.UNDEFINED, suggestions=Component.REQUIRED, suggestions_className=Component.UNDEFINED, suggestions_style=Component.UNDEFINED, suggestion_selected_style=Component.UNDEFINED, suggestion_selected_className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'style', 'multi_line', 'value', 'suggestions', 'suggestions_className', 'suggestions_style', 'suggestion_selected_style', 'suggestion_selected_className']
        self._type = 'SuggestionsInput'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'className', 'style', 'multi_line', 'value', 'suggestions', 'suggestions_className', 'suggestions_style', 'suggestion_selected_style', 'suggestion_selected_className']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['suggestions']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SuggestionsInput, self).__init__(**args)

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
            return ('SuggestionsInput(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'SuggestionsInput(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
