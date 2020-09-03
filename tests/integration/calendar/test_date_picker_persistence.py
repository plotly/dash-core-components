from datetime import datetime, timedelta

import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains


def test_rdpr001_persisted_dps(dash_dcc):
    def send_date_dps(target, date):
        (
            ActionChains(dash_dcc.driver).send_keys(str(date)).send_keys(Keys.ENTER)
        ).perform()

    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            html.Button("fire callback", id="btn"),
            html.Div(
                children=[
                    dcc.DatePickerSingle(
                        id="dps1",
                        date=datetime.today(),
                        persistence=True,
                        persistence_type="session",
                    ),
                    html.P("dps1", id="dps1-p"),
                    html.Div(id="container"),
                    html.P("dps2", id="dps2-p"),
                ]
            ),
        ]
    )

    @app.callback(Output("container", "children"), [Input("btn", "n_clicks")])
    def update_output(value):
        return dcc.DatePickerSingle(
            id="dps2",
            date=datetime.today(),
            persistence=True,
            persistence_type="session",
        )

    @app.callback(Output("dps1-p", "children"), [Input("dps1", "date")])
    def display_dps1(value):
        return value

    @app.callback(Output("dps2-p", "children"), [Input("dps2", "date")])
    def display_dps2(value):
        return value

    dash_dcc.start_server(app)
    dps1 = dash_dcc.find_element("#dps1")
    dps2 = dash_dcc.find_element("#dps2")

    dash_dcc.clear_input(dps1)
    send_date_dps(dps1, "01/01/2020")
    dash_dcc.wait_for_text_to_equal("#dps1-p", "2020-01-01")

    dash_dcc.clear_input(dps2)
    send_date_dps(dps2, "01/01/2020")
    dash_dcc.wait_for_text_to_equal("#dps2-p", "2020-01-01")

    dash_dcc.find_element("#btn").click()

    dash_dcc.wait_for_text_to_equal("#dps1-p", "2020-01-01")
    dash_dcc.wait_for_text_to_equal("#dps2-p", "2020-01-01")


def test_rdpr002_persisted_dpr(dash_dcc):
    def send_date_dpr(target, start_date, end_date):
        (
            ActionChains(dash_dcc.driver)
            .move_to_element(target)
            .click(target)
            .send_keys(Keys.END)
            .key_down(Keys.SHIFT)
            .send_keys(Keys.HOME)
            .key_up(Keys.SHIFT)
            .send_keys(str(start_date))
            .pause(0.2)
            .send_keys(Keys.END)
            .key_down(Keys.SHIFT)
            .send_keys(Keys.HOME)
            .key_up(Keys.SHIFT)
            .send_keys(str(end_date))
        ).perform()

    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            html.Button("fire callback", id="btn"),
            html.Div(
                children=[
                    dcc.DatePickerRange(
                        id="dpr1",
                        start_date=datetime.today() - timedelta(days=3),
                        end_date=datetime.today(),
                        persistence=True,
                        persistence_type="session",
                    ),
                    html.P("dpr1", id="dpr1-p-start"),
                    html.P("dpr1", id="dpr1-p-end"),
                    html.Div(id="container"),
                    html.P("dpr2", id="dpr2-p-start"),
                    html.P("dpr2", id="dpr2-p-end"),
                ]
            ),
        ]
    )

    @app.callback(Output("container", "children"), [Input("btn", "n_clicks")])
    def update_output(value):
        return dcc.DatePickerRange(
            id="dpr2",
            start_date=datetime.today() - timedelta(days=3),
            end_date=datetime.today(),
            persistence=True,
            persistence_type="session",
        )

    @app.callback(Output("dpr1-p-start", "children"), [Input("dpr1", "start_date")])
    def display_dps1(value):
        return value

    @app.callback(Output("dpr1-p-end", "children"), [Input("dpr1", "end_date")])
    def display_dps1(value):
        return value

    @app.callback(Output("dpr2-p-start", "children"), [Input("dpr2", "start_date")])
    def display_dps2(value):
        return value

    @app.callback(Output("dpr2-p-end", "children"), [Input("dpr2", "end_date")])
    def display_dps2(value):
        return value

    dash_dcc.start_server(app)
    dpr1 = dash_dcc.find_element("div#dpr1 div div div div .DateInput_input")
    dpr2 = dash_dcc.find_element("div#dpr2 div div div div .DateInput_input")

    send_date_dpr(dpr1, "01/01/2020", "01/02/2020")
    dash_dcc.wait_for_text_to_equal("#dpr1-p-start", "2020-01-01")
    dash_dcc.wait_for_text_to_equal("#dpr1-p-end", "2020-01-02")

    send_date_dpr(dpr2, "01/01/2020", "01/02/2020")
    dash_dcc.wait_for_text_to_equal("#dpr2-p-start", "2020-01-01")
    dash_dcc.wait_for_text_to_equal("#dpr2-p-end", "2020-01-02")

    dash_dcc.find_element("#btn").click()

    dash_dcc.wait_for_text_to_equal("#dpr1-p-start", "2020-01-01")
    dash_dcc.wait_for_text_to_equal("#dpr1-p-end", "2020-01-02")
    dash_dcc.wait_for_text_to_equal("#dpr2-p-start", "2020-01-01")
    dash_dcc.wait_for_text_to_equal("#dpr2-p-end", "2020-01-02")
