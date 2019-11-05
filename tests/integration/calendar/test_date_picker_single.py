from datetime import datetime, timedelta

import pytest
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output


@pytest.mark.DCC652
def test_dtps001_simple_click(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            html.Label("Operating Date"),
            dcc.DatePickerSingle(
                id="dps",
                min_date_allowed=datetime(2010, 1, 1),
                max_date_allowed=datetime(2099, 12, 31),
                initial_visible_month=datetime.today().date()
                - timedelta(days=1),
                day_size=47,
            ),
        ],
        style={
            "width": "10%",
            "display": "inline-block",
            "marginLeft": 10,
            "marginRight": 10,
            "marginBottom": 10,
        },
    )
    dash_dcc.start_server(app)
    date = dash_dcc.find_element("#dps input")
    assert not date.get_attribute("value")
    assert dash_dcc.select_date_single(
        "dps", index=3
    ), "Component should be clickable to choose a valid date"


def test_dtps010_local_and_session_persistence(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.DatePickerSingle(id="dps-local", persistence=True, day_size=47),
            dcc.DatePickerSingle(
                id="dps-session",
                persistence=True,
                persistence_type="session",
                day_size=47,
            ),
        ]
    )

    dash_dcc.start_server(app)

    assert not dash_dcc.find_element("#dps-local input").get_attribute(
        "value"
    ) and not dash_dcc.find_element("#dps-session input").get_attribute(
        "value"
    ), "component should contain no initial date"

    for idx in range(3):
        local = dash_dcc.select_date_single("dps-local", index=idx)
        session = dash_dcc.select_date_single("dps-session", index=idx)
        dash_dcc.wait_for_page()
        assert (
            dash_dcc.find_element("#dps-local input").get_attribute("value")
            == local
            and dash_dcc.find_element("#dps-session input").get_attribute(
                "value"
            )
            == session
        ), "the date value should be consistent after refresh"


def test_dtps011_memory_persistence(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [html.Button(id="switch", children="Switch"), html.Div(id="out")]
    )

    @app.callback(Output("out", "children"), [Input("switch", "n_clicks")])
    def cb(clicks):
        if clicks is None:
            return dash.no_update
        if clicks % 2 == 1:
            return [
                dcc.DatePickerSingle(
                    id="dps-memory",
                    min_date_allowed=datetime(2010, 1, 1),
                    max_date_allowed=datetime(2099, 12, 31),
                    initial_visible_month=datetime.today().date()
                    - timedelta(days=1),
                    persistence=True,
                    persistence_type="memory",
                    day_size=47,
                ),
                dcc.DatePickerSingle(
                    id="dps-none",
                    min_date_allowed=datetime(2010, 1, 1),
                    max_date_allowed=datetime(2099, 12, 31),
                    initial_visible_month=datetime.today().date()
                    - timedelta(days=1),
                    day_size=47,
                ),
            ]
        else:
            return "switched"

    dash_dcc.start_server(app)

    switch = dash_dcc.find_element("#switch")
    switch.click()

    memorized = dash_dcc.select_date_single("dps-memory", day="4")
    amnesiaed = dash_dcc.select_date_single("dps-none", day="11")

    switch.click()
    assert dash_dcc.wait_for_text_to_equal("#out", "switched")
    switch.click()
    assert (
        dash_dcc.find_element("#dps-memory input").get_attribute("value")
        == memorized
    )
    switched = dash_dcc.find_element("#dps-none input").get_attribute("value")
    assert switched != amnesiaed and switched == ""


def test_dtps012_initial_month(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div([
        dcc.DatePickerSingle(
            id="dps-initial-month",
            min_date_allowed=datetime(2010, 1, 1),
            max_date_allowed=datetime(2099, 12, 31)
        )
    ])

    dash_dcc.start_server(app)

    date_picker = dash_dcc.find_element('#dps-initial-month')
    date_picker.click()
    dash_dcc.wait_for_text_to_equal(
        '#dps-initial-month .CalendarMonth.CalendarMonth_1[data-visible=true] strong',
        'January 2010'
    )
