# AUTO GENERATED FILE - DO NOT EDIT

export dcc_interval

"""
    dcc_interval(;kwargs...)

An Interval component.
A component that repeatedly increments a counter `n_intervals`
with a fixed time delay between each increment.
Interval is good for triggering a component on a recurring basis.
The time delay is set with the property "interval" in milliseconds.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `interval` (Real; optional): This component will increment the counter `n_intervals` every
`interval` milliseconds
- `disabled` (Bool; optional): If True, the counter will no longer update
- `n_intervals` (Real; optional): Number of times the interval has passed
- `max_intervals` (Real; optional): Number of times the interval will be fired.
If -1, then the interval has no limit (the default)
and if 0 then the interval stops running.
"""
function dcc_interval(; kwargs...)
        available_props = Symbol[:id, :interval, :disabled, :n_intervals, :max_intervals]
        wild_props = Symbol[]
        return Component("dcc_interval", "Interval", "dash_core_components", available_props, wild_props; kwargs...)
end

