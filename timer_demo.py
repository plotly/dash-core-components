import dash
from dash.exceptions import PreventUpdate
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc
import datetime as dt

external_stylesheets = [dbc.themes.BOOTSTRAP]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)


def formatted(milliseconds):
    return str(dt.timedelta(milliseconds=int(milliseconds)))


def make_card(header, timer, code):
    return html.Div(
        [
            html.H2(
                header,
            ),
            html.Hr(),
            timer,
            code,
        ],
        className="m-2 pb-4",
    )


"""
===============================================================================
Introduction
"""

intro_text = dcc.Markdown(
    """

`dcc.Timer` is based on the `dcc.Interval` component.  It has all the functionality of `dcc.Interval` plus these new features:

 - Operate the timer in either `countdown` or `stopwatch` (count up) modes.
 - Specify custom messages to display at certain times.
 - Automatically convert milliseconds into human readable times.  For example, 1337000000ms can be display as:
  '15d 11h 23m 20s'  See other available formats in the `timer_format` prop.
 - Specify certain times to trigger a callback.  This makes it easy to start or stop jobs at a specified elapse time.
 - Improve load and performance times because updates can happen clientside.  This makes it unnecessary to fire a callback
   frequently (ie every interval) just to update a countdown/stopwatch message.

__The first 5 examples are `dcc.Timer` components with messages updated clientside.  No callbacks required!__
""",
    className="border p-4",
)

shuttle_intro_text = dcc.Markdown(
    """
    ### Space Shuttle Countdown app
    This app uses the `dcc.Timer` component to launch the space shuttle. It uses the `messages` property to define the
    messages that will display at the specified times. The `fire_times` property sets the
    time to trigger a callback to start the launch. Even though the timer runs for 50 seconds
    (`n_intervals = 50, interval=1000`), it only fires the callback one time (at liftoff) All the other
    messages are handled clientside by the component.
    ### Click "resume countdown" to launch!
    """,
    className="border p-4",
)


"""
===============================================================================
Countdown Timers
"""

countdown_repeating = html.H4(
    [
        "Updating in ",
        dcc.Timer(
            mode="countdown",
            duration=30000,
            timer_format="verbose",
            rerun=True,
            class_name="d-inline-block",
        ),
    ]
)

countdown_repeating_md = dcc.Markdown(
    """```
    html.H4(
        [
            "Updating in ",
            dcc.Timer(
                mode="countdown",
                duration=30000,
                timer_format="verbose",
                rerun=True,
                class_name="d-inline-block",
            ),
        ]
    )
    ```"""
)
countdown_repeating_card = make_card(
    "Countdown timer - repeats every 30 seconds",
    countdown_repeating,
    countdown_repeating_md,
)


# --------------------

countdown_target_time = html.H4(
    [
        "Event starts in ",
        dcc.Timer(
            mode="countdown",
            duration=100000000,
            timer_format="verbose",
            class_name="d-inline-block",
        ),
    ]
)
countdown_target_time_md = dcc.Markdown(
    """```
    html.H4(
        [
            "Event starts in ",
            dcc.Timer(
                mode="countdown",
                duration=100000000,
                timer_format="verbose",
                class_name="d-inline-block",
            ),
        ]
    )```"""
)

countdown_target_time_card = make_card(
    "Countdown timer - to target time",
    countdown_target_time,
    countdown_target_time_md,
)
# ----------------------------

countdown_target_time2 = html.H4(
    [
        "Hurry! Special offer ends in ",
        dbc.Badge(
            dcc.Timer(mode="countdown", duration=1000000, timer_format="default"),
            color="danger",
        ),
    ]
)
countdown_target_time_md2 = dcc.Markdown(
    """```
    html.H4(
        [
            "Hurry! Special offer ends in ",
            dbc.Badge(
                dcc.Timer(mode="countdown", duration=100000000, timer_format="default"),
                color="danger",
            ),
        ]
    )```"""
)

countdown_target_time_card2 = make_card(
    "Countdown timer - to target time",
    countdown_target_time2,
    countdown_target_time_md2,
)
# ----------------------------


"""
===============================================================================
Stopwatch
"""


