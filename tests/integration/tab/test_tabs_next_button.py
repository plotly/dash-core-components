import pytest
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html


@pytest.mark.DCC768
def test_tane001_next(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            html.H1('Dash Tabs Next Button Test'),
            dcc.Tabs(
                id="tabs-example",
                value='tab-1-example',
                next_tab=True,
                children=[
                    dcc.Tab(
                        label='Tab One', value='tab-1', id='tab-1', children="Tab 1 Content"
                    ),
                    dcc.Tab(
                        label='Tab Two', value='tab-2', id='tab-2', children="Tab 2 Content"
                    ),
                ],
            ),
            html.Div(id='tabs-output'),
        ]
    )
    @app.callback(Output("tabs-output", "children"), [Input("tabs-example", "value")])
    def display_value(value):
        return value

    dash_dcc.start_server(app)

    dash_dcc.wait_for_element('#tab-1').click()

    dash_dcc.wait_for_element('#next-tab').click()

    dash_dcc.wait_for_text_to_equal("#tabs-output", "tab-2")
