# AUTO GENERATED FILE - DO NOT EDIT

export dcc_confirmdialog

"""
    dcc_confirmdialog(;kwargs...)

A ConfirmDialog component.
ConfirmDialog is used to display the browser's native "confirm" modal,
with an optional message and two buttons ("OK" and "Cancel").
This ConfirmDialog can be used in conjunction with buttons when the user
is performing an action that should require an extra step of verification.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `message` (String; optional): Message to show in the popup.
- `submit_n_clicks` (Real; optional): Number of times the submit button was clicked
- `submit_n_clicks_timestamp` (Real; optional): Last time the submit button was clicked.
- `cancel_n_clicks` (Real; optional): Number of times the popup was canceled.
- `cancel_n_clicks_timestamp` (Real; optional): Last time the cancel button was clicked.
- `displayed` (Bool; optional): Set to true to send the ConfirmDialog.
"""
function dcc_confirmdialog(; kwargs...)
        available_props = Symbol[:id, :message, :submit_n_clicks, :submit_n_clicks_timestamp, :cancel_n_clicks, :cancel_n_clicks_timestamp, :displayed]
        wild_props = Symbol[]
        return Component("dcc_confirmdialog", "ConfirmDialog", "dash_core_components", available_props, wild_props; kwargs...)
end

