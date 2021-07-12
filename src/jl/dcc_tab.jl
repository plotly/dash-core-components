# AUTO GENERATED FILE - DO NOT EDIT

export dcc_tab

"""
    dcc_tab(;kwargs...)
    dcc_tab(children::Any;kwargs...)
    dcc_tab(children_maker::Function;kwargs...)


A Tab component.
Part of dcc.Tabs - this is the child Tab component used to render a tabbed page.
Its children will be set as the content of that tab, which if clicked will become visible.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Appends a class to the Tab component.
- `disabled` (Bool; optional): Determines if tab is disabled or not - defaults to false
- `disabled_className` (String; optional): Appends a class to the Tab component when it is disabled.
- `disabled_style` (Dict; optional): Overrides the default (inline) styles when disabled
- `label` (String; optional): The tab's label
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `selected_className` (String; optional): Appends a class to the Tab component when it is selected.
- `selected_style` (Dict; optional): Overrides the default (inline) styles for the Tab component when it is selected.
- `style` (Dict; optional): Overrides the default (inline) styles for the Tab component.
- `value` (String; optional): Value for determining which Tab is currently selected
"""
function dcc_tab(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disabled, :disabled_className, :disabled_style, :label, :loading_state, :selected_className, :selected_style, :style, :value]
        wild_props = Symbol[]
        return Component("dcc_tab", "Tab", "dash_core_components", available_props, wild_props; kwargs...)
end

dcc_tab(children::Any; kwargs...) = dcc_tab(;kwargs..., children = children)
dcc_tab(children_maker::Function; kwargs...) = dcc_tab(children_maker(); kwargs...)

