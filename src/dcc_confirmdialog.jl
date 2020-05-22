# AUTO GENERATED FILE - DO NOT EDIT

export dcc_confirmdialog

"""
    dcc_confirmdialog(;kwargs...)
    dcc_confirmdialog(children::Any;kwargs...)
    dcc_confirmdialog(children_maker::Function;kwargs...)

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
- `submit_n_clicks` (Float64; optional): Number of times the submit button was clicked
- `submit_n_clicks_timestamp` (Float64; optional): Last time the submit button was clicked.
- `cancel_n_clicks` (Float64; optional): Number of times the popup was canceled.
- `cancel_n_clicks_timestamp` (Float64; optional): Last time the cancel button was clicked.
- `displayed` (Bool; optional): Set to true to send the ConfirmDialog.
"""
function dcc_confirmdialog(; kwargs...)
        available_props = Set(Symbol[:id, :message, :submit_n_clicks, :submit_n_clicks_timestamp, :cancel_n_clicks, :cancel_n_clicks_timestamp, :displayed])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("ConfirmDialog", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_confirmdialog"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_confirmdialog(children::Any; kwargs...)
    result = dcc_confirmdialog(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_confirmdialog(children_maker::Function; kwargs...) = dcc_confirmdialog(children_maker(); kwargs...)
