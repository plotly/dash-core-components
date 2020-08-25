# AUTO GENERATED FILE - DO NOT EDIT

export dcc_logoutbutton

"""
    dcc_logoutbutton(;kwargs...)

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

See https://dash.plotly.com/dash-core-components/logout_button
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
        available_props = Symbol[:id, :label, :logout_url, :style, :method, :className, :loading_state]
        wild_props = Symbol[]
        return Component("dcc_logoutbutton", "LogoutButton", "dash_core_components", available_props, wild_props; kwargs...)
end

