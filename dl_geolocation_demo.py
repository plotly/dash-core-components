import dash_labs as dl
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import dash_table
import plotly.graph_objects as go
from geopy.geocoders import Nominatim
import pandas as pd
import datetime as dt
import dash_bootstrap_components as dbc

app = dash.Dash(
    __name__, prevent_initial_callbacks=True, plugins=[dl.plugins.FlexibleCallbacks()]
)
tpl = dl.templates.dbc.DbcSidebar(app,
    title="dcc.Geolocation demo", figure_template=True, theme=dbc.themes.SPACELAB
)

df = pd.DataFrame(
    {
        "lat": 0,
        "lon": 0,
        "alt": 0,
        "accuracy": 0,
        "altAccuracy": 0,
        "heading": 0,
        "speed": 0,
    },
    index=[0],
)

"""
==============================================================================
Markdown
"""
markdown_card = dbc.Card(
    [
        dbc.CardHeader(
            "Notes on Geolocation component and App settings",
            className="font-weight-bold",
        ),
        dcc.Markdown(
            """

- The __Update Now__ button sets the `update_now` prop to `True` in a callback.  This does a one-time update of the
position data.

- __Include Address__ This is a demo of how geopy can be used to to get an address based on the
  position data from `dcc.Geolocation`.  Sometimes it's slow. If the  timeout is  small,
   it's better not to select this option.

- __Enable High Accuracy__ This sets the `high_accuracy` prop.  If selected, if the device is able to provide a
more accurate position, it will do so. Note that this can result in slower response times or increased power
consumption (with a GPS on a mobile device for example). If `False` (the default value), the device can save resources
by responding more quickly and/or using less power.  Note: When selected, timeout should be set to a high number or a
max age should be provided as GPS sometimes takes longer to update.

- __Show errors as alert__ This sets the `show_alert` prop.  When `True` error messages will be displayed as an
`alert` in the browser.  When `False` you can provide your own custom error handling in the app.


- __Max Age__ The `maximum_age` prop will provide a cached location after specified number of milliseconds if no new
position data is available before the timeout.   If set to zero, it will not use a cached data.

- __Timeout__ The `timeout` prop is the number of milliseconds allowed for the position to update without
generating an error message.

-  The __dates and times__ show when the position data was obtained.  The date reflects the
 current system time from the computer running the browser.  The accuracy is dependant on this being set correctly
 in the user's  browser.

- __Zoom and Center__ is not a component prop.  In this demo app,  the map uses uirevision to hold the user
settings for pan, zoom etc, so those won't change when the position data is updated.

- __Follow me__  In this demo app, dcc.Interval is used to set the `update_now` prop to
True at the interval time specified.  To stop following, set the interval time to zero. The app will
 then disable `dcc.Interval`  in a callback so the position will no longer be updated.

        """
        ),
    ],
    className="mt-5",
)


"""
===============================================================================
Map and address
"""


def get_address(lat, lon, show_address):
    address = ""
    if show_address:
        geolocator = Nominatim(user_agent="my_location")
        try:
            location = geolocator.reverse(",".join([str(lat), str(lon)]))
            address = location.address
        except:  # noqa: E722
            address = "address unavailable"
    return address


def make_map(position, show_address, zoom=12):
    lat = position["lat"]
    lon = position["lon"]
    fig = go.Figure(
        go.Scattermapbox(
            lat=[lat],
            lon=[lon],
            mode="markers",
            marker=go.scattermapbox.Marker(size=14),
            text=[get_address(lat, lon, show_address)],
        )
    )
    fig.update_layout(
        hovermode="closest",
        mapbox=dict(
            style="open-street-map",
            center=go.layout.mapbox.Center(lat=lat, lon=lon),
            zoom=zoom,
        ),
        uirevision=zoom,
    )
    return dcc.Graph(figure=fig)


def make_position_card(pos, date, show_address):
    return html.Div(
        [
            html.H4("As of {} your location:".format(date)),
            html.P(
                "within {} meters of  lat,lon: ( {:.2f},  {:.2f})".format(
                    pos["accuracy"], pos["lat"], pos["lon"]
                )
            ),
            html.P(get_address(pos["lat"], pos["lon"], show_address)),
        ]
    )


