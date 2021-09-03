from dash.dcc import *  # noqa: F401, F403, E402
from dash.dcc import __version__  # noqa: F401, F403, E402
import warnings

warnings.warn(
    """
The dash_core_components package is deprecated. Please replace
`import dash_core_components as dcc` with `from dash import dcc`""",
    stacklevel=2,
)
