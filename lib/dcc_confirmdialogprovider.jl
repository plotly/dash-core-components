# AUTO GENERATED FILE - DO NOT EDIT

export dcc_confirmdialogprovider

"""
    dcc_confirmdialogprovider(;kwargs...)
    dcc_confirmdialogprovider(children::Any;kwargs...)
    dcc_confirmdialogprovider(children_maker::Function;kwargs...)


A ConfirmDialogProvider component.
A wrapper component that will display a confirmation dialog
when its child component has been clicked on.

For example:
```
dcc.ConfirmDialogProvider(
    html.Button('click me', id='btn'),
    message='Danger - Are you sure you want to continue.'
    id='confirm')
```
Keyword arguments:
- `children` (Bool | Real | String | Dict | Array; optional): The children to hijack clicks from and display the popup.
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `message` (String; optional): Message to show in the popup.
- `submit_n_clicks` (Real; optional): Number of times the submit was clicked
- `submit_n_clicks_timestamp` (Real; optional): Last time the submit button was clicked.
- `cancel_n_clicks` (Real; optional): Number of times the popup was canceled.
- `cancel_n_clicks_timestamp` (Real; optional): Last time the cancel button was clicked.
- `displayed` (Bool; optional): Is the modal currently displayed.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function dcc_confirmdialogprovider(; kwargs...)
        available_props = Symbol[:children, :id, :message, :submit_n_clicks, :submit_n_clicks_timestamp, :cancel_n_clicks, :cancel_n_clicks_timestamp, :displayed, :loading_state]
        wild_props = Symbol[]
        return Component("dcc_confirmdialogprovider", "ConfirmDialogProvider", "dash_core_components", available_props, wild_props; kwargs...)
end

dcc_confirmdialogprovider(children::Any; kwargs...) = dcc_confirmdialogprovider(;kwargs..., children = children)
dcc_confirmdialogprovider(children_maker::Function; kwargs...) = dcc_confirmdialogprovider(children_maker(); kwargs...)

