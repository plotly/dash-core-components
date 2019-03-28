import json
import pytest


with open('./dash_core_components/metadata.json') as fp:
    def _extra_component_name(text):
        return text.split('/')[-1].split('.')[0]

    react_docgen = {
        _extra_component_name(k): v
        for k, v in json.load(fp).items()
    }

    dcc_components = list(react_docgen.keys())


@pytest.fixture(scope="session", params=dcc_components, ids=dcc_components)
def dcc_component(request):
    return (request.param, react_docgen.get(request.param))
