import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html


def test_ddsv001_search_value(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [dcc.Dropdown(id="dropdown", search_value="something"), html.Div(id="output")]
    )

    @app.callback(
        Output("output", "children"), inputs=[Input("dropdown", "search_value")]
    )
    def update_output(search_value):
        return 'search_value="{}"'.format(search_value)

    dash_duo.start_server(app)

    # Get the inner input used for search value.
    input_ = dash_duo.find_element("#dropdown input")

    dash_duo.wait_for_text_to_equal("#output", 'search_value="something"')

    input_.send_keys("x")
    dash_duo.wait_for_text_to_equal("#output", 'search_value="x"')
