# AUTO GENERATED FILE - DO NOT EDIT

export dcc_slider

"""
    dcc_slider(;kwargs...)

A Slider component.
A slider component with a single handle.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `marks` (optional): Marks on the slider.
The key determines the position (a number),
and the value determines what will show.
If you want to set the style of a specific mark point,
the value should be an object which
contains style and label properties.. marks has the following type: Dict with Strings as keys and values of type String | lists containing elements 'label', 'style'.
Those elements have the following types:
  - `label` (String; optional)
  - `style` (Dict; optional)
- `value` (Real; optional): The value of the input
- `className` (String; optional): Additional CSS class for the root DOM node
- `disabled` (Bool; optional): If true, the handles can't be moved.
- `dots` (Bool; optional): When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.
- `included` (Bool; optional): If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.
- `min` (Real; optional): Minimum allowed value of the slider
- `max` (Real; optional): Maximum allowed value of the slider
- `tooltip` (optional): Configuration for tooltips describing the current slider value. tooltip has the following type: lists containing elements 'always_visible', 'placement'.
Those elements have the following types:
  - `always_visible` (Bool; optional): Determines whether tooltips should always be visible
(as opposed to the default, visible on hover)
  - `placement` (a value equal to: 'left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; optional): Determines the placement of tooltips
See https://github.com/react-component/tooltip#api
top/bottom{*} sets the _origin_ of the tooltip, so e.g. `topLeft`
will in reality appear to be on the top right of the handle
- `step` (Real; optional): Value by which increments or decrements are made
- `vertical` (Bool; optional): If true, the slider will be vertical
- `verticalHeight` (Real; optional): The height, in px, of the slider if it is vertical.
- `updatemode` (a value equal to: 'mouseup', 'drag'; optional): Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `persistence` (Bool | String | Real; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- `persisted_props` (Array of a value equal to: 'value's; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
"""
function dcc_slider(; kwargs...)
        available_props = Symbol[:id, :marks, :value, :className, :disabled, :dots, :included, :min, :max, :tooltip, :step, :vertical, :verticalHeight, :updatemode, :loading_state, :persistence, :persisted_props, :persistence_type]
        wild_props = Symbol[]
        return Component("dcc_slider", "Slider", "dash_core_components", available_props, wild_props; kwargs...)
end

