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
- `href` (String; optional): The URL of a linked resource.
- `refresh` (Bool; optional): Controls whether or not the page will refresh when the link is clicked
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function dcc_link(; kwargs...)
        available_props = Set(Symbol[:children, :id, :href, :refresh, :className, :style, :loading_state])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Link", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_link"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_link(children::Any; kwargs...)
    result = dcc_link(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_link(children_maker::Function; kwargs...) = dcc_link(children_maker(); kwargs...)
