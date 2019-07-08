import pytest

from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import WebDriverException


def test_mspl001_dcc_components_platter(platter_app, dash_duo):

    dash_duo.start_server(platter_app)

    dash_duo.wait_for_element("#waitfor")
    dash_duo.percy_snapshot("gallery")

    dash_duo.find_element("#dropdown .Select-input input").send_keys(u"北")
    dash_duo.percy_snapshot("gallery - chinese character")

    text_input = dash_duo.find_element("#textinput")
    assert (
        text_input.get_attribute("type") == "text"
    ), "the default input type should be text"

    text_input.send_keys("HODOR")

    with pytest.raises(WebDriverException):
        dash_duo.find_element("#disabled-textinput").send_keys("RODOH")

    dash_duo.percy_snapshot("gallery - text input")

    # DatePickerSingle and DatePickerRange test
    # for issue with datepicker when date value is `None`

    def reset_input(elem):
        elem.send_keys(len(elem.get_attribute("value")) * Keys.BACKSPACE)
        elem.send_keys("1997-05-03")

    dt_input_1 = dash_duo.find_element("#dt-single-no-date-value #date")
    dt_input_1.click()
    dash_duo.percy_snapshot(
        "gallery - DatePickerSingle's datepicker "
        "when no date value and no initial month specified"
    )
    reset_input(dt_input_1)

    dt_input_2 = dash_duo.find_element(
        "#dt-single-no-date-value-init-month #date"
    )
    dash_duo.find_element("label").click()
    dt_input_2.click()
    dash_duo.percy_snapshot(
        "gallery - DatePickerSingle's datepicker "
        "when no date value, but initial month is specified"
    )
    reset_input(dt_input_2)

    dt_input_3 = dash_duo.find_element("#dt-range-no-date-values #endDate")
    dash_duo.find_element("label").click()
    dt_input_3.click()
    dash_duo.percy_snapshot(
        "gallery - DatePickerRange's datepicker "
        "when neither start date nor end date "
        "nor initial month is specified"
    )
    reset_input(dt_input_3)

    dt_input_4 = dash_duo.find_element(
        "#dt-range-no-date-values-init-month #endDate"
    )
    dash_duo.find_element("label").click()
    dt_input_4.click()
    dash_duo.percy_snapshot(
        "gallery - DatePickerRange's datepicker "
        "when neither start date nor end date is specified, "
        "but initial month is"
    )
    reset_input(dt_input_4)
