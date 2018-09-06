import os
import dash
import unittest
import dash_core_components as dcc

from dash.development.component_loader import _get_metadata

terminal_types = {
    'string': 'hello world',
    'number': 42.7,
    'bool': True,
    'integer': 42,
    'object': {'hello': 'world'},
    'array': [1, 2, 3]
}


def get_possible_values(schema):
    type_object = schema.get('type', None)
    if type_object:
        type_name = type_object.get('name', None)
        if type_name in terminal_types:
            yield terminal_types[type_name]


class Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        path = os.path.join('dash_core_components', 'metadata.json')
        data = _get_metadata(path)
        component_props = {}
        # Iterate over each property name (which is a path to the component)
        for componentPath in data:
            componentData = data[componentPath]
            name = componentPath.split('/').pop().split('.')[0]
            component_props[name] = componentData['props']
        cls.component_props = component_props

    def test_initializations(self):
        div_children = []
        for component_name, props in self.component_props.items():
            component = getattr(dcc, component_name)
            for prop_name, schema in props.items():
                for possible_value in get_possible_values(schema):
                    div_children.append((component,
                                        {prop_name: possible_value,
                                         'id': 'hello'}))
        errors = 0
        for component, props in div_children:
            try:
                component(**props)
            except (TypeError,
                    dash.exceptions.InitialLayoutValidationError) as e:
                print(
                    "Error in component",
                    component.__name__, ":",
                    e
                )
                errors += 1
        self.assertFalse(errors,
                         "There were {} initialization errors.".format(errors))
