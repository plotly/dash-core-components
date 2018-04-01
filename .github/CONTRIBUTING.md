## Running the Tests

In order to run the tests, you first need to have built the JavaScript
`dash_core_components` library. You will need to build the library again if
you've pulled from upstream otherwise you may be running with an out of date
`bundle.js`. See the instructions for building `bundle.js` in the "Testing
Locally" section of README.md.

You also need to set the environment variable `TOX_PYTHON_27` and with the
location of the Python 2 installations you want tox to use for creating the
virtualenv that will be used to run the tests. Note that this means you do not
need to install any dependencies into the installation yourself.

If you're using pyenv to manage Python installations, you would do something
like this:

```
export TOX_PYTHON_27=~/.pyenv/versions/2.7.14/bin/python
```

## Making a pull request
In order to update the PyPI and npm packages correctly, the following pieces need to be in sync:

- `dash_core_components/version.py` should updated to, e.g., `__version__ = '1.0.0'` if the version should be bumped to `v1.0.0`
- `package.json` has been versioned using `npm version <major | minor | patch>`. See the [npm docs](https://docs.npmjs.com/cli/version) for more on versioning
- `CHANGELOG.md` has a detailed new entry for the new version or changes to the code
- `MANIFEST.in` has been updated if non-Python files were updated in `dash_core_components/` (note that this is much rarer, typically for changes involving included css or js)
