# AUTO GENERATED FILE - DO NOT EDIT

export dcc_dropdown

"""
    dcc_dropdown(;kwargs...)
    dcc_dropdown(children::Any;kwargs...)
    dcc_dropdown(children_maker::Function;kwargs...)

A Dropdown component.
Dropdown is an interactive dropdown element for selecting one or more
items.
The values and labels of the dropdown items are specified in the `options`
property and the selected item(s) are specified with the `value` property.

Use a dropdown when you have many options (more than 5) or when you are
constrained for space. Otherwise, you can use RadioItems or a Checklist,
which have the benefit of showing the users all of the items at once.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `options` (optional): An array of options {label: [string|number], value: [string|number]},
an optional disabled field can be used for each option. options has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String | Float64; required): The dropdown's label
  - `value` (String | Float64; required): The value of the dropdown. This value
corresponds to the items specified in the
`value` property.
  - `disabled` (Bool; optional): If true, this option is disabled and cannot be selected.s
- `value` (String | Float64 | Array of String | Float64s; optional): The value of the input. If `multi` is false (the default)
then value is just a string that corresponds to the values
provided in the `options` property. If `multi` is true, then
multiple values can be selected at once, and `value` is an
array of items with values corresponding to those in the
`options` prop.
- `optionHeight` (Float64; optional): height of each option. Can be increased when label lengths would wrap around
- `className` (String; optional): className of the dropdown element
- `clearable` (Bool; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- `disabled` (Bool; optional): If true, this dropdown is disabled and the selection cannot be changed.
- `multi` (Bool; optional): If true, the user can select multiple values
- `placeholder` (String; optional): The grey, default text shown when no option is selected
- `searchable` (Bool; optional): Whether to enable the searching feature or not
- `search_value` (String; optional): The value typed in the DropDown for searching.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
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
function dcc_dropdown(; kwargs...)
        available_props = Set(Symbol[:id, :options, :value, :optionHeight, :className, :clearable, :disabled, :multi, :placeholder, :searchable, :search_value, :style, :loading_state, :persistence, :persisted_props, :persistence_type])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Dropdown", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_dropdown"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_dropdown(children::Any; kwargs...)
    result = dcc_dropdown(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_dropdown(children_maker::Function; kwargs...) = dcc_dropdown(children_maker(); kwargs...)
