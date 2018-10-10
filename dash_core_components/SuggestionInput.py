# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SuggestionInput(Component):
    """A SuggestionInput component.


Keyword arguments:
- id (string; optional)
- className (string; optional): Class name for the top div container.
- style (dict; optional): Style for the top div container.
- search_data (list; optional): Options for mentions.
- value (string; optional): The current value of the input.
- single_line (boolean; optional): Render <input> instead of <textarea>
- allow_space_in_query (boolean; optional): Suggestions stays open even if the user separate words with spaces.
- suggestion_portal_host_id (string; optional): Id of a component to render the suggestions into.
- markup (string; optional): Template to use when rendering the options
default: @[__display__](__id__)
- mentions_style (dict; optional): Global style to give to the wrapped <Mention/>'s
- mentions_className (string; optional): Global css class to give to every <Mention/> component.

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, search_data=Component.UNDEFINED, value=Component.UNDEFINED, single_line=Component.UNDEFINED, allow_space_in_query=Component.UNDEFINED, suggestion_portal_host_id=Component.UNDEFINED, markup=Component.UNDEFINED, mentions_style=Component.UNDEFINED, mentions_className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'style', 'search_data', 'value', 'single_line', 'allow_space_in_query', 'suggestion_portal_host_id', 'markup', 'mentions_style', 'mentions_className']
        self._type = 'SuggestionInput'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'className', 'style', 'search_data', 'value', 'single_line', 'allow_space_in_query', 'suggestion_portal_host_id', 'markup', 'mentions_style', 'mentions_className']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SuggestionInput, self).__init__(**args)

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
            return ('SuggestionInput(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'SuggestionInput(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
