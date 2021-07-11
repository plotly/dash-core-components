# AUTO GENERATED FILE - DO NOT EDIT

export dcc_loading

"""
    dcc_loading(;kwargs...)
    dcc_loading(children::Any;kwargs...)
    dcc_loading(children_maker::Function;kwargs...)


A Loading component.
A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Array that holds components to render
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Additional CSS class for the spinner root DOM node
- `color` (String; optional): Primary colour used for the loading spinners
- `debug` (Bool; optional): If true, the spinner will display the component_name and prop_name
while loading
- `fullscreen` (Bool; optional): Boolean that makes the spinner display full-screen
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `parent_className` (String; optional): Additional CSS class for the outermost dcc.Loading parent div DOM node
- `parent_style` (Dict; optional): Additional CSS styling for the outermost dcc.Loading parent div DOM node
- `style` (Dict; optional): Additional CSS styling for the spinner root DOM node
- `type` (a value equal to: 'graph', 'cube', 'circle', 'dot', 'default'; optional): Property that determines which spinner to show
one of 'graph', 'cube', 'circle', 'dot', or 'default'.
"""
function dcc_loading(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :debug, :fullscreen, :loading_state, :parent_className, :parent_style, :style, :type]
        wild_props = Symbol[]
        return Component("dcc_loading", "Loading", "dash_core_components", available_props, wild_props; kwargs...)
end

dcc_loading(children::Any; kwargs...) = dcc_loading(;kwargs..., children = children)
dcc_loading(children_maker::Function; kwargs...) = dcc_loading(children_maker(); kwargs...)

