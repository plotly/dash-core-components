import sys
from selenium.webdriver.common.keys import Keys


def test_inni001_invalid_numbers(ninput_app, dash_duo):
    dash_duo.start_server(ninput_app)
    for invalid_number in (
        "10e10000",
        "e+++eeeeeE-",
        "120.2.33",
        "12-.3",
        "-122.33-",
        "-3.3.3",
        "0..0",
    ):
        for debounce in ("false", "true"):

            elem = dash_duo.find_element("#input_{}".format(debounce))
            assert not elem.get_attribute("value")

            elem.send_keys(invalid_number)
            elem.send_keys(Keys.TAB)  # onblur

            assert dash_duo.wait_for_text_to_equal(
                "#div_{}".format(debounce), ""
            ), "callback should return None if invalid"

            dash_duo.clear_input(elem)
            elem.send_keys("0.0")
            if not debounce:
                assert dash_duo.wait_for_text_to_equal(
                    "#div_{}".format(debounce), "0"  # limitation of js/json
                ), "debounce False input should have converted number form"

            dash_duo.clear_input(elem)

            elem.send_keys(invalid_number)
            elem.send_keys(Keys.ENTER)  # Enter key press

            assert dash_duo.wait_for_text_to_equal(
                "#div_{}".format(debounce), ""
            ), "callback should return None if invalid"


def test_inni010_valid_numbers(dash_duo, ninput_app):
    dash_duo.start_server(ninput_app)
    for num, op in (
        # limitation of js/json
        ("1.0", lambda x: int(float(x))),
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
