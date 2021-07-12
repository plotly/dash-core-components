# AUTO GENERATED FILE - DO NOT EDIT

export dcc_clipboard

"""
    dcc_clipboard(;kwargs...)

A Clipboard component.
The Clipboard component copies text to the clipboard
Keyword arguments:
- `id` (String; optional): The ID used to identify this component.
- `className` (String; optional): The class  name of the icon element
- `content` (String; optional): The text to  be copied to the clipboard if the `target_id` is None.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `n_clicks` (Real; optional): The number of times copy button was clicked
- `style` (Dict; optional): The icon's styles
- `target_id` (String | Dict; optional): The id of target component containing text to copy to the clipboard.
The inner text of the `children` prop will be copied to the clipboard.  If none, then the text from the
 `value` prop will be copied.
- `title` (String; optional): The text shown as a tooltip when hovering over the copy icon.
"""
function dcc_clipboard(; kwargs...)
        available_props = Symbol[:id, :className, :content, :loading_state, :n_clicks, :style, :target_id, :title]
        wild_props = Symbol[]
        return Component("dcc_clipboard", "Clipboard", "dash_core_components", available_props, wild_props; kwargs...)
end

