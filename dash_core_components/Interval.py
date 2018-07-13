# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Interval(Component):
    """A Interval component.
A component that repeatedly fires an event ("interval")
with a fixed time delay between each event.
Interval is good for triggering a component on a recurring basis.
The time delay is set with the property "interval" in milliseconds.

Keyword arguments:
- id (string; optional)
- interval (number; optional): This component will fire an event every `interval`
milliseconds with the event name `setInterval`
- disabled (boolean; optional): If True, the interval will no longer trigger
an event.
- n_intervals (number; optional): Number of times the interval has passed

Available events: 'interval'"""
    @_explicitize_args
    def __init__(self, id=Component._NO_DEFAULT_ARG, interval=1000, disabled=Component._NO_DEFAULT_ARG, n_intervals=0, fireEvent=Component._NO_DEFAULT_ARG, setProps=Component._NO_DEFAULT_ARG, dashEvents=Component._NO_DEFAULT_ARG, **kwargs):
        self._prop_names = ['id', 'interval', 'disabled', 'n_intervals']
        self._type = 'Interval'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = ['interval']
        self.available_properties = ['id', 'interval', 'disabled', 'n_intervals']
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
        super(Interval, self).__init__(**args)

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
            return ('Interval(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Interval(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
