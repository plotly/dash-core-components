import os
import time
import dash
import dash_core_components as dcc
import dash_html_components as html

from dash.dependencies import Input, Output


def test_download_text(dash_dcc):
    text = "Hello, world!"
    filename = "hello.txt"
    # Create app.
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Store(id="content", data=text),
            dcc.Download(id="download"),
        ]
    )

    @app.callback(Output("download", "data"), [Input("content", "data")])
    def download(content):
        return dict(filename=filename, content=content)

    # Check that there is nothing before starting the app
    fp = os.path.join(dash_dcc.download_path, filename)
    assert not os.path.isfile(fp)
    # Run the app.
    dash_dcc.start_server(app)
    time.sleep(0.5)
    # Check that a file has been download, and that it's content matches the original text.
    with open(fp, "r") as f:
        content = f.read()
    assert content == text
