import os
import dash
import unittest
import uuid
import pprint
import dash_html_components as html
import dash_core_components as dcc

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

from dash.development.component_loader import _get_metadata
from .IntegrationTests import IntegrationTests

terminal_types = {
    'string': 'hello world',
    'number': 42.7,
    'bool': True,
    'integer': 42,
    'object': {'hello': 'world'},
    'array': [1, 2, 3]
}


def get_components():
    path = os.path.join('dash_core_components', 'metadata.json')
    data = _get_metadata(path)
    components = {}
    # Iterate over each property name (which is a path to the component)
    for componentPath in data:
        componentData = data[componentPath]
        name = componentPath.split('/').pop().split('.')[0]
        if name not in [
            'Checklist',
            'ConfirmDialog',
            'ConfirmDialogProvider',
            'Interval',
            'Graph',
            'Location',
            'Tab',
            'Tabs',
            'RangeSlider',
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
        for prop_name, schema in props.items():
            if prop_name != 'dashEvents':
                type_object = schema.get('type', None)
                for possible_value in get_possible_values(type_object):
                    all_props.append(
                        (
                            component,
                            {
                                prop_name: possible_value,
                                'id': '{}-{}-{}'.format(
                                    component_name,
                                    prop_name,
                                    uuid.uuid4()
                                )
                            }
                        )
                    )
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
        for c, p in components_with_props:
            button_id = "{}-button".format(p['id'])
            children.append(c(**p))
            children.append(html.Button('Callback {}'.format(p['id']),
                                        id=button_id))
            button_ids.append(button_id)
            p_keys = list(p.keys())
            p_keys.remove('id')
            if p_keys:
                other_key = p_keys[0]
                props_to_add.append((
                    p['id'],
                    button_id,
                    other_key,
                    p[other_key]
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
