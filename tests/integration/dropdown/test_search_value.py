from multiprocessing import Value
import dash
from dash.dependencies import Input, Output, State
import dash.testing.wait as wait
import dash_core_components as dcc
import dash_html_components as html


def test_ddsv001_search_value(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [dcc.Dropdown(id="dropdown", search_value="something"), html.Div(id="output")]
    )

    call_count = Value("i", 0)

    @app.callback(
        Output("output", "children"), inputs=[Input("dropdown", "search_value")]
    )
    def update_output(search_value):
        call_count.value += 1
        return 'search_value="{}"'.format(search_value)

    dash_duo.start_server(app)

    # Get the inner input used for search value.
    input_ = dash_duo.find_element("#dropdown").find_element_by_tag_name("input")

    # callback gets called with initial input
    wait.until(lambda: call_count.value == 1, timeout=1)

    assert dash_duo.wait_for_text_to_equal("#output", 'search_value="something"')

    input_.send_keys("x")
    wait.until(lambda: call_count.value == 2, timeout=1)
    assert dash_duo.wait_for_text_to_equal("#output", 'search_value="x"')