"""
===============================================================================
Input components
"""


update_btn = dbc.Button(
    "Update Now", id="update_btn", className="m-2", color="secondary",
)
options_checklist = dbc.Checklist(
    id="options_checklist",
    options=[
        {"label": "Include Address", "value": "address"},
        {"label": "Enable High Accuracy", "value": "high_accuracy"},
        {"label": "Show errors as alert", "value": "alert"},
    ],
    className="mt-4",
)
max_age = dbc.Input(
    id="max_age",
    placeholder="milliseconds",
    type="number",
    debounce=True,
    value=0,
    min=0,
)

timeout_input = dbc.Input(
    id="timeout_input", type="number", debounce=True, value=10000, min=0,
)

zoom_center = dbc.Input(id="zoom", type="number", value=8, min=0, max=22, step=1)

follow_me_interval = dbc.Input(
    id="follow_me_interval", type="number", debounce=True, value=0, min=0, step=1000
)

geolocation = dcc.Geolocation(id="geolocation")
interval = dcc.Interval(id="interval", disabled=True)


"""
===============================================================================
Callbacks
"""


@app.callback(
    dl.Output(geolocation, ("high_accuracy", "maximum_age", "timeout", "show_alert"),),
    Input("options_checklist", "value"),
    Input("max_age", "value"),
    Input("timeout_input", "value"),
)
def update_options(checked, maxage, timeout):
    if checked:
        high_accuracy = True if "high_accuracy" in checked else False
        alert = True if "alert" in checked else False
    else:
        high_accuracy, alert = False, False
    return high_accuracy, maxage, timeout, alert


@app.callback(
    Output("geolocation", "update_now"),
    Input("update_btn", "n_clicks"),
    Input("interval", "n_intervals"),
    prevent_initial_call=True,
)
def update_now(_, __):
    return True


@app.callback(
    Output("interval", "interval"),
    Output("interval", "disabled"),
    Input("follow_me_interval", "value"),
)
def update_interval(time):
    disabled = True if time == 0 else False
    return time, disabled


@app.callback(
    dl.Output(html.Div(), "children"),
    dl.Output(html.Div(), "children"),
    dl.Input(options_checklist, label=""),
    dl.Input(zoom_center, label="Zoom and Center"),
    dl.Input(
        geolocation, ("local_date", "timestamp", "position", "position_error"), label=""
    ),
    prevent_initial_call=True,
    template=tpl,
)
def display_output(checklist, zoom, location_data):
    date, timestamp, pos, err = location_data
    print(pos)
    if err:
        return "Error {} : {}".format(err["code"], err["message"]), dash.no_update

    # update  message
    show_address = True if checklist and "address" in checklist else False
    position = (
        make_position_card(pos, date, show_address)
        if pos
        else "No position data available"
    )

    # update map
    graph_map = make_map(pos, show_address, zoom) if pos else {}

    # update position data and error messages
    dff = pd.DataFrame(pos, index=[0])
    position_table = dash_table.DataTable(
        columns=[{"name": i, "id": i} for i in dff.columns], data=dff.to_dict("records")
    )

    # display iso dates
    timestamp = timestamp if timestamp else 0
    datetime_local = dt.datetime.fromtimestamp(int(timestamp / 1000))
    datetime_utc = dt.datetime.utcfromtimestamp(int(timestamp / 1000))
    iso_date = "UTC datetime: {}      Local datetime: {}".format(
        datetime_utc, datetime_local
    )

    return None, [position, graph_map, position_table, iso_date, markdown_card]


tpl.add_component(update_btn, location="sidebar", before=0)
tpl.add_component(max_age, location="sidebar", after=1, label="Max Age (ms)")
tpl.add_component(timeout_input, location="sidebar", after=1, label="Timeout (ms)")
tpl.add_component(
    follow_me_interval, location="sidebar", after=4, label="Follow me (update interval ms)"
)
tpl.add_component(interval, label="", location="main")

app.layout = dbc.Container(fluid=True, children=tpl.children)


if __name__ == "__main__":
    app.run_server(debug=True)
