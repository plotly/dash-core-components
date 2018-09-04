import time

import dash
import dash_html_components as html
from dash.dependencies import Output, Input

import dash_core_components as dcc

app = dash.Dash(__name__)
app.scripts.config.serve_locally = True

app.layout = html.Div([
    html.Button(id='button', children='Send confirm', n_clicks=0),
    html.Div(id='confirm-container'),
    dcc.Input(id='dummy-input')
])


@app.callback(Output('confirm-container', 'children'),
              [Input('button', 'n_clicks')])
def on_click(n_clicks):
    if n_clicks:
        return dcc.ConfirmDialog(
            displayed=True,
            id='confirm',
            key=str(time.time()),
            message='Please confirm.')


if __name__ == '__main__':
    app.run_server(debug=True, port=5050)
