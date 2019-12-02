import pytest
import pandas as pd
from multiprocessing import Value
import numpy as np
from time import sleep

import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
from utils import wait_for


@pytest.mark.parametrize("responsive", [True, False, None])
@pytest.mark.parametrize("autoresize", [True, False, None])
@pytest.mark.parametrize("height", [600, None])
@pytest.mark.parametrize("width", [600, None])
@pytest.mark.parametrize("is_responsive", [True, False, 'auto'])
def test_grrs001_graph(
    dash_dcc, responsive, autoresize, height, width, is_responsive
):
    app = dash.Dash(__name__, eager_loading=True)

    header_style = dict(
        padding='10px', backgroundColor='yellow', flex='0 0 100px'
    )

    graph_style = dict(padding='10px', backgroundColor='red', flex='1 0 0')

    card_style = dict(
        display='flex',
        flexFlow='column',
        backgroundColor='green',
        padding='10px',
        height='500px',
        width='1000px',
    )

    header = html.Div(
        id='header',
        style=header_style,
        children=[html.Button(id='resize', children=['Resize'])],
    )

    graph = html.Div(
        style=graph_style,
        children=[
            dcc.Graph(
                id='graph',
                responsive=is_responsive,
                style=dict(height='100%', width='100%'),
                config=dict(responsive=responsive),
                figure=dict(
                    layout=dict(
                        autoresize=autoresize, height=height, width=width
                    ),
                    data=[
                        dict(
                            x=[1, 2, 3, 4],
                            y=[5, 4, 3, 6],
                            line=dict(shape='spline'),
                        )
                    ],
                ),
            )
        ],
    )

    app.layout = html.Div(
        id='card', style=card_style, children=[header, graph]
    )

    @app.callback(
        Output('header', 'style'),
        [Input('resize', 'n_clicks')],
        [State('header', 'style')],
    )
    def resize(n_clicks, style):
        if n_clicks is None:
            raise PreventUpdate

        return dict(style, **dict(flex='0 0 200px'))

    dash_dcc.start_server(app)

    resolved_responsive = is_responsive is True or (
        is_responsive == 'auto'
        and responsive is not False
        and autoresize is not False
        and (height is None or width is None)
    )

    wait_for(
        # 500px card minus (100px header + 20px padding) minus (20px padding on container) -> 360px left
        lambda: dash_dcc.wait_for_element('#graph svg.main-svg').size.get(
            'height', -1
        )
        == 360
        if resolved_responsive
        else 600,
        lambda: 'initial graph height {}, expected {}'.format(
            dash_dcc.wait_for_element('#graph svg.main-svg').size.get(
                'height', -1
            ),
            360 if resolved_responsive else 600,
        ),
    )
    dash_dcc.wait_for_element('#resize').click()

    wait_for(
        # 500px card minus (200px header + 20px padding) minus (20px padding on container) -> 260px left
        lambda: dash_dcc.wait_for_element('#graph svg.main-svg').size.get(
            'height', -1
        )
        == 260
        if resolved_responsive
        else 600,
        lambda: 'resized graph height {}, expected {}'.format(
            dash_dcc.wait_for_element('#graph svg.main-svg').size.get(
                'height', -1
            ),
            260 if resolved_responsive else 600,
        ),
    )
