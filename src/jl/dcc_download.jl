# AUTO GENERATED FILE - DO NOT EDIT

export dcc_download

"""
    dcc_download(;kwargs...)

A Download component.
The Download component opens a download dialog when the data property changes.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks.
- `base64` (Bool; optional): Default value for base64, used when not set as part of the data property.
- `data` (optional): On change, a download is invoked.. data has the following type: lists containing elements 'filename', 'content', 'base64', 'type'.
Those elements have the following types:
  - `filename` (String; required): Suggested filename in the download dialogue.
  - `content` (String; required): File content.
  - `base64` (Bool; optional): Set to true, when data is base64 encoded.
  - `type` (String; optional): Blob type, usually a MIME-type.
- `type` (String; optional): Default value for type, used when not set as part of the data property.
"""
function dcc_download(; kwargs...)
        available_props = Symbol[:id, :base64, :data, :type]
        wild_props = Symbol[]
        return Component("dcc_download", "Download", "dash_core_components", available_props, wild_props; kwargs...)
end

