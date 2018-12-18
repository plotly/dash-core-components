# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


schema = {'labelClassName': {'required': False, 'type': 'string', 'nullable': False}, 'style': {'required': False, 'type': 'dict', 'nullable': False}, 'inputClassName': {'required': False, 'type': 'string', 'nullable': False}, 'inputStyle': {'required': False, 'type': 'dict', 'nullable': False}, 'setProps': {'required': False, 'nullable': False}, 'labelStyle': {'required': False, 'type': 'dict', 'nullable': False}, 'dashEvents': {'required': False, 'nullable': False, 'type': ('string', 'number'), 'allowed': ['change']}, 'options': {'required': False, 'nullable': False, 'type': 'list', 'schema': {'nullable': False, 'type': 'dict', 'allow_unknown': False, 'schema': {'disabled': {'type': 'boolean'}, 'value': {'type': 'string'}, 'label': {'type': 'string'}}}}, 'className': {'required': False, 'type': 'string', 'nullable': False}, 'values': {'required': True, 'nullable': False, 'type': 'list', 'schema': {'type': 'string', 'nullable': False}}, 'fireEvent': {'required': False, 'nullable': False}, 'id': {'required': False, 'type': 'string', 'nullable': False}}

class Checklist(Component):
    """A Checklist component.
Checklist is a component that encapsulates several checkboxes.
The values and labels of the checklist is specified in the `options`
property and the checked items are specified with the `values` property.
Each checkbox is rendered as an input with a surrounding label.

Keyword arguments:
- id (string; optional)
- options (list; optional): An array of options
- values (list; required): The currently selected value
- className (string; optional): The class of the container (div)
- style (dict; optional): The style of the container (div)
- inputStyle (dict; optional): The style of the <input> checkbox element
- inputClassName (string; optional): The class of the <input> checkbox element
- labelStyle (dict; optional): The style of the <label> that wraps the checkbox input
 and the option's label
- labelClassName (string; optional): The class of the <label> that wraps the checkbox input
 and the option's label

Available events: 'change'"""
    _schema = schema
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, options=Component.UNDEFINED, values=Component.REQUIRED, className=Component.UNDEFINED, style=Component.UNDEFINED, inputStyle=Component.UNDEFINED, inputClassName=Component.UNDEFINED, labelStyle=Component.UNDEFINED, labelClassName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'options', 'values', 'className', 'style', 'inputStyle', 'inputClassName', 'labelStyle', 'labelClassName']
        self._type = 'Checklist'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['id', 'options', 'values', 'className', 'style', 'inputStyle', 'inputClassName', 'labelStyle', 'labelClassName']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args}
        args.pop('children', None)
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
