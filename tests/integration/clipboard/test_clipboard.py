import dash
import dash_core_components as dcc
import dash_html_components as html

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys


def test_clp001_clipboard_text(dash_dcc):
    copy_text = "Hello, Dash!"
    app = dash.Dash(__name__, prevent_initial_callbacks=True)
    app.layout = html.Div(
        [
            html.Div(copy_text, id="copy"),
            dcc.Clipboard(id="copy_icon", target_id="copy"),
            dcc.Textarea(id="paste"),
        ]
    )
    dash_dcc.start_server(app)

    dash_dcc.find_element("#copy_icon").click()
    dash_dcc.find_element("#paste").click()
    ActionChains(dash_dcc.driver).key_down(Keys.CONTROL).send_keys("v").key_up(
        Keys.CONTROL
    ).perform()

    elem = dash_dcc.find_element("#paste")
    val = elem.get_attribute("value")
    assert val == copy_text


def test_clp002_clipboard_text(dash_dcc):
    copy_text = "Copy"
    app = dash.Dash(__name__, prevent_initial_callbacks=True)
    app.layout = html.Div(
        [dcc.Clipboard(id="copy_icon", text=copy_text), dcc.Textarea(id="paste")]
    )
    dash_dcc.start_server(app)

    dash_dcc.find_element("#copy_icon").click()
    dash_dcc.find_element("#paste").click()
    ActionChains(dash_dcc.driver).key_down(Keys.CONTROL).send_keys("v").key_up(
        Keys.CONTROL
    ).perform()

    elem = dash_dcc.find_element("#paste")
    val = elem.get_attribute("value")
    assert val == copy_text
