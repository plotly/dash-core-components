# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


schema = {'cancel_n_clicks': {'required': False, 'type': 'number', 'nullable': False}, 'cancel_n_clicks_timestamp': {'required': False, 'type': 'number', 'nullable': False}, 'submit_n_clicks': {'required': False, 'type': 'number', 'nullable': False}, 'setProps': {'required': False, 'nullable': False}, 'displayed': {'required': False, 'type': 'boolean', 'nullable': False}, 'submit_n_clicks_timestamp': {'required': False, 'type': 'number', 'nullable': False}, 'children': {'required': False, 'anyof': [{'type': 'string'}, {'type': 'number'}, {'type': 'boolean'}, {'type': 'component'}, {'nullable': True, 'type': ('string', 'number'), 'allowed': [None]}, {'type': 'list', 'schema': {'anyof': [{'type': 'string'}, {'type': 'number'}, {'type': 'boolean'}, {'type': 'component'}, {'nullable': True, 'type': ('string', 'number'), 'allowed': [None]}], 'nullable': True}}], 'nullable': True}, 'message': {'required': False, 'type': 'string', 'nullable': False}, 'id': {'required': False, 'type': 'string', 'nullable': False}}

class ConfirmDialogProvider(Component):
    """A ConfirmDialogProvider component.
A wrapper component that will display a confirmation dialog
when its child component has been clicked on.

For example:
```
dcc.ConfirmDialogProvider(
    html.Button('click me', id='btn'),
    message='Danger - Are you sure you want to continue.'
    id='confirm')
```

Keyword arguments:
- children (string | number | boolean | dash component | a value equal to: null | list; optional): The children to hijack clicks from and display the popup.
- id (string; optional)
- message (string; optional): Message to show in the popup.
- submit_n_clicks (number; optional): Number of times the submit was clicked
- submit_n_clicks_timestamp (number; optional): Last time the submit button was clicked.
- cancel_n_clicks (number; optional): Number of times the popup was canceled.
- cancel_n_clicks_timestamp (number; optional): Last time the cancel button was clicked.
- displayed (boolean; optional): Is the modal currently displayed.

Available events: """
    _schema = schema
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, message=Component.UNDEFINED, submit_n_clicks=Component.UNDEFINED, submit_n_clicks_timestamp=Component.UNDEFINED, cancel_n_clicks=Component.UNDEFINED, cancel_n_clicks_timestamp=Component.UNDEFINED, displayed=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'message', 'submit_n_clicks', 'submit_n_clicks_timestamp', 'cancel_n_clicks', 'cancel_n_clicks_timestamp', 'displayed']
        self._type = 'ConfirmDialogProvider'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'id', 'message', 'submit_n_clicks', 'submit_n_clicks_timestamp', 'cancel_n_clicks', 'cancel_n_clicks_timestamp', 'displayed']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args}
        args.pop('children', None)
        super(ConfirmDialogProvider, self).__init__(children=children, **args)
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
            return ('ConfirmDialogProvider(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'ConfirmDialogProvider(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
