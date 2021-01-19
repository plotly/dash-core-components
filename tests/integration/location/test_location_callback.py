import pytest
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html

from dash.testing.wait import until


@pytest.mark.DCC774
def test_loca001_callbacks(dash_dcc):
    app = dash.Dash(__name__)
    app.layout = html.Div(
        [
            dcc.Location(id="location", refresh=False),
            html.A("Anchor Link 1", href="#div"),
            html.Div(id="div"),
        ]
    )

    @app.callback(Output("div", "children"), [Input("location", "pathname")])
    def update_path(path):
        return path

    dash_dcc.start_server(app)

    dash_dcc.wait_for_text_to_equal("#div", "/")


def test_loca002_location_link(dash_dcc):
    app = dash.Dash(__name__)

    app.layout = html.Div(
        [
            html.Div(id="waitfor"),
            dcc.Location(id="test-location", refresh=False),
            dcc.Link(
                html.Button("I am a clickable button"),
                id="test-link",
                href="/test/pathname",
            ),
            dcc.Link(
                html.Button("I am a clickable hash button"),
                id="test-link-hash",
                href="#test",
            ),
            dcc.Link(
                html.Button("I am a clickable search button"),
                id="test-link-search",
                href="?testQuery=testValue",
                refresh=False,
            ),
            html.Button("I am a magic button that updates pathname", id="test-button"),
            html.A("link to click", href="/test/pathname/a", id="test-a"),
            html.A("link to click", href="#test-hash", id="test-a-hash"),
            html.A("link to click", href="?queryA=valueA", id="test-a-query"),
            html.Div(id="test-pathname", children=[]),
            html.Div(id="test-hash", children=[]),
            html.Div(id="test-search", children=[]),
        ]
    )

    @app.callback(
        Output("test-pathname", "children"), Input("test-location", "pathname")
    )
    def update_test_pathname(pathname):
        return pathname

    @app.callback(Output("test-hash", "children"), Input("test-location", "hash"))
    def update_test_hash(hash_val):
        return hash_val or ""

    @app.callback(Output("test-search", "children"), Input("test-location", "search"))
    def update_test_search(search):
        return search or ""

    @app.callback(
        Output("test-location", "pathname"),
        Input("test-button", "n_clicks"),
        State("test-location", "pathname"),
    )
    def update_pathname(n_clicks, current_pathname):
        if n_clicks is not None:
            return "/new/pathname"

        return current_pathname

    dash_dcc.start_server(app)

    dash_dcc.wait_for_text_to_equal("#test-pathname", "/")
    dash_dcc.percy_snapshot("link -- location")

    # Check that link updates pathname
    dash_dcc.find_element("#test-link").click()
    until(
        lambda: dash_dcc.driver.current_url.replace("http://localhost:8050", "")
        == "/test/pathname",
        3,
    )
    dash_dcc.wait_for_text_to_equal("#test-pathname", "/test/pathname")

    # Check that hash is updated in the Location
    dash_dcc.find_element("#test-link-hash").click()
    dash_dcc.wait_for_text_to_equal("#test-pathname", "/test/pathname")
    dash_dcc.wait_for_text_to_equal("#test-hash", "#test")
    dash_dcc.percy_snapshot("link -- /test/pathname#test")

    # Check that search is updated in the Location
    # note that this goes through href and therefore wipes the hash
    dash_dcc.find_element("#test-link-search").click()
    dash_dcc.wait_for_text_to_equal("#test-search", "?testQuery=testValue")
    dash_dcc.wait_for_text_to_equal("#test-hash", "")
    dash_dcc.percy_snapshot("link -- /test/pathname?testQuery=testValue")

    # Check that pathname is updated through a Button click via props
    dash_dcc.find_element("#test-button").click()
    dash_dcc.wait_for_text_to_equal("#test-pathname", "/new/pathname")
    dash_dcc.wait_for_text_to_equal("#test-search", "?testQuery=testValue")
    dash_dcc.percy_snapshot("link -- /new/pathname?testQuery=testValue")

    # Check that pathname is updated through an a tag click via props
    dash_dcc.find_element("#test-a").click()

    dash_dcc.wait_for_text_to_equal("#test-pathname", "/test/pathname/a")
    dash_dcc.wait_for_text_to_equal("#test-search", "")
    dash_dcc.wait_for_text_to_equal("#test-hash", "")
    dash_dcc.percy_snapshot("link -- /test/pathname/a")

    # Check that hash is updated through an a tag click via props
    dash_dcc.find_element("#test-a-hash").click()
    dash_dcc.wait_for_text_to_equal("#test-pathname", "/test/pathname/a")
    dash_dcc.wait_for_text_to_equal("#test-search", "")
    dash_dcc.wait_for_text_to_equal("#test-hash", "#test-hash")
    dash_dcc.percy_snapshot("link -- /test/pathname/a#test-hash")

    # Check that hash is updated through an a tag click via props
    dash_dcc.find_element("#test-a-query").click()
    dash_dcc.wait_for_text_to_equal("#test-pathname", "/test/pathname/a")
    dash_dcc.wait_for_text_to_equal("#test-search", "?queryA=valueA")
    dash_dcc.wait_for_text_to_equal("#test-hash", "")
    dash_dcc.percy_snapshot("link -- /test/pathname/a?queryA=valueA")
