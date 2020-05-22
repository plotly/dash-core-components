# AUTO GENERATED FILE - DO NOT EDIT

export dcc_checklist

"""
    dcc_checklist(;kwargs...)
    dcc_checklist(children::Any;kwargs...)
    dcc_checklist(children_maker::Function;kwargs...)

A Checklist component.
Checklist is a component that encapsulates several checkboxes.
The values and labels of the checklist are specified in the `options`
property and the checked items are specified with the `value` property.
Each checkbox is rendered as an input with a surrounding label.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `options` (optional): An array of options. options has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String | Float64; required): The checkbox's label
  - `value` (String | Float64; required): The value of the checkbox. This value
corresponds to the items specified in the
`value` property.
  - `disabled` (Bool; optional): If true, this checkbox is disabled and can't be clicked on.s
- `value` (Array of String | Float64s; optional): The currently selected value
- `className` (String; optional): The class of the container (div)
- `style` (Dict; optional): The style of the container (div)
- `inputStyle` (Dict; optional): The style of the <input> checkbox element
- `inputClassName` (String; optional): The class of the <input> checkbox element
- `labelStyle` (Dict; optional): The style of the <label> that wraps the checkbox input
 and the option's label
- `labelClassName` (String; optional): The class of the <label> that wraps the checkbox input
 and the option's label
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
function dcc_checklist(; kwargs...)
        available_props = Set(Symbol[:id, :options, :value, :className, :style, :inputStyle, :inputClassName, :labelStyle, :labelClassName, :loading_state, :persistence, :persisted_props, :persistence_type])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Checklist", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_checklist"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_checklist(children::Any; kwargs...)
    result = dcc_checklist(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_checklist(children_maker::Function; kwargs...) = dcc_checklist(children_maker(); kwargs...)
