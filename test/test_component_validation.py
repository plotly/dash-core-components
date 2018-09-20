import os
import dash
import unittest
import uuid
import dash_html_components as html
import dash_core_components as dcc

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

from dash.development.component_loader import _get_metadata
from .IntegrationTests import IntegrationTests

# All types which are just a scalar value
terminal_types = {
    'string': 'hello world',
    'number': 42,
    'bool': True,
    'object': {'hello': 'world'},
    'array': [1, 2, 3],
    'node': html.Div("Hello World")
}


def get_components():
    # Load metadata.json
    path = os.path.join('dash_core_components', 'metadata.json')
    data = _get_metadata(path)

    # Holds component names with corresponding props metadata.
    components = {}
    # Iterate over each property name (which is a path to the component)
    for componentPath in data:
        componentData = data[componentPath]
        name = componentPath.split('/').pop().split('.')[0]
        if name not in [
            'ConfirmDialog',
            'ConfirmDialogProvider',
            'Location',
            'Slider'
        ]:
            components[name] = componentData['props']
    return components


def get_possible_values(type_object):
    if type_object:
        type_name = type_object.get('name', None)
        if type_name in terminal_types:
            yield terminal_types[type_name]
        elif type_name == "any":
            for x in ['bool',
                      'number',
                      'integer',
                      'string',
                      'object',
                      'array']:
                yield terminal_types[x]
        elif type_name == "objectOf":
            for x in get_possible_values(type_object['value']):
                yield {'test_key': x}
        elif type_name == "arrayOf":
            for x in get_possible_values(type_object['value']):
                yield [x, x]
        elif type_name == "union":
            for v in type_object['value']:
                for x in get_possible_values(v):
                    yield x
        elif type_name == "enum":
            for v in type_object['value']:
                if v['value'] == 'null':
                    yield None
                else:
                    yield v['value'].strip("\"'")


def generate_all_components_with_props(component_props):
    all_props = []
    for component_name, props in component_props.items():
        component = getattr(dcc, component_name)
        required_props = {}
        for prop_name, schema in props.items():
            type_object = schema.get('type', None)
            required = schema.get('required', False)
            if type_object and required:
                required_props[prop_name] =\
                    next(get_possible_values(type_object))
        for prop_name, schema in props.items():
            if prop_name not in ['dashEvents', 'fireEvent']:
                type_object = schema.get('type', None)
                required = schema.get('required', False)
                for possible_value in get_possible_values(type_object):
                    prop_dict = required_props.copy()
                    prop_dict.update({
                        prop_name: possible_value,
                        'id': '{}-{}-{}'.format(
                            component_name,
                            prop_name,
                            uuid.uuid4()
                        )
                    })
                    all_props.append((component, prop_dict))
    return all_props


class InitializationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.components = get_components()

    def test_initializations(self):
        components_with_props =\
             generate_all_components_with_props(self.components)
        errors = 0
        for component, props in components_with_props:
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


class CallbackTests(IntegrationTests):
    @classmethod
    def setUpClass(cls):
        super(CallbackTests, cls).setUpClass()
        cls.components = get_components()

    def test(self):
        components_with_props =\
             generate_all_components_with_props(self.components)
        app = dash.Dash(__name__)
        app.config['suppress_callback_exceptions'] = True

        PAGE_SIZE = 5

        children = []
        button_ids = []
        props_to_add = []
        for component, props in components_with_props:
            button_id = "{}-button".format(props['id'])
            children.append(component(**props))
            children.append(html.Button('Callback {}'.format(props['id']),
                                        id=button_id))
            button_ids.append(button_id)
            prop_name = props['id'].split('-')[1]
            if prop_name in props:
                props_to_add.append((
                    props['id'],
                    button_id,
                    prop_name,
                    props[prop_name]
                ))
        app.layout = html.Div(children=[
            html.Div(id='container'),
            html.Button(id='next-page', children='next page'),
            dcc.Link()
        ])

        @app.callback(
            dash.dependencies.Output('container', 'children'),
            [dash.dependencies.Input('next-page', 'n_clicks')]
        )
        def next_page(n_clicks):
            if n_clicks is None:
                n_clicks = 0
            left_bound = n_clicks * PAGE_SIZE * 2
            right_bound = (n_clicks + 1) * PAGE_SIZE * 2
            return children[left_bound: right_bound]

        prop_map = {p[0]: p[3] for p in props_to_add}
        for id, button_id, prop, _ in props_to_add:

            @app.callback(
                dash.dependencies.Output(id, prop),
                [dash.dependencies.Input(button_id, 'n_clicks')],
                [dash.dependencies.State(id, 'id')]
            )
            def update_prop(n_clicks, my_id):
                print("Updating {} with {}".format(my_id, prop_map[my_id]))
                if n_clicks:
                    return prop_map[my_id]
                return prop_map[my_id]
        self.startServer(app)

        click_cycle = 0
        for button_id in button_ids:
            if click_cycle == PAGE_SIZE:
                button = WebDriverWait(self.driver, 20).until(
                    EC.presence_of_element_located((By.ID, 'next-page'))
                )
                button.click()
                click_cycle = 0
            click_cycle += 1
            button = WebDriverWait(self.driver, 20).until(
                EC.presence_of_element_located((By.ID, button_id))
            )
            button.click()
