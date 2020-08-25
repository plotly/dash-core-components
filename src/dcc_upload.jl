# AUTO GENERATED FILE - DO NOT EDIT

export dcc_upload

"""
    dcc_upload(;kwargs...)
    dcc_upload(children::Any;kwargs...)
    dcc_upload(children_maker::Function;kwargs...)


An Upload component.
Upload components allow your app to accept user-uploaded files via drag'n'drop
Keyword arguments:
- `children` (a list of or a singular dash component, string or number | String; optional): Contents of the upload component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `contents` (String | Array of Strings; optional): The contents of the uploaded file as a binary string
- `filename` (String | Array of Strings; optional): The name of the file(s) that was(were) uploaded.
Note that this does not include the path of the file
(for security reasons).
- `last_modified` (Real | Array of Reals; optional): The last modified date of the file that was uploaded in unix time
(seconds since 1970).
- `accept` (String; optional): Allow specific types of files.
See https://github.com/okonet/attr-accept for more information.
Keep in mind that mime type determination is not reliable across
platforms. CSV files, for example, are reported as text/plain
under macOS but as application/vnd.ms-excel under Windows.
In some cases there might not be a mime type set at all.
See: https://github.com/react-dropzone/react-dropzone/issues/276
- `disabled` (Bool; optional): Enable/disable the upload component entirely
- `disable_click` (Bool; optional): Disallow clicking on the component to open the file dialog
- `max_size` (Real; optional): Maximum file size. If `-1`, then infinite
- `min_size` (Real; optional): Minimum file size
- `multiple` (Bool; optional): Allow dropping multiple files
- `className` (String; optional): HTML class name of the component
- `className_active` (String; optional): HTML class name of the component while active
- `className_reject` (String; optional): HTML class name of the component if rejected
- `className_disabled` (String; optional): HTML class name of the component if disabled
- `style` (Dict; optional): CSS styles to apply
- `style_active` (Dict; optional): CSS styles to apply while active
- `style_reject` (Dict; optional): CSS styles if rejected
- `style_disabled` (Dict; optional): CSS styles if disabled
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function dcc_upload(; kwargs...)
        available_props = Symbol[:children, :id, :contents, :filename, :last_modified, :accept, :disabled, :disable_click, :max_size, :min_size, :multiple, :className, :className_active, :className_reject, :className_disabled, :style, :style_active, :style_reject, :style_disabled, :loading_state]
        wild_props = Symbol[]
        return Component("dcc_upload", "Upload", "dash_core_components", available_props, wild_props; kwargs...)
end

dcc_upload(children::Any; kwargs...) = dcc_upload(;kwargs..., children = children)
dcc_upload(children_maker::Function; kwargs...) = dcc_upload(children_maker(); kwargs...)

