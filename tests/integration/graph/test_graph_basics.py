import pytest
import pandas as pd
import numpy as np
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash.testing.wait as wait


def test_grbs001_graph_without_ids(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Graph(className="graph-no-id-1"),
            dcc.Graph(className="graph-no-id-2"),
        ]
    )

    dash_dcc.start_server(app)

    assert not dash_dcc.wait_for_element(".graph-no-id-1").get_attribute(
        "id"
    ), "the graph should contain no more auto-generated id"
    assert not dash_dcc.wait_for_element(".graph-no-id-2").get_attribute(
        "id"
    ), "the graph should contain no more auto-generated id"


@pytest.mark.DCC608
def test_grbs002_wrapped_graph_has_no_infinite_loop(dash_dcc):

    df = pd.DataFrame(np.random.randn(50, 50))
    figure = {
        "data": [
            {"x": df.columns, "y": df.index, "z": df.values, "type": "heatmap"}
        ],
        "layout": {"xaxis": {"scaleanchor": "y"}},
    }

    app = dash.Dash(__name__)
    app.layout = html.Div(
        style={
            "backgroundColor": "red",
            "height": "100vmin",
            "width": "100vmin",
            "overflow": "hidden",
            "position": "relative",
        },
        children=[
            dcc.Loading(
                children=[
                    dcc.Graph(
                        id="graph",
                        figure=figure,
                        style={
                            "position": "absolute",
                            "top": 0,
                            "left": 0,
                            "backgroundColor": "blue",
                            "width": "100%",
                            "height": "100%",
                            "overflow": "hidden",
                        },
                    )
                ]
            )
        ],
    )

    @app.callback(Output("graph", "figure"), [Input("graph", "relayoutData")])
    def selected_df_figure(selection):
        figure["data"][0]["x"] = df.columns
        figure["data"][0]["y"] = df.index
        figure["data"][0]["z"] = df.values
        return figure

    dash_dcc.start_server(app)

    wait.until(lambda: dash_dcc.driver.title == "Dash", timeout=2)
    assert (
        len({dash_dcc.driver.title for _ in range(20)}) == 1
    ), "after the first update, there should contain no extra Updating..."
