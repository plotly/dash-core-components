# AUTO GENERATED FILE - DO NOT EDIT

export dcc_location

"""
    dcc_location(;kwargs...)

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
        available_props = Symbol[:id, :pathname, :search, :hash, :href, :refresh]
        wild_props = Symbol[]
        return Component("dcc_location", "Location", "dash_core_components", available_props, wild_props; kwargs...)
end