stopwatch_repeating = html.H4(
    [
        "Loading data. This will take about 30 seconds.",
        html.Div(
            [
                "It has been ",
                dcc.Timer(
                    mode="stopwatch",
                    duration=30000,
                    timer_format="verbose",
                    rerun=True,
                    class_name="d-inline-block",
                ),
            ],
            className="text-info",
        ),
    ]
)
stopwatch_repeating_md = dcc.Markdown(
    """```
    html.H4(
        [
            "Loading data. This will take about 30 seconds.",
            html.Div(
                [
                    "It has been ",
                    dcc.Timer(
                        mode="stopwatch",
                        duration=30000,
                        timer_format="verbose",
                        rerun=True,
                        class_name="d-inline-block",
                    ),
                ], className='text-info'
            ),
        ]
    )```"""
)

stopwatch_repeating_card = make_card(
    "Stopwatch - repeats every 30 seconds ",
    stopwatch_repeating,
    stopwatch_repeating_md,
)
# ----------------------------


stopwatch_messages = html.H4(
    dcc.Timer(
        mode="stopwatch",
        duration=421000,
        messages={
            5000: "Task submitted! This will take around five minutes.",
            10000: "Task submitted! This will take around five minutes. It has been 10 seconds.",
            30000: "Task submitted! This will take around five minutes. It has been 30 seconds.",
            60000: "Task submitted! This will take around five minutes. It has been one minute.",
            120000: "Task submitted! This will take around five minutes. It has been two minutes.",
            180000: "Task submitted! This will take around five minutes. It has been three minutes.",
            240000: "Task submitted! This will take around five minutes. It has been four minutes.",
            300000: "Task submitted! It has been five minutes - it should be done momentarily!",
            330000: "Task submitted! This will take around five minutes. It has been five minutes and 30 seconds.\
                     It's taking a little longer than expected, hang tight!",
            360000: "Task submitted! This should have taken around five minutes. It has been six minutes.\
                     Something might've gone wrong. Reach out to eli@acme.corp.",
            420000: "Task submitted! This should have taken around five minutes. It is taking much longer \
                      than expected. Something might've gone wrong. Reach out to eli@acme.corp.",
        },
    ),
    className="mx-2 mt-4 p-3 border",
)
stopwatch_messages_md = dcc.Markdown(
    """```
    html.H4(
        dcc.Timer(
            mode="stopwatch",
            duration=421000,
            messages={
                1000: "Task submitted! This will take around five minutes.",
                10000: "Task submitted! This will take around five minutes. It has been 10 seconds.",
                30000: "Task submitted! This will take around five minutes. It has been 30 seconds.",
                60000: "Task submitted! This will take around five minutes. It has been one minute.",
                120000: "Task submitted! This will take around five minutes. It has been two minutes.",
                180000: "Task submitted! This will take around five minutes. It has been three minutes.",
                240000: "Task submitted! This will take around five minutes. It has been four minutes.",
                300000: "Task submitted! It has been five minutes - it should be done momentarily!",
                330000: "Task submitted! This will take around five minutes. It has been five minutes and 30 seconds. It's taking a little longer than expected, hang tight!",
                360000: "Task submitted! This should have taken around five minutes. It has been six minutes.  Something might've gone wrong. Reach out to eli@acme.corp.",
                420000: "Task submitted! This should have taken around five minutes. It is taking much longer than expected. Something might've gone wrong. Reach out to eli@acme.corp.",
            },
        ),
        className="mx-2 mt-4 p-3 border",
    )```"""
)

stopwatch_messages_card = make_card(
    "Stopwatch - with custom messages",
    stopwatch_messages,
    stopwatch_messages_md,
)


"""
===============================================================================
Space Shuttle
"""
shuttle = (
    "https://cdn.pixabay.com/photo/2012/11/28/10/33/rocket-launch-67641_960_720.jpg"
)

