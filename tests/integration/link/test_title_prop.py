import pytest
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html


@pytest.mark.DCC768
def test_liti001_prop(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Link("page 1", id="link1", href="/page-1", title="This is a test title!"),
            dcc.Location(id="url", refresh=False),
            html.Div(id="content")
        ]
    )
    @app.callback(Output("content", "children"), [Input("link1", "title")])
    def display_title(title):
        return title

    dash_dcc.start_server(app)

    title_exists = dash_dcc.find_element('#link1').get_attribute('title')

    assert title_exists == "This is a test title!"
