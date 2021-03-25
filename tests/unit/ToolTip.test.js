import ToolTip from '../../src/components/ToolTip.react.js';
import React from 'react';
import {mount, render} from 'enzyme';
import DashRendererMock from './mocks/DashRendererMock.react.js';

test('ToolTip render', () => {
    const tabs = render(
        <DashRendererMock>
            <ToolTip>content</ToolTip>
        </DashRendererMock>
    );

    expect(tabs.html()).toBeDefined();
});

describe('All props can be set properly', () => {
    const defaultProps = {
        id: 'test-tooltip',
        colors: {
            border: 'red',
            background: 'blue',
        },
    };
    const app = mount(
        <DashRendererMock>
            <ToolTip {...defaultProps}/>
        </DashRendererMock>
    );
    test('props.id =>', () => {
        expect(app.find(ToolTip).props().id).toEqual(defaultProps.id);
    });
    test('props.colors=>', () => {
        expect(app.find(ToolTip).props().colors).toEqual(defaultProps.colors);
    });
});
