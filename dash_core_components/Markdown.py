# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


schema = {'className': {'required': False, 'type': 'string', 'nullable': False}, 'dangerously_allow_html': {'required': False, 'type': 'boolean', 'nullable': False}, 'children': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'list', 'schema': {'type': 'string', 'nullable': False}}, {'nullable': True, 'type': ('string', 'number'), 'allowed': [None]}], 'nullable': True}, 'id': {'required': False, 'type': 'string', 'nullable': False}, 'containerProps': {'required': False, 'type': 'dict', 'nullable': False}}

class Markdown(Component):
    """A Markdown component.
A component that renders Markdown text as specified by the
CommonMark spec.

Keyword arguments:
- children (string | list | a value equal to: null; optional): A markdown string (or array of strings) that adhreres to the CommonMark spec
- id (string; optional)
- className (string; optional): Class name of the container element
- containerProps (dict; optional): An object containing custom element props to put on the container
element such as id or style
- dangerously_allow_html (boolean; optional): A boolean to control raw HTML escaping.
Setting HTML from code is risky because it's easy to
inadvertently expose your users to a cross-site scripting (XSS)
(https://en.wikipedia.org/wiki/Cross-site_scripting) attack.

Available events: """
    _schema = schema
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, containerProps=Component.UNDEFINED, dangerously_allow_html=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'containerProps', 'dangerously_allow_html']
        self._type = 'Markdown'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'id', 'className', 'containerProps', 'dangerously_allow_html']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args}
        args.pop('children', None)
        super(Markdown, self).__init__(children=children, **args)
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
            return ('Markdown(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Markdown(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
