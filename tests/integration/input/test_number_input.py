import time
import sys
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains


def test_inni001_invalid_numbers(ninput_app, dash_duo):
    dash_duo.start_server(ninput_app)
    for invalid_number in (
        "10e10000",
        "e+++eeeeeE-",
        "120.2.33",
        "12-.3",
        "-3.3.3",
        "0..0",
    ):
        for debounce in ("false", "true"):

            elem = dash_duo.find_element("#input_{}".format(debounce))
            assert not elem.get_attribute(
                "value"
            ), "input should have no initial value"

            # onblur
            elem.send_keys(invalid_number)
            elem.send_keys(Keys.TAB)

            dash_duo.wait_for_text_to_equal("#div_{}".format(debounce), "")

            # Enter keypress
            dash_duo.clear_input(elem)
            elem.send_keys(invalid_number)
            elem.send_keys(Keys.ENTER)

            dash_duo.wait_for_text_to_equal("#div_{}".format(debounce), "")

            dash_duo.clear_input(elem)


def test_inni002_invalid_numbers_ui(dash_duo, ninput_app):
    dash_duo.start_server(ninput_app)
    elem = dash_duo.find_element("#input_false")

    elem.send_keys("5e-325")  # smaller than Number.MIN_VALUE
    assert dash_duo.wait_for_text_to_equal("#div_false", "0")

    dash_duo.clear_input(elem)
    elem.send_keys("0.0.0")
    elem.send_keys(Keys.TAB)

    assert dash_duo.find_element("#div_false").text != "0.0"
    time.sleep(0.5)
    dash_duo.percy_snapshot("inni002 - input invalid number")


def test_inni003_invalid_numbers_range(dash_duo, input_range_app):
    dash_duo.start_server(input_range_app)  # range [10, 10000] step=3

    elem_range = dash_duo.find_element("#range")
    elem_range.send_keys("1999")
    assert dash_duo.find_element("#out").text == "1999"

    for invalid_number in ("0.0", "12", "10e10"):
        elem_range.send_keys(invalid_number)
        dash_duo.wait_for_text_to_equal(
            "#out", ""
        ), "invalid value should return none"
        dash_duo.clear_input(elem_range)

    elem_range.send_keys("-13")
    dash_duo.wait_for_text_to_equal(
        "#out", ""
    ), "invalid value should return none"

    time.sleep(0.5)
    dash_duo.percy_snapshot("inni003 - number out of range")


def test_inni010_valid_numbers(dash_duo, ninput_app):
    dash_duo.start_server(ninput_app)
    for num, op in (
        ("1.0", lambda x: int(float(x))),  # limitation of js/json
        ("10e10", lambda x: int(float(x))),
        ("-1.0001", float),
        (str(sys.float_info.max), float),
        (str(sys.float_info.min), float),
    ):
        elem = dash_duo.find_element("#input_false")
        elem.send_keys(num)
        assert dash_duo.wait_for_text_to_equal(
            "#div_false", str(op(num))
        ), "the valid number should be converted to expected form in callback"
        dash_duo.clear_input(elem)
