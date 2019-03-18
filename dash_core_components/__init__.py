"""This package provides the core React component suite for Dash."""

from __future__ import print_function as _

import os as _os
import sys as _sys

from .version import __version__

from ._imports_ import *
from ._imports_ import __all__


_current_path = _os.path.dirname(_os.path.abspath(__file__))


_this_module = _sys.modules[__name__]


_js_dist = [
    {
        'external_url': 'https://cdn.plot.ly/plotly-1.45.0.min.js',
        'relative_package_path': 'plotly-1.45.0.min.js',
        'namespace': 'dash_core_components'
    },
    {
        'relative_package_path': '{}.min.js'.format(__name__),
        'dev_package_path': '{}.dev.js'.format(__name__),
        'external_url': (
            'https://unpkg.com/dash-core-components@{}'
            '/dash_core_components/dash_core_components.min.js'
        ).format(__version__),
        'namespace': 'dash_core_components'
    },
    {
        'relative_package_path': '{}.min.js.map'.format(__name__),
        'dev_package_path': '{}.dev.js.map'.format(__name__),
        'external_url': (
            'https://unpkg.com/dash-core-components@{}'
            '/dash_core_components/dash_core_components.min.js.map'
        ).format(__version__),
        'namespace': 'dash_core_components',
        'dynamic': True
    }
]

for _component in __all__:
    setattr(locals()[_component], '_js_dist', _js_dist)