shuttle = html.Div(
    [
        dbc.Button(
            "resume countdown", id="start", size="lg", color="info", className="m-4"
        ),
        html.H1("Space Shuttle Endeavour Countdown"),
        html.H3(
            [
                dcc.Timer(
                    id="shuttle_countdown",
                    mode="countdown",
                    disabled=True,
                    duration=51000,
                    fire_times=[0],
                    messages={
                        50000: "(T-50 seconds) Orbiter transfers from ground to internal power",
                        31000: "(T-31 seconds) Ground Launch Sequencer is go for auto sequence start",
                        16000: "(T-16 seconds) Activate launch pad sound suppression system",
                        10000: "(T-10 seconds) Activate main engine hydrogen burnoff system",
                        6000: "(T-6 seconds) Main engine start",
                        5000: "",
                        0: "Solid Rocket Booster ignition and LIFTOFF!",
                    },
                ),
                dcc.Timer(
                    id="clock",
                    duration=51000,
                    mode="countdown",
                    timer_format="colons",
                    disabled=True,
                    class_name="border bg-dark text-white p-2",
                    style={"width": 100},
                ),
            ]
        ),
        dbc.Modal(
            dbc.ModalBody(html.Img(src=shuttle, style={"width": "100%"})),
            id="modal",
            is_open=False,
        ),
    ],
    className="m-2  p-4",
)

shuttle_md = dcc.Markdown(
    """```
    html.Div(
        [
            dbc.Button("start", id="start", size="lg", color="info", className="m-4"),
            html.H1("Space Shuttle Endeavour Countdown"),
            html.H3(
                [
                    dcc.Timer(
                        id="shuttle_countdown",
                        mode="countdown",
                        disabled=True,
                        duration=51000,
                        fire_times=[0],
                        messages={
                            50000: "(T-50 seconds) Orbiter transfers from ground to internal power",
                            31000: "(T-31 seconds) Ground Launch Sequencer is go for auto sequence start",
                            16000: "(T-16 seconds) Activate launch pad sound suppression system",
                            10000: "(T-10 seconds) Activate main engine hydrogen burnoff system",
                            6000: "(T-6 seconds) Main engine start",
                            5000: "",
                            0: "Solid Rocket Booster ignition and LIFTOFF!",
                        },
                    ),
                    dcc.Timer(
                        id="clock",
                        duration=51000,
                        timer_format="colons",
                        disabled=True,
                    ),
                ]
            ),
            dbc.Modal(
                dbc.ModalBody(html.Img(src=shuttle, style={"width": "100%"})),
                id="modal",
                is_open=False,
            ),
        ],
        className="mt-4 m-4 border p-4",
    )

@app.callback(
    Output("shuttle_countdown", "disabled"),
    Output("shuttle_countdown", "reset"),
    Output("clock", "disabled"),
    Output("clock, "reset"),
    Input("start", "n_clicks"),
)
def start(btn_clicks):
    if btn_clicks and btn_clicks >= 0:
        return False, True, False, True
    else:
        return dash.no_update


@app.callback(
    Output("modal", "is_open"), Input("shuttle_countdown", "at_fire_time"),
)
def blastoff(at_fire_time):
    return at_fire_time == 0

    ```"""
)

shuttle_card = make_card("", shuttle, shuttle_md)

"""
===============================================================================
Live Stage Progress
"""

stages_md = dcc.Markdown(
    """```
    dcc.Timer(
        id="stages_timer",
        fire_times=[2000, 6000, 12000, 18000],
        duration=20000,
        rerun=True,
        mode="stopwatch",
    ),
    dbc.ButtonGroup(
        [
            dbc.Button(
                "stage " + str(i),
                id="stage" + str(i),
                color="white",
                className="m-5 rounded-circle border",
            )
            for i in range(1, 5)
        ],
        size="lg",
    )


@app.callback(
    [Output("stage" + str(i), "color") for i in range(1, 5)],
    [Output("stage" + str(i), "children") for i in range(1, 5)],
    Input("stages_timer", "at_fire_time"),
)
def update_stages(at_fire_time):
    colors = {2000: "white", 6000: "white", 12000: "white", 18000: "white"}
    stage_colors = {2000: "primary", 6000: "success", 12000: "warning", 18000: "info"}
    stage_names = {
        2000: "Stage 1",
        6000: "Stage 2",
        12000: "Stage 3",
        18000: "   Stage 4",
    }

    if at_fire_time:
        colors[at_fire_time] = stage_colors[at_fire_time]
        stage_names[at_fire_time] = "On " + stage_names[at_fire_time]
    return list(colors.values()) + list(stage_names.values())
```"""
)


stages = html.Div(
    [
        dcc.Timer(
            id="stages_timer",
            fire_times=[2000, 6000, 12000, 18000],
            duration=20000,
            rerun=True,
            mode="stopwatch",
        ),
        dbc.ButtonGroup(
            [
                dbc.Button(
                    "stage " + str(i),
                    id="stage" + str(i),
                    color="white",
                    className="m-5 rounded-circle border",
                )
                for i in range(1, 5)
            ],
            size="lg",
        ),
    ],
)

