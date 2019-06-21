import sys
import json
import pytest
import uuid
import dash
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
import dash_core_components as dcc
import dash_html_components as html

UUID = "store-test-{}".format(uuid.uuid4().hex)


@pytest.fixture(scope="module")
def store_app():
    app = dash.Dash(__name__)
    app.uuid = UUID
    app.layout = html.Div(
        [
            dcc.Store(id="memory", storage_type="memory", data=app.uuid),
            dcc.Store(id="local", storage_type="local"),
            dcc.Store(id="session", storage_type="session"),
            html.Button("click me", id="btn"),
            html.Button("clear data", id="clear-btn"),
            html.Div(id="output"),
        ]
    )

    @app.callback(
        Output("output", "children"),
        [Input("memory", "modified_timestamp")],
        [State("memory", "data")],
    )
    def write_memory(modified_ts, data):
        if data is None:
            return ""
        return json.dumps(data)

    @app.callback(
        [
            Output("local", "clear_data"),
            Output("memory", "clear_data"),
            Output("session", "clear_data"),
        ],
        [Input("clear-btn", "n_clicks")],
    )
    def on_clear(n_clicks):
        if n_clicks is None:
            raise PreventUpdate
        return True, True, True

    @app.callback(
        [
            Output("memory", "data"),
            Output("local", "data"),
            Output("session", "data"),
        ],
        [Input("btn", "n_clicks")],
    )
    def on_click(n_clicks):
        if n_clicks is None:
            raise PreventUpdate
        return ({"n_clicks": n_clicks},) * 3

    yield app


@pytest.fixture(scope="session")
def csv_5mb():
    import mimesis
    buf, chunks = None, []
    limit = 5 * 1024 * 1024
    while sys.getsizeof(buf) <= limit:
        g = mimesis.Generic()
        chunk = "\n".join(
            (
                "{},{}".format(g.person.full_name(), g.person.email())
                for _ in range(10000)
            )
        )
        chunks.append(chunk)
        buf = ''.join(chunks)

    yield buf[len(chunk):limit]
