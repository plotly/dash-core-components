import dash
import dash_html_components as html
import dash_core_components as dcc

external_stylesheets = ["https://codepen.io/chriddyp/pen/bWLwgP.css"]

app = dash.Dash(__name__)
app.layout = html.Div(
    [
        dcc.Slider(
            id="my-slider0",
            min=0,
            max=100,
            step=0.5,
            value=10,
        ),dcc.Slider(
            id="my-slider",
            min=0,
            max=100,
            syncedInput=True,
            step=0.5,
            value=10,
            tooltip={"always_visible": True, "placement": "bottom"},
        ),
        dcc.Slider(
            id="my-slider2",
            min=0,
            max=100000,
            syncedInput=True,
            syncedInputClassName="syncedInput1",
            syncedInputDebounceTime=3500,
            step=0.5,
            value=10,
            tooltip={"always_visible": True, "placement": "bottom"},
        ),
        dcc.Slider(
            id="my-slider3",
            min=0,
            max=10000000,
            syncedInput=True,
            syncedInputClassName="syncedInput2",
            syncedInputDebounceTime=7500,
            step=0.5,
            value=10,
            tooltip={"always_visible": True, "placement": "bottom"},
        ),
        dcc.Slider(
            id="my-slider4",
            min=0,
            max=10,
            syncedInput=True,
            syncedInputClassName="syncedInput3",
            syncedInputDebounceTime=100,
            step=0.5,
            value=10,
            vertical=True,
            tooltip={"always_visible": True, "placement": "bottom"},
        ),
        html.Div(id="slider-output-container"),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
