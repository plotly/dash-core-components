"""This package provides the core React component suite for Dash."""

from __future__ import print_function as _

import os as _os
import sys as _sys
import dash as _dash
from .version import __version__
NPM_VERSION = '0.39.0-rc4'


# Module imports trigger a dash.development import, need to check this first
if not hasattr(_dash, 'development'):
    print("Dash was not successfully imported. Make sure you don't have a file "
          "named \n'dash.py' in your current directory.", file=_sys.stderr)
    _sys.exit(1)

# Must update to dash>=0.23.1 to use this version of dash-core-components
if not hasattr(_dash.development.base_component, '_explicitize_args'):
    print("Please update the `dash` module to >= 0.23.1 to use this "
          "version of dash_core_components.\n"
          "You are using version {:s}".format(_dash.version.__version__),
          file=_sys.stderr)
    _sys.exit(1)


from ._imports_ import *
from ._imports_ import __all__


_current_path = _os.path.dirname(_os.path.abspath(__file__))


_this_module = _sys.modules[__name__]


_js_dist = [
    {
        'external_url': 'https://18863-45646037-gh.circle-artifacts.com/0/plotly.min.js',
        'relative_package_path': 'plotly-18863-45646037.js',
        'namespace': 'dash_core_components'
    },
    {
        'relative_package_path': '{}.min.js'.format(__name__),
        'dev_package_path': '{}.dev.js'.format(__name__),
        'external_url': (
            'https://unpkg.com/dash-core-components@{}'
            '/dash_core_components/dash_core_components.min.js'
        ).format(NPM_VERSION),
        'namespace': 'dash_core_components'
    }
]

for _component in __all__:
    setattr(locals()[_component], '_js_dist', _js_dist)
