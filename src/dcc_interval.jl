# AUTO GENERATED FILE - DO NOT EDIT

export dcc_interval

"""
    dcc_interval(;kwargs...)
    dcc_interval(children::Any;kwargs...)
    dcc_interval(children_maker::Function;kwargs...)

An Interval component.
A component that repeatedly increments a counter `n_intervals`
with a fixed time delay between each increment.
Interval is good for triggering a component on a recurring basis.
The time delay is set with the property "interval" in milliseconds.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `interval` (Float64; optional): This component will increment the counter `n_intervals` every
`interval` milliseconds
- `disabled` (Bool; optional): If True, the counter will no longer update
- `n_intervals` (Float64; optional): Number of times the interval has passed
- `max_intervals` (Float64; optional): Number of times the interval will be fired.
If -1, then the interval has no limit (the default)
and if 0 then the interval stops running.
"""
function dcc_interval(; kwargs...)
        available_props = Set(Symbol[:id, :interval, :disabled, :n_intervals, :max_intervals])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Interval", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_interval"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_interval(children::Any; kwargs...)
    result = dcc_interval(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_interval(children_maker::Function; kwargs...) = dcc_interval(children_maker(); kwargs...)
