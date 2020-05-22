# AUTO GENERATED FILE - DO NOT EDIT

export dcc_location

"""
    dcc_location(;kwargs...)
    dcc_location(children::Any;kwargs...)
    dcc_location(children_maker::Function;kwargs...)

A Location component.
Update and track the current window.location object through the window.history state.
Use in conjunction with the `dash_core_components.Link` component to make apps with multiple pages.
Keyword arguments:
- `id` (String; required): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `pathname` (String; optional): pathname in window.location - e.g., "/my/full/pathname"
- `search` (String; optional): search in window.location - e.g., "?myargument=1"
- `hash` (String; optional): hash in window.location - e.g., "#myhash"
- `href` (String; optional): href in window.location - e.g., "/my/full/pathname?myargument=1#myhash"
- `refresh` (Bool; optional): Refresh the page when the location is updated?
"""
function dcc_location(; kwargs...)
        available_props = Set(Symbol[:id, :pathname, :search, :hash, :href, :refresh])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Location", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_location"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_location(children::Any; kwargs...)
    result = dcc_location(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_location(children_maker::Function; kwargs...) = dcc_location(children_maker(); kwargs...)
