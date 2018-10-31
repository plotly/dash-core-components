import Input from '../../src/components/Input.react.js';
import React from 'react';
import {mount, render} from 'enzyme';

test('Input renders', () => {
    const input = render(<Input />);

    expect(input.html()).toBeDefined();
});

describe('Props can be set properly', () => {
    const defaultProps = {
        id: 'input-1',
        value: 'hello, dash',
        style: {backgroundColor: 'hotpink'},
        className: 'input-class',
        type: 'text',
        autoComplete: 'on',
        autoFocus: 'on',
        disabled: true,
        inputMode: 'verbatim',
        list: 'hello',
        max: '2',
        maxLength: '2',
        min: '1',
        minLength: '1',
        n_blur: 0,
        n_blur_timestamp: -1,
        n_submit: 0,
        n_submit_timestamp: -1,
    };
    const input = mount(<Input {...defaultProps} />);

    test('props are being set', () => {
        expect(input.props()).toBeDefined();
        expect(input.props()).toEqual(defaultProps);
    });

    test('props.id is set as the <input> id', () => {
        expect(input.props().id).toBeDefined();
        expect(input.props().id).toEqual(defaultProps.id);

        // test if id is in the actual HTML string
        expect(
            input
                .render()
                .children()
                .attr('id')
        ).toEqual(defaultProps.id);
    });
    test('props.value is set as the <input> value', () => {
        expect(input.props().value).toBeDefined();
        expect(input.props().value).toEqual(defaultProps.value);

        // test if id is in the actual HTML string
        expect(
            input
                .render()
                .children()
                .attr('value')
        ).toEqual(defaultProps.value);
    });
    test('props.className is set as the <input> CSS class', () => {
        expect(input.props().className).toBeDefined();
        expect(input.props().className).toEqual(defaultProps.className);

        // test if className is actually set on HTML output
        expect(
            input
                .render()
                .children()
                .attr('class')
        ).toEqual(defaultProps.className);
    });
});

test('Input does not change state if it rerenders', () => {
    const input = mount(<Input value="initial value" />);
    expect(input.find('input').getNode().value).toEqual('initial value');

    input.find('input').simulate('change', {target: {value: 'new value'}});

    expect(input.find('input').getNode().value).toEqual('new value');

    // dash-renderer could rerender a component with it's original
    // props, if dash-renderer is not informed of prop updates
    input.setProps({value: 'initial value'});

    expect(input.find('input').getNode().value).toEqual('new value');
});

test('Input will call setProps with value updates if provided', () => {
    const mockSetProps = jest.fn();

    const input = mount(
        <Input value="initial value" setProps={mockSetProps} />
    );

    expect(mockSetProps.mock.calls.length).toEqual(0);

    input.find('input').simulate('change', {target: {value: 'new value'}});

    expect(mockSetProps.mock.calls.length).toEqual(1);
    expect(mockSetProps.mock.calls[0][0]).toEqual({value: 'new value'});
});
