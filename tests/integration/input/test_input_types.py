import pytest
from selenium.common.exceptions import WebDriverException
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html

ALLOWING_TYPES = (
    "text",
    "number",
    "password",
    "email",
    "range",
    "search",
    "tel",
    "url",
    "hidden",
)


def test_intp001_all_types(dash_dcc):
    def input_id(type_):
        return "input_{}".format(type_)

    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Input(
                id=input_id(_), type=_, placeholder="input type {}".format(_)
            )
            for _ in ALLOWING_TYPES
        ]
        + [html.Div(id="output")]
    )

    @app.callback(
        Output("output", "children"),
        [Input(input_id(_), "value") for _ in ALLOWING_TYPES],
    )
    def cb_render(*vals):
        return " | ".join((val for val in vals if val))

    dash_dcc.start_server(app)

    assert (
        dash_dcc.find_element("#input_hidden").get_attribute("type")
        == "hidden"
    ), "hidden input element should present with hidden type"

    dash_dcc.percy_snapshot("intp001 - init state")

    for atype in ALLOWING_TYPES[:-1]:
        dash_dcc.find_element("#input_{}".format(atype)).send_keys(
            "test intp001 - input[{}]".format(atype)
        )

    with pytest.raises(WebDriverException):
        dash_dcc.find_element("#input_hidden").send_keys("no interaction")

    dash_dcc.percy_snapshot("intp001 - callback output rendering")
