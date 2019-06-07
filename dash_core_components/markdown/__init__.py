from .Markdown import Markdown

from .. import _js_dist
from .. import _css_dist

_js_dist.append(
    {
        'relative_package_path': 'highlight.pack.js',
        'namespace': 'dash_core_components'
    }
)

_css_dist.append(
    {
        'relative_package_path': 'highlight.css',
        'namespace': 'dash_core_components'
    }
)