stages_card = make_card("Callback triggered at `fire_times`", stages, stages_md)


"""
===============================================================================
Update at a time of day
"""

time_of_day_card = dbc.Card(
    [
        dbc.CardHeader(html.H3("Timer - Job update with time of day")),
        dbc.CardBody(
            [
                html.Div(
                    [
                        dbc.Button(
                            "start",
                            id="start_job",
                            size="lg",
                            color="info",
                            className="m-4",
                        ),
                        html.H3(id="job_started"),
                        html.H4(
                            id="next_update",
                            style={"display": "inline-block", "color": "#34558b "},
                        ),
                        html.H5(
                            [
                                "Next update in:",
                                #  style={"display": "inline-block", "color": "#34558b "}),
                                dcc.Timer(
                                    id="time_of_day_timer",
                                    disabled=True,
                                    fire_times=[0],
                                    mode="countdown",
                                    duration=900000,
                                    timer_format="verbose",
                                    rerun=True,
                                ),
                            ],
                            style={"display": "inline-block", "color": "#34558b "},
                        ),
                    ],
                    className="mx-3 mt-4 p-3 border",
                ),
            ],
        ),
    ],
    className="mt-4 m-4 border p-4",
)


"""
===============================================================================
Layout
"""
app.layout = dbc.Container(
    [
        html.H1("dcc.Timer() Demo", className="bg-primary text-white p-2"),
        dbc.Row(
            dbc.Col(
                [
                    intro_text,
                    countdown_repeating_card,
                    countdown_target_time_card,
                    countdown_target_time_card2,
                    stopwatch_repeating_card,
                    stopwatch_messages_card,
                    shuttle_intro_text,
                    shuttle_card,
                    stages_card,
                    time_of_day_card,
                ]
            )
        ),
    ],
    className="m-4",
)


"""
===============================================================================
Callbacks
"""


@app.callback(
    Output("shuttle_countdown", "disabled"),
    Output("shuttle_countdown", "reset"),
    Output("clock", "disabled"),
    Output("clock", "reset"),
    Input("start", "n_clicks"),
)
def start(btn_clicks):
    if btn_clicks and btn_clicks >= 0:
        return False, True, False, True
    else:
        return dash.no_update


@app.callback(
    Output("modal", "is_open"),
    Input("shuttle_countdown", "at_fire_time"),
)
def blastoff(at_fire_time):
    return at_fire_time == 0


@app.callback(
    [Output("stage" + str(i), "color") for i in range(1, 5)],
    [Output("stage" + str(i), "children") for i in range(1, 5)],
    Input("stages_timer", "at_fire_time"),
)
def update_stages(at_fire_time):
    colors = {2000: "white", 6000: "white", 12000: "white", 18000: "white"}
    stage_colors = {2000: "primary", 6000: "success", 12000: "warning", 18000: "info"}
    stage_names = {
        2000: "Stage 1",
        6000: "Stage 2",
        12000: "Stage 3",
        18000: "   Stage 4",
    }

    if at_fire_time:
        colors[at_fire_time] = stage_colors[at_fire_time]
        stage_names[at_fire_time] = "On " + stage_names[at_fire_time]
    return list(colors.values()) + list(stage_names.values())


@app.callback(
    Output("job_started", "children"),
    Output("time_of_day_timer", "disabled"),
    Input("start_job", "n_clicks"),
)
def time_of_day_job_starter(start_btn_clicks):
    if start_btn_clicks is None:
        raise PreventUpdate
    if start_btn_clicks > 1:
        raise PreventUpdate
    if start_btn_clicks == 1:
        start_time = dt.datetime.now().time().strftime("%I:%M %p")
        msg = "Job started at " + start_time + "  Updates every 15 minutes"
        pause = False

    return msg, pause


@app.callback(
    Output("next_update", "children"),
    Input("time_of_day_timer", "at_fire_time"),
    prevent_initial_call=True,
)
def update_time_of_day_job(at_fire_time):
    next_update = dt.datetime.now() + dt.timedelta(seconds=900)
    return "Next update at {}".format(next_update)


if __name__ == "__main__":
    app.run_server(debug=True)
