# AUTO GENERATED FILE - DO NOT EDIT

export dcc_radioitems

"""
    dcc_radioitems(;kwargs...)

A RadioItems component.
RadioItems is a component that encapsulates several radio item inputs.
The values and labels of the RadioItems is specified in the `options`
property and the seleced item is specified with the `value` property.
Each radio item is rendered as an input with a surrounding label.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `options` (optional): An array of options. options has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String | Real; required): The radio item's label
  - `value` (String | Real; required): The value of the radio item. This value
corresponds to the items specified in the
`value` property.
  - `disabled` (Bool; optional): If true, this radio item is disabled and can't be clicked on.s
- `value` (String | Real; optional): The currently selected value
- `style` (Dict; optional): The style of the container (div)
- `className` (String; optional): The class of the container (div)
- `inputStyle` (Dict; optional): The style of the <input> radio element
- `inputClassName` (String; optional): The class of the <input> radio element
- `labelStyle` (Dict; optional): The style of the <label> that wraps the radio input
 and the option's label
- `labelClassName` (String; optional): The class of the <label> that wraps the radio input
 and the option's label
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
function dcc_radioitems(; kwargs...)
        available_props = Symbol[:id, :options, :value, :style, :className, :inputStyle, :inputClassName, :labelStyle, :labelClassName, :loading_state, :persistence, :persisted_props, :persistence_type]
        wild_props = Symbol[]
        return Component("dcc_radioitems", "RadioItems", "dash_core_components", available_props, wild_props; kwargs...)
end

