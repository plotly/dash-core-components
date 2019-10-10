import dash
from dash.dependencies import Input, Output
import dash.testing.wait as wait
import dash_core_components as dcc
import dash_html_components as html
from multiprocessing import Value
import numpy as np
import pandas as pd
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from time import sleep


@pytest.mark.parametrize("is_eager", [True, False])
def test_graph_does_not_resize_in_tabs(dash_dcc, is_eager):
    app = dash.Dash(__name__, eager_loading=is_eager)
    app.layout = html.Div([
        html.H1('Dash Tabs component demo'),
        dcc.Tabs(id="tabs-example", value='tab-1-example', children=[
            dcc.Tab(label='Tab One', value='tab-1-example', id='tab-1'),
            dcc.Tab(label='Tab Two', value='tab-2-example', id='tab-2'),
        ]),
        html.Div(id='tabs-content-example')
    ])

    @app.callback(Output('tabs-content-example', 'children'),
                    [Input('tabs-example', 'value')])
    def render_content(tab):
        if tab == 'tab-1-example':
            return html.Div([
                html.H3('Tab content 1'),
                dcc.Graph(
                    id='graph-1-tabs',
                    figure={
                        'data': [{
                            'x': [1, 2, 3],
                            'y': [3, 1, 2],
                            'type': 'bar'
                        }]
                    }
                )
            ])
        elif tab == 'tab-2-example':
            return html.Div([
                html.H3('Tab content 2'),
                dcc.Graph(
                    id='graph-2-tabs',
                    figure={
                        'data': [{
                            'x': [1, 2, 3],
                            'y': [5, 10, 6],
                            'type': 'bar'
                        }]
                    }
                )
            ])
    dash_dcc.start_server(app)

    tab_one = dash_dcc.wait_for_element('#tab-1')
    tab_two = dash_dcc.wait_for_element('#tab-2')

    WebDriverWait(dash_dcc.driver, 10).until(
        EC.element_to_be_clickable((By.ID, "tab-2"))
    )

    # wait for Graph to be ready
    WebDriverWait(dash_dcc.driver, 10).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "#graph-1-tabs .main-svg"))
    )

    dash_dcc.percy_snapshot("Tabs with Graph - initial (graph should not resize) ({})".format("eager" if is_eager else "lazy"))
    tab_two.click()

    # wait for Graph to be ready
    WebDriverWait(dash_dcc.driver, 10).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "#graph-2-tabs .main-svg"))
    )

    dash_dcc.percy_snapshot("Tabs with Graph - clicked tab 2 (graph should not resize)")

    WebDriverWait(dash_dcc.driver, 10).until(
        EC.element_to_be_clickable((By.ID, "tab-1"))
    )

    tab_one.click()

    # wait for Graph to be loaded after clicking
    WebDriverWait(dash_dcc.driver, 10).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "#graph-1-tabs .main-svg"))
    )

    dash_dcc.percy_snapshot("Tabs with Graph - clicked tab 1 (graph should not resize)")
