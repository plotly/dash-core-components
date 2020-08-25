# AUTO GENERATED FILE - DO NOT EDIT

export dcc_store

"""
    dcc_store(;kwargs...)

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
- `data` (Dict | Array | Real | String | Bool; optional): The stored data for the id.
- `clear_data` (Bool; optional): Set to true to remove the data contained in `data_key`.
- `modified_timestamp` (Real; optional): The last time the storage was modified.
"""
function dcc_store(; kwargs...)
        available_props = Symbol[:id, :storage_type, :data, :clear_data, :modified_timestamp]
        wild_props = Symbol[]
        return Component("dcc_store", "Store", "dash_core_components", available_props, wild_props; kwargs...)
end

