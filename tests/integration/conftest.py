import json
import pytest


@pytest.fixture(scope="session")
def dcc_component():
    with open('./dash_core_components/metadata.json')
