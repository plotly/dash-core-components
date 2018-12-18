# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


schema = {'search': {'required': False, 'type': 'string', 'nullable': False}, 'hash': {'required': False, 'type': 'string', 'nullable': False}, 'refresh': {'required': False, 'type': 'boolean', 'nullable': False}, 'href': {'required': False, 'type': 'string', 'nullable': False}, 'pathname': {'required': False, 'anyof': [{'type': 'string'}, {'nullable': True, 'type': ('string', 'number'), 'allowed': [None]}], 'nullable': True}, 'setProps': {'required': False, 'nullable': False}, 'id': {'required': True, 'type': 'string', 'nullable': False}}

class Location(Component):
    """A Location component.
Update and track the current window.location object through the window.history state.
Use in conjunction with the `dash_core_components.Link` component to make apps with multiple pages.

Keyword arguments:
- id (string; required)
- pathname (string | a value equal to: null; optional): pathname in window.location - e.g., "/my/full/pathname"
- search (string; optional): search in window.location - e.g., "?myargument=1"
- hash (string; optional): hash in window.location - e.g., "#myhash"
- href (string; optional): href in window.location - e.g., "/my/full/pathname?myargument=1#myhash"
- refresh (boolean; optional): Refresh the page when the location is updated?

Available events: """
    _schema = schema
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, pathname=Component.UNDEFINED, search=Component.UNDEFINED, hash=Component.UNDEFINED, href=Component.UNDEFINED, refresh=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'pathname', 'search', 'hash', 'href', 'refresh']
        self._type = 'Location'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'pathname', 'search', 'hash', 'href', 'refresh']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args}
        args.pop('children', None)
        super(Location, self).__init__(**args)
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
            return ('Location(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Location(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
