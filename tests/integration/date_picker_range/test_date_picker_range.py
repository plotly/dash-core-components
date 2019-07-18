import pytest
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import datetime


def test_dtpk001_updatemodes(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div([
        dcc.DatePickerRange(
            id='date-picker-range',
            start_date_id='startDate',
            end_date_id='endDate',
            start_date_placeholder_text='Select a start date!',
            end_date_placeholder_text='Select an end date!',
            updatemode='bothdates'
        ),
        html.Div(id='date-picker-range-output')
    ])

    @app.callback(
        Output('date-picker-range-output', 'children'),
        [Input('date-picker-range', 'start_date'),
         Input('date-picker-range', 'end_date')])
    def update_output(start, end):
        return '{} - {}'.format(start, end)

    dash_duo.start_server(app)

    start_date = dash_duo.wait_for_element_by_css_selector('#startDate')
    start_date.click()

    end_date = dash_duo.wait_for_element_by_css_selector('#endDate')
    end_date.click()

    dash_duo.wait_for_text_to_equal('#date-picker-range-output', 'None - None')

    # # # using mouse click with fixed day range
    start_date.click()
    dash_duo.driver.find_element_by_xpath("//td[text()='1' and @tabindex='0']").click()
    dash_duo.wait_for_text_to_equal('#date-picker-range-output', 'None - None')
    dash_duo.driver.find_elements_by_xpath("//td[text()='28']")[1].click()

    year = datetime.date.today().strftime("%Y")
    month = datetime.date.today().strftime("%m")

    dash_duo.wait_for_text_to_equal('#date-picker-range-output', f'{year}-{month}-01 - {year}-{month}-28')
    dash_duo.percy_snapshot("dtpk001-layout")
