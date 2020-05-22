# AUTO GENERATED FILE - DO NOT EDIT

export dcc_logoutbutton

"""
    dcc_logoutbutton(;kwargs...)
    dcc_logoutbutton(children::Any;kwargs...)
    dcc_logoutbutton(children_maker::Function;kwargs...)

A LogoutButton component.
Logout button to submit a form post request to the `logout_url` prop.
Usage is intended for dash-deployment-server authentication.

DDS usage:

`dcc.LogoutButton(logout_url=os.getenv('DASH_LOGOUT_URL'))`

Custom usage:

- Implement a login mechanism.
- Create a flask route with a post method handler.
`@app.server.route('/logout', methods=['POST'])`
  - The logout route should perform what's necessary for the user to logout.
  - If you store the session in a cookie, clear the cookie:
  `rep = flask.Response(); rep.set_cookie('session', '', expires=0)`

- Create a logout button component and assign it the logout_url
`dcc.LogoutButton(logout_url='/logout')`

See https://dash.plot.ly/dash-core-components/logout_button
for more documentation and examples.
Keyword arguments:
- `id` (String; optional): Id of the button.
- `label` (String; optional): Text of the button
- `logout_url` (String; optional): Url to submit a post logout request.
- `style` (Dict; optional): Style of the button
- `method` (String; optional): Http method to submit the logout form.
- `className` (String; optional): CSS class for the button.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function dcc_logoutbutton(; kwargs...)
        available_props = Set(Symbol[:id, :label, :logout_url, :style, :method, :className, :loading_state])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("LogoutButton", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_logoutbutton"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_logoutbutton(children::Any; kwargs...)
    result = dcc_logoutbutton(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_logoutbutton(children_maker::Function; kwargs...) = dcc_logoutbutton(children_maker(); kwargs...)
