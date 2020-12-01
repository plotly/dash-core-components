# AUTO GENERATED FILE - DO NOT EDIT

export dcc_link

"""
    dcc_link(;kwargs...)
    dcc_link(children::Any;kwargs...)
    dcc_link(children_maker::Function;kwargs...)


A Link component.
Link allows you to create a clickable link within a multi-page app.

For links with destinations outside the current app, `html.A` is a better
component to use.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `href` (String; required): The URL of a linked resource.
- `refresh` (Bool; optional): Controls whether or not the page will refresh when the link is clicked
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `title` (String; optional): Adds the title attribute to your link, which can contain supplementary
information.
- `target` (String; optional): Specifies where to open the link reference.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function dcc_link(; kwargs...)
        available_props = Symbol[:children, :id, :href, :refresh, :className, :style, :title, :target, :loading_state]
        wild_props = Symbol[]
        return Component("dcc_link", "Link", "dash_core_components", available_props, wild_props; kwargs...)
end

dcc_link(children::Any; kwargs...) = dcc_link(;kwargs..., children = children)
dcc_link(children_maker::Function; kwargs...) = dcc_link(children_maker(); kwargs...)

