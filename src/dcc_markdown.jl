# AUTO GENERATED FILE - DO NOT EDIT

export dcc_markdown

"""
    dcc_markdown(;kwargs...)
    dcc_markdown(children::Any;kwargs...)
    dcc_markdown(children_maker::Function;kwargs...)

A Markdown component.
A component that renders Markdown text as specified by the
GitHub Markdown spec. These component uses
[react-markdown](https://rexxars.github.io/react-markdown/) under the hood.
Keyword arguments:
- `children` (String | Array of Strings; optional): A markdown string (or array of strings) that adhreres to the CommonMark spec
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Class name of the container element
- `dangerously_allow_html` (Bool; optional): A boolean to control raw HTML escaping.
Setting HTML from code is risky because it's easy to
inadvertently expose your users to a cross-site scripting (XSS)
(https://en.wikipedia.org/wiki/Cross-site_scripting) attack.
- `dedent` (Bool; optional): Remove matching leading whitespace from all lines.
Lines that are empty, or contain *only* whitespace, are ignored.
Both spaces and tab characters are removed, but only if they match;
we will not convert tabs to spaces or vice versa.
- `highlight_config` (optional): Config options for syntax highlighting.. highlight_config has the following type: lists containing elements 'theme'.
Those elements have the following types:
  - `theme` (a value equal to: 'dark', 'light'; optional): Color scheme; default 'light'
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional): User-defined inline styles for the rendered Markdown
"""
function dcc_markdown(; kwargs...)
        available_props = Set(Symbol[:children, :id, :className, :dangerously_allow_html, :dedent, :highlight_config, :loading_state, :style])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Markdown", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_markdown"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_markdown(children::Any; kwargs...)
    result = dcc_markdown(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_markdown(children_maker::Function; kwargs...) = dcc_markdown(children_maker(); kwargs...)
