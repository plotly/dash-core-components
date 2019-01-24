# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RangeSlider(Component):
    """A RangeSlider component.
A double slider with two handles.
Used for specifying a range of numerical values.

Keyword arguments:
- count (number; optional): Determine how many ranges to render, and multiple handles
will be rendered (number + 1).
- updatemode (a value equal to: 'mouseup', 'drag'; optional): Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.
- vertical (boolean; optional): If true, the slider will be vertical
- min (number; optional): Minimum allowed value of the slider
- max (number; optional): Maximum allowed value of the slider
- value (list; optional): The value of the input
- dots (boolean; optional): When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.
- className (string; optional): Additional CSS class for the root DOM node
- step (number; optional): Value by which increments or decrements are made
- disabled (boolean; optional): If true, the handles can't be moved.
- marks (optional): Marks on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific mark point,
the value should be an object which
contains style and label properties.. marks has the following type: dict containing keys 'number'.
Those keys have the following types: 
  - number (optional): . number has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types: 
  - style (dict; optional)
  - label (string; optional)
- included (boolean; optional): If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.
- pushable (boolean | number; optional): pushable could be set as true to allow pushing of
surrounding handles when moving an handle.
When set to a number, the number will be the
minimum ensured distance between handles.
- id (string; optional)
- allowCross (boolean; optional): allowCross could be set as true to allow those handles to cross.

Available events: 'change'"""
    @_explicitize_args
    def __init__(self, count=Component.UNDEFINED, disabled=Component.UNDEFINED, updatemode=Component.UNDEFINED, vertical=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, dots=Component.UNDEFINED, marks=Component.UNDEFINED, included=Component.UNDEFINED, pushable=Component.UNDEFINED, id=Component.UNDEFINED, allowCross=Component.UNDEFINED, **kwargs):
        self._prop_names = ['count', 'updatemode', 'vertical', 'min', 'max', 'dots', 'value', 'id', 'disabled', 'className', 'step', 'marks', 'included', 'pushable', 'allowCross']
        self._type = 'RangeSlider'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['count', 'updatemode', 'vertical', 'min', 'max', 'dots', 'value', 'id', 'disabled', 'className', 'step', 'marks', 'included', 'pushable', 'allowCross']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RangeSlider, self).__init__(**args)

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
            return ('RangeSlider(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'RangeSlider(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
