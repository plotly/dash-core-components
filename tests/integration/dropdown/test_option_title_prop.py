# -*- coding: UTF-8 -*-

import pytest
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html

from utils import wait_for


@pytest.mark.DCC793
@pytest.mark.parametrize("multi", [True, False])
def test_ddot001_option_title(dash_dcc, multi):
    app = dash.Dash(__name__)
    app.layout = html.Div([
        dcc.Input(
            id="dropdown_title_input",
            type="text",
            placeholder="Enter a title for New York City"
        ),
        dcc.Dropdown(
            id="dropdown",
            options=[
                {'label': 'New York City', 'value': 'NYC'},
                {'label': 'Montréal', 'value': 'MTL'},
                {'label': 'San Francisco', 'value': 'SF'}
            ],
            value='NYC',
            multi=multi
        )
    ])

    @app.callback(Output("dropdown", "options"), [Input("dropdown_title_input", "value")])
    def add_title_to_option(title):
        return [
            {'label': 'New York City', 'title': title, 'value': 'NYC'},
            {'label': 'Montréal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'}
        ]

    dash_dcc.start_server(app)

    dropdown_option_element = dash_dcc.wait_for_element("#dropdown .Select-value")

    dropdown_title_input = dash_dcc.wait_for_element("#dropdown_title_input")

    # Empty string title ('') (default for no title)
    wait_for(
        lambda: dropdown_option_element.get_attribute("title")
        == '',
        lambda: '`title` is {}, expected {}'.format(
            dropdown_option_element.get_attribute("title"),
            '',
        ),
    )

    dropdown_title_input.send_keys("The Big Apple")

    wait_for(
        lambda: dropdown_option_element.get_attribute("title")
        == "The Big Apple",
        lambda: '`title` is {}, expected {}'.format(
            dropdown_option_element.get_attribute("title"),
            "The Big Apple",
        ),
    )

    dash_dcc.clear_input(dropdown_title_input)

    dropdown_title_input.send_keys("Gotham City?")

    wait_for(
        lambda: dropdown_option_element.get_attribute("title")
        == "Gotham City?",
        lambda: '`title` is {}, expected {}'.format(
            dropdown_option_element.get_attribute("title"),
            "Gotham City?",
        ),
    )

    dash_dcc.clear_input(dropdown_title_input)

    wait_for(
        lambda: dropdown_option_element.get_attribute("title")
        == '',
        lambda: '`title` is {}, expected {}'.format(
            dropdown_option_element.get_attribute("title"),
            '',
        ),
    )
