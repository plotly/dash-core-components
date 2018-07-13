# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Slider(Component):
    """A Slider component.
A slider component with a single handle.

Keyword arguments:
- id (string; optional)
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
- value (number; optional): The value of the input
- className (string; optional): Additional CSS class for the root DOM node
- disabled (boolean; optional): If true, the handles can't be moved.
- dots (boolean; optional): When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.
- included (boolean; optional): If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.
- min (number; optional): Minimum allowed value of the slider
- max (number; optional): Maximum allowed value of the slider
- step (number; optional): Value by which increments or decrements are made
- vertical (boolean; optional): If true, the slider will be vertical
- updatemode (a value equal to: 'mouseup', 'drag'; optional): Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.

Available events: 'change'"""
    @_explicitize_args
    def __init__(self, id=Component._NO_DEFAULT_ARG, marks=Component._NO_DEFAULT_ARG, value=Component._NO_DEFAULT_ARG, className=Component._NO_DEFAULT_ARG, disabled=Component._NO_DEFAULT_ARG, dots=Component._NO_DEFAULT_ARG, included=Component._NO_DEFAULT_ARG, min=Component._NO_DEFAULT_ARG, max=Component._NO_DEFAULT_ARG, step=Component._NO_DEFAULT_ARG, vertical=Component._NO_DEFAULT_ARG, updatemode=Component._NO_DEFAULT_ARG, **kwargs):
        self._prop_names = ['id', 'marks', 'value', 'className', 'disabled', 'dots', 'included', 'min', 'max', 'step', 'vertical', 'updatemode']
        self._type = 'Slider'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['id', 'marks', 'value', 'className', 'disabled', 'dots', 'included', 'min', 'max', 'step', 'vertical', 'updatemode']
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
        super(Slider, self).__init__(**args)

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
            return ('Slider(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Slider(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
