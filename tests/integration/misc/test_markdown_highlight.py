# -*- coding: utf-8 -*-

import dash
import dash_core_components as dcc
import dash_html_components as html


md_text = '''```python
import dash
print('hello, world!')
```'''


def test_msmh001_no_window_variable(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(dcc.Markdown(md_text))
    dash_dcc.start_server(app)

    window_hljs = dash_dcc.driver.execute_script('return window.hljs')
    assert window_hljs is None


def test_msmh001_window_override(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(dcc.Markdown(md_text))
    dash_dcc.start_server(app)

    dash_dcc.driver.execute_script('window.hljs = {highlightBlock: (block) => {block.innerHTML="hljs override"}};')
