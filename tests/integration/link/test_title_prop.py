import pytest
import dash
from dash.dependencies import Input, Output, State
import dash.testing.wait as wait
import dash_core_components as dcc
import dash_html_components as html


@pytest.mark.DCC768
def test_title001_prop(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Link("page 1", id ="link1", href="/page-1", title="This is a test title!"),
            dcc.Location(id="url", refresh=False),
            html.Div(id="content")
        ]
    )
    @app.callback(Output("content", "children"), [Input("link1", "title")])
    def display_title(title):
        return title

    dash_dcc.start_server(app)

    title_exists = dash_dcc.driver.execute_script(
        '''
        return document.getElementById("link1").getAttribute("title");
        '''
    )

    assert "This is a test title!"

