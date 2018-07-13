# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Link(Component):
    """A Link component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional)
- href (string; optional)
- refresh (boolean; optional)
- className (string; optional)
- style (dict; optional)
- id (string; optional)

Available events: """
    @_explicitize_args
    def __init__(self, children=None, href=Component._NO_DEFAULT_ARG, refresh=False, className=Component._NO_DEFAULT_ARG, style=Component._NO_DEFAULT_ARG, id=Component._NO_DEFAULT_ARG, **kwargs):
        self._prop_names = ['children', 'href', 'refresh', 'className', 'style', 'id']
        self._type = 'Link'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'href', 'refresh', 'className', 'style', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        args = {k: _locals[k] for k in self._prop_names
                 if k != 'children' and not k.endswith('-*')}
        args.update(kwargs)  # For wildcard attrs

        for k in []:
            if k not in _explicit_args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Link, self).__init__(children=children, **args)

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
            return ('Link(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Link(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
