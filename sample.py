import dash
import dash_html_components as html
import dash_core_components as dcc

external_stylesheets = ["https://codepen.io/chriddyp/pen/bWLwgP.css"]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)
app.layout = html.Div(
    [
        dcc.Slider(
            id="my-slider",
            min=0,
            max=100,
            syncedInput=True,
            step=0.5,
            value=10,
            tooltip={"always_visible": True, "placement": "bottom"},
        ),
        html.Div(id="slider-output-container"),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
