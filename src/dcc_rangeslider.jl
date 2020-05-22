# AUTO GENERATED FILE - DO NOT EDIT

export dcc_rangeslider

"""
    dcc_rangeslider(;kwargs...)
    dcc_rangeslider(children::Any;kwargs...)
    dcc_rangeslider(children_maker::Function;kwargs...)

A RangeSlider component.
A double slider with two handles.
Used for specifying a range of numerical values.
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
- `value` (Array of Float64s; optional): The value of the input
- `allowCross` (Bool; optional): allowCross could be set as true to allow those handles to cross.
- `className` (String; optional): Additional CSS class for the root DOM node
- `count` (Float64; optional): Determine how many ranges to render, and multiple handles
will be rendered (number + 1).
- `disabled` (Bool; optional): If true, the handles can't be moved.
- `dots` (Bool; optional): When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.
- `included` (Bool; optional): If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.
- `min` (Float64; optional): Minimum allowed value of the slider
- `max` (Float64; optional): Maximum allowed value of the slider
- `pushable` (Bool | Float64; optional): pushable could be set as true to allow pushing of
surrounding handles when moving an handle.
When set to a number, the number will be the
minimum ensured distance between handles.
- `tooltip` (optional): Configuration for tooltips describing the current slider values. tooltip has the following type: lists containing elements 'always_visible', 'placement'.
Those elements have the following types:
  - `always_visible` (Bool; optional): Determines whether tooltips should always be visible
(as opposed to the default, visible on hover)
  - `placement` (a value equal to: 'left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; optional): Determines the placement of tooltips
See https://github.com/react-component/tooltip#api
top/bottom{*} sets the _origin_ of the tooltip, so e.g. `topLeft`
will in reality appear to be on the top right of the handle
- `step` (Float64; optional): Value by which increments or decrements are made
- `vertical` (Bool; optional): If true, the slider will be vertical
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
- `persistence` (Bool | String | Float64; optional): Used to allow user interactions in this component to be persisted when
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
function dcc_rangeslider(; kwargs...)
        available_props = Set(Symbol[:id, :marks, :value, :allowCross, :className, :count, :disabled, :dots, :included, :min, :max, :pushable, :tooltip, :step, :vertical, :updatemode, :loading_state, :persistence, :persisted_props, :persistence_type])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("RangeSlider", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_rangeslider"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_rangeslider(children::Any; kwargs...)
    result = dcc_rangeslider(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_rangeslider(children_maker::Function; kwargs...) = dcc_rangeslider(children_maker(); kwargs...)
