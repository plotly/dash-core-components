import pytest
import dash_core_components as dcc


def get_required_fields(metadata):
    return (
        prop for prop, meta in metadata['props'].items()
        if meta['required']
    )


def contains_required_fields(metadata):
    return bool(set(get_required_fields(metadata)))


def test_required_field_get_exception_raised(dcc_component):
    cname, metadata = dcc_component

    if contains_required_fields(metadata):
        with pytest.raises(TypeError):
            getattr(dcc, cname)()


def test_create_component_without_args(dcc_component):
    cname, metadata = dcc_component

    if not contains_required_fields(metadata):
        comp = getattr(dcc, cname)()
        assert set(metadata['props'].keys()).difference(
            set(comp.available_properties)) == {'setProps', }


def test_component_to_plotly_json(dcc_component):
    cname, _ = dcc_component
    comp = getattr(dcc, cname)()
    assert set(comp.to_plotly_json().keys()) == {'props', 'type', 'namespace'}
