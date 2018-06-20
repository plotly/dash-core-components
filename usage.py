import dash
import dash_html_components as html
import dash_core_components as dcc

from dash.dependencies import Input, Output, State

app = dash.Dash()

app.css.config.serve_locally = True
app.scripts.config.serve_locally = True


app.layout = html.Div([
    dcc.Tabs(id="tabs", children=[
        dcc.Tab(label='Tab one', children=[
            html.Div([
                html.H1("This is the content in tab 1"),
                html.P("Webster's dictionary defines the word bla as bla bla bla")
            ])
        ]),
        dcc.Tab(label='Tab two', children=[
            html.Div([
                html.H1("This is the content in tab 2"),
                html.P("A graph here would be nice!")
            ])
        ]),
        dcc.Tab(label='Tab three, with a ridiculously long label', children=[
            html.Div([
                html.H1("This is the content in tab 3"),
                html.P("Hopefully our tabs still look good!")
            ])
        ]),
    ],
        style={
        'width': '1000px',
        'margin': '0 auto',
        'fontFamily': 'system-ui'
    },
        contentStyle={
            'boxShadow':
            '0 0px 0px 0 rgba(0,0,0,0.14), 0 -2px 10px 0 rgba(0,0,0,0.12), 0 0px 10px -1px rgba(0,0,0,0.3)',
            'padding': '44px'
    }
    )
])


if __name__ == '__main__':
    app.run_server(debug=True)
