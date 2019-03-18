"""
Autogenerated file
DO NOT EDIT.
CONTENT WILL BE OVERWRITTEN!

WARNING: Do not import this file directly!
"""
import typing

from dash_component_system import (
    DashComponent, UNDEFINED, Undefined, ComponentProp
)


class LogoutButton(DashComponent):
    """
    Logout button to submit a form post request to the `logout_url` prop.
    Usage is intended for dash-deployment-server authentication.  DDS usage:
    `dcc.LogoutButton(logout_url=os.getenv('DASH_LOGOUT_URL'))`  Custom usage:
    - Implement a login mechanism. - Create a flask route with a post method
    handler. `@app.server.route('/logout', methods=['POST'])`   - The logout
    route should perform what's necessary for the user to logout.   - If you
    store the session in a cookie, clear the cookie:   `rep =
    flask.Response(); rep.set_cookie('session', '', expires=0)`  - Create a
    logout button component and assign it the logout_url
    `dcc.LogoutButton(logout_url='/logout')`  See https://dash.plot.ly/dash-
    core-components/logout_button for more documentation and examples.
    """
    _namespace = 'dash_core_components'
    _typename = 'LogoutButton'
    id = ComponentProp('id', UNDEFINED, False)
    label = ComponentProp('label', 'Logout', False)
    logout_url = ComponentProp('logout_url', UNDEFINED, False)
    style = ComponentProp('style', UNDEFINED, False)
    method = ComponentProp('method', 'post', False)
    className = ComponentProp('className', UNDEFINED, False)
    loading_state = ComponentProp('loading_state', UNDEFINED, False)

    def __init__(
        self,
        id=UNDEFINED,
        label='Logout',
        logout_url=UNDEFINED,
        style=UNDEFINED,
        method='post',
        className=UNDEFINED,
        loading_state=UNDEFINED,
        **kwargs
    ):
        # type: (typing.Union[str, Undefined], typing.Union[str, Undefined], typing.Union[str, Undefined], typing.Union[typing.Dict, Undefined], typing.Union[str, Undefined], typing.Union[str, Undefined], typing.Union[typing.Dict[str, typing.Union[bool, str]], Undefined], typing.Any) -> None # noqa: E501
        """
        :param id: Id of the button.
        :param label: Text of the button
        :param logout_url: Url to submit a post logout request.
        :param style: Style of the button
        :param method: Http method to submit the logout form.
        :param className: CSS class for the button.
        :param loading_state: Object that holds the loading state object
            coming from dash-renderer
        """
        kws = {k: v for k, v in locals().items() if k != 'self'}
        DashComponent.__init__(self, **kws)