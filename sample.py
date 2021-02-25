import dash
import dash_html_components as html
import dash_core_components as dcc

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)
app.layout = html.Div([
    dcc.Slider(
        id='my-slider',
        min=0,
        syncedInput=True,
        max=20,
        step=0.5,
        value=10,
    ),
    html.Div(id='slider-output-container')
])

if __name__ == '__main__':
    app.run_server(debug=True)
