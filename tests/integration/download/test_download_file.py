import os
import time
import dash
import dash_core_components as dcc
import dash_html_components as html

from dash.dependencies import Input, Output


def test_download_file(dash_dcc):
    filename = "Lenna.jpeg"
    asset_folder = os.path.join(os.path.dirname(__file__), "download-assets")
    # Create app.
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [dcc.Input(id="input", value=filename), dcc.Download(id="download")]
    )

    @app.callback(Output("download", "data"), [Input("input", "value")])
    def download(value):
        return dcc.send_file(os.path.join(asset_folder, value))

    # Check that there is nothing before starting the app
    fp = os.path.join(dash_dcc.download_path, filename)
    assert not os.path.isfile(fp)
    # Run the app.
    dash_dcc.start_server(app)
    time.sleep(0.5)
    # Check that a file has been download, and that it's content matches the original.
    with open(fp, "rb") as f:
        content = f.read()
    with open(os.path.join(asset_folder, filename), "rb") as f:
        original = f.read()
    assert content == original
