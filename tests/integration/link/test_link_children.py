import pytest
import dash
from dash.dependencies import Input, Output, State
import dash.testing.wait as wait
import dash_core_components as dcc
import dash_html_components as html


@pytest.mark.DCC772
def test_children001_default(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Link(id ="link1", href="/page-1"),
            dcc.Location(id="url", refresh=False),
            html.Div(id="content")
        ]
    )
    @app.callback(Output("content", "children"), [Input("link1", "children")])
    def display_children(children):
        return children

    dash_dcc.start_server(app)

    href_as_children = dash_dcc.driver.execute_script(
        '''
        return document.getElementById("link1").getAttribute("children");
        '''
    )

    assert "/page-1"