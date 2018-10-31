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

describe('Input without setProps() defined', () => {
    let input;
    beforeEach(() => {
        input = mount(<Input value="initial value" />);
    });
    test('Input updates value', () => {
        expect(input.find('input').getNode().value).toEqual('initial value');

        input.find('input').simulate('change', {target: {value: 'new value'}});

        expect(input.find('input').getNode().value).toEqual('new value');
    });
    test('Input does not change state if it rerenders', () => {
        // dash-renderer could rerender a component with it's original
        // props, if dash-renderer is not aware of prop changes (that happen with setState
        // instead of setProps)
        input.setProps({value: 'new value'});

        // expect value prop to not be updated on state, and on the node itself
        expect(input.state().value).toEqual('initial value');
        expect(input.find('input').getNode().value).toEqual('initial value');
    });
});

describe('Input with setProps() defined', () => {
    let mockSetProps, input;
    beforeEach(() => {
        mockSetProps = jest.fn();

        input = mount(<Input value="initial value" setProps={mockSetProps} />);
    });

    test('Input will call setProps with value updates if provided', () => {
        input.find('input').simulate('change', {target: {value: 'new value'}});

        expect(mockSetProps.mock.calls.length).toEqual(1);
        expect(mockSetProps.mock.calls[0][0]).toEqual({value: 'new value'});
    });

    test("Input updates it's value on recieving new props", () => {
        input.setProps({value: 'new value'});

        // expect value prop to not be updated on state, and on the node itself
        expect(input.find('input').getNode().value).toEqual('new value');
    });
});
