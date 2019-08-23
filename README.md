# Dash Core Components

This package provides the core React components suite for [Dash][].

[![CircleCI](https://circleci.com/gh/plotly/dash-core-components.svg?style=svg)](https://circleci.com/gh/plotly/dash-core-components)

## Development

The `dash` package contains some tools to build components and drive the bundles build process.
To avoid the circular dependency situation, we don't add `dash` as a required install in the `dash-core-components` setup. But, in order to development locally, you need to install `dash` before everything.

```bash
# it's recommended to install your python packages in a virtualenv
# python 2
$ pip install virtualenv --user && virtualenv venv && . venv/bin/activate
# python 3
$ python -m venv && . venv/bin/activate

# make sure dash is installed with dev and testing dependencies
$ pip install dash[dev,testing]  # in some shells you need \ to escape []

# run the build process with build
$ npm run build  # or `python scripts/build.py build`

# install dcc in editable mode
$ pip install -e .
```

### The local build process

Dash-core-components nows shares the same build process as in dash-renderer. The build
tool can be called by `npm run build` or `python scripts/build.py build`.  There are several sub commands in `build.py`, they are explained in [dash-renderer guide](https://github.com/plotly/dash/blob/dev/CONTRIBUTING.md#dash-renderer-beginner-guide).


### Demo server

You can start up a demo development server to see a demo of the rendered
components:

```sh
$ npm start
```

You have to maintain the list of components in `demo/Demo.react.js`.

### Linting and Testing

Note: the integration test needs an extra selenium setup, please refer to [install section](https://dash.plot.ly/testing)

You can run everything in one command by `npm run test`. There are also a list of test command available inside `scripts` property of `package.json` file.


### Testing your components in Dash

```bash
# 1. Run the build watcher by running
$ npm run build:watch

# 2. Run the dash layout you want to test
# Import dash_core_components to your layout, then run it:
$ python my_dash_layout.py

# 3. Uninstalling python package locally
$ npm run uninstall-local
```

## Publishing

There's an npm script that will handle publish, provided you have the right credentials. You can run it by running

```sh
$ npm run publish-all
```

See the [Publishing New Components/Features](CONTRIBUTING.md#publishing-new-componentsfeatures) section of the Contributing guide for step-by-step instructions on publishing new components.

## Dash Component Boilerplate

See the [dash-component-boilerplate](https://github.com/plotly/dash-component-boilerplate) repo for more information.

[Dash]: https://plot.ly/dash
[Dash Component Boilerplate]: (https://github.com/plotly/dash-component-boilerplate)
[NPM package authors]: https://www.npmjs.com/package/dash-core-components/access
[PyPi]: https://pypi.python.org/pypi
