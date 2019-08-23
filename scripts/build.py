# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os
import fire
from dash.development.build_process import BuildProcess


class DCC(BuildProcess):
    def __init__(self):
        super(DCC, self).__init__(
            self._concat(os.path.dirname(__file__), os.pardir),
            (("plotly.js-dist", None, "plotly.js", "plotly-{}.min.js"),),
        )
        self.asset_paths = self.asset_paths + (
            self._concat(self.main, "R"),
            self._concat(self.main, "inst"),
        )


if __name__ == "__main__":
    fire.Fire(DCC)
