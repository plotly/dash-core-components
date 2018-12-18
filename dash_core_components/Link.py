# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


schema = {'style': {'required': False, 'type': 'dict', 'nullable': False}, 'refresh': {'required': False, 'type': 'boolean', 'nullable': False}, 'children': {'required': False, 'anyof': [{'anyof': [{'type': 'component'}, {'type': 'boolean'}, {'type': 'number'}, {'type': 'string'}, {'type': 'list', 'schema': {'type': ('component', 'boolean', 'number', 'string')}}]}, {'nullable': True, 'type': ('string', 'number'), 'allowed': [None]}], 'nullable': True}, 'className': {'required': False, 'type': 'string', 'nullable': False}, 'href': {'required': False, 'type': 'string', 'nullable': False}, 'id': {'required': False, 'type': 'string', 'nullable': False}}

class Link(Component):
    """A Link component.


Keyword arguments:
- children (a list of or a singular dash component, string or number | a value equal to: null; optional)
- href (string; optional)
- refresh (boolean; optional)
- className (string; optional)
- style (dict; optional)
- id (string; optional)

Available events: """
    _schema = schema
    @_explicitize_args
    def __init__(self, children=None, href=Component.UNDEFINED, refresh=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'href', 'refresh', 'className', 'style', 'id']
        self._type = 'Link'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'href', 'refresh', 'className', 'style', 'id']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args}
        args.pop('children', None)
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
