from __future__ import print_function as _

import os as _os
import sys as _sys

import dash as _dash

from .version import __version__

if not hasattr(_dash, 'development'):
    print("Dash was not successfully imported. Make sure you don't have a file "
          "named \n'dash.py' in your current directory.", file=_sys.stderr)
    _sys.exit(1)

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_components = _dash.development.component_loader.load_components(
    _os.path.join(_current_path, 'metadata.json'),
    'dash_core_components'
)

_this_module = _sys.modules[__name__]

_js_dist = [
    {
        'external_url': 'https://cdn.plot.ly/plotly-1.35.2.min.js',
        'relative_package_path': 'plotly-1.35.2.min.js',
        'namespace': 'dash_core_components'
    },
    {
        'relative_package_path': 'bundle.js',
        'external_url': (
            'https://unpkg.com/dash-core-components@{}'
            '/dash_core_components/bundle.js'
        ).format(__version__),
        'namespace': 'dash_core_components'
    }
]

_css_dist = [
    {
        'relative_package_path': [
            'rc-slider@8.6.0.css',
            'react-select@1.2.1.min.css',
            'react-virtualized@9.18.5.css',
            'react-virtualized-select@3.1.3.css',
            'react-dates_datepicker@16.3.2.min.css'
        ],
        'external_url': [
            'https://unpkg.com/react-select@1.2.1/dist/react-select.min.css',
            'https://unpkg.com/react-virtualized@9.18.5/styles.css',
            'https://unpkg.com/react-virtualized-select@3.1.3/styles.css',
            'https://unpkg.com/rc-slider@8.6.0/assets/index.css',
            'https://unpkg.com/dash-core-components@{}/dash_core_components/'
            'react-dates_datepicker@16.3.2.min.css'.format(__version__)
        ],
        'namespace': 'dash_core_components'
    }
]


for component in _components:
    setattr(_this_module, component.__name__, component)
    setattr(component, '_js_dist', _js_dist)
    setattr(component, '_css_dist', _css_dist)
