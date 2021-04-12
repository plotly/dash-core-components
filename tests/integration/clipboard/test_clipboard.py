import dash
import dash_core_components as dcc
import dash_html_components as html
import dash.testing.wait as wait
import time


from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys


def test_clp001_clipboard_text(dash_dcc_headed):
    copy_text = "Hello, Dash!"
    app = dash.Dash(__name__, prevent_initial_callbacks=True)
    app.layout = html.Div(
        [
            html.Div(copy_text, id="copy1"),
            dcc.Clipboard(id="copy_icon1", target_id="copy1"),
            dcc.Textarea(id="paste1"),
        ]
    )
    dash_dcc_headed.start_server(app)
    dash_dcc_headed.driver.execute_script("navigator.clipboard.writeText('')")

    dash_dcc_headed.find_element("#copy_icon1").click()
    time.sleep(2)
    dash_dcc_headed.find_element("#paste1").click()
    ActionChains(dash_dcc_headed.driver).key_down(Keys.CONTROL).send_keys("v").key_up(
        Keys.CONTROL
    ).perform()

    wait.until(
        lambda: dash_dcc_headed.find_element("#paste1").get_attribute("value")
        == copy_text,
        timeout=3,
    )


def test_clp002_clipboard_text(dash_dcc_headed):
    copy_text = "Copy this text to the clipboard"
    app = dash.Dash(__name__, prevent_initial_callbacks=True)
    app.layout = html.Div(
        [dcc.Clipboard(id="copy_icon2", text=copy_text), dcc.Textarea(id="paste2")]
    )
    dash_dcc_headed.start_server(app)
    dash_dcc_headed.driver.execute_script("navigator.clipboard.writeText('')")

    dash_dcc_headed.find_element("#copy_icon2").click()
    time.sleep(2)
    dash_dcc_headed.find_element("#paste2").click()
    ActionChains(dash_dcc_headed.driver).key_down(Keys.CONTROL).send_keys("v").key_up(
        Keys.CONTROL
    ).perform()

    wait.until(
        lambda: dash_dcc_headed.find_element("#paste2").get_attribute("value")
        == copy_text,
        timeout=3,
    )
