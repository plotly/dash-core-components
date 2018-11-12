# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Loading(Component):
    """A Loading component.
A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.

Keyword arguments:
- children (list | a list of or a singular dash component, string or number; optional): Array that holds components to render
- id (string; optional)
- type (a value equal to: 'graph', 'cube', 'circle', 'dot', 'default'; optional)
- loadingProp (string; optional): String that determines which prop to listen to when loading
- fullscreen (boolean; optional): Boolean that determines if the loading spinner will be displayed full-screen or not
- debug (boolean; optional): Boolean that determines if the loading spinner will display the status.propName and componentName
- className (string; optional): Additional CSS class for the root DOM node
- status (optional): Object that holds the status object coming from dash-renderer. status has the following type: dict containing keys 'isLoading', 'propName', 'componentName'.
Those keys have the following types: 
  - isLoading (boolean; optional): Determines if the component is loading or not
  - propName (string; optional): Holds which property is loading
  - componentName (string; optional): Holds the name of the component that is loading

Available events: """
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, type=Component.UNDEFINED, loadingProp=Component.UNDEFINED, fullscreen=Component.UNDEFINED, debug=Component.UNDEFINED, className=Component.UNDEFINED, status=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'type', 'loadingProp', 'fullscreen', 'debug', 'className', 'status']
        self._type = 'Loading'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'id', 'type', 'loadingProp', 'fullscreen', 'debug', 'className', 'status']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Loading, self).__init__(children=children, **args)

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
            return ('Loading(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Loading(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
