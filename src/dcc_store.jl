# AUTO GENERATED FILE - DO NOT EDIT

export dcc_store

"""
    dcc_store(;kwargs...)
    dcc_store(children::Any;kwargs...)
    dcc_store(children_maker::Function;kwargs...)

A Store component.
Easily keep data on the client side with this component.
The data is not inserted in the DOM.
Data can be in memory, localStorage or sessionStorage.
The data will be kept with the id as key.
Keyword arguments:
- `id` (String; required): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `storage_type` (a value equal to: 'local', 'session', 'memory'; optional): The type of the web storage.

memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
- `data` (Dict | Array | Float64 | String | Bool; optional): The stored data for the id.
- `clear_data` (Bool; optional): Set to true to remove the data contained in `data_key`.
- `modified_timestamp` (Float64; optional): The last time the storage was modified.
"""
function dcc_store(; kwargs...)
        available_props = Set(Symbol[:id, :storage_type, :data, :clear_data, :modified_timestamp])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Store", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_store"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_store(children::Any; kwargs...)
    result = dcc_store(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_store(children_maker::Function; kwargs...) = dcc_store(children_maker(); kwargs...)
