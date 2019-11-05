import DatePickerSingle from '../../src/fragments/DatePickerSingle.react';
import {merge} from 'ramda';
import React from 'react';
import {mount, render} from 'enzyme';

test('DatePickerSingle renders', () => {
    const dps = render(<DatePickerSingle />);

    expect(dps.html()).toBeDefined();
});

describe('Date can be set properly', () => {
    const defaultProps = {
        id: 'datepicker',
    };

    test('null date is not converted by moment', () => {
        const props = merge(defaultProps, {
            date: null,
        });

        const dps = mount(<DatePickerSingle {...props} />);

        expect(dps.props()).toBeDefined();
        expect(dps.props().date).toEqual(props.date);
    });

    test('valid date is not converted by moment', () => {
        const props = merge(defaultProps, {
            date: '2019-01-01',
        });

        const dps = mount(<DatePickerSingle {...props} />);

        expect(dps.props()).toBeDefined();
        expect(dps.props().date).toEqual(props.date);
    });
});

describe('Date can be selected', () => {
    test('`setProps` callback is called when date is selected', () => {
        const setPropsSpy = jest.fn();
        const props = {
            id: 'datepicker',
            date: '2019-01-01',
            placeholder: 'My Date',
            setProps: setPropsSpy,
        };

        const dps = mount(<DatePickerSingle {...props} />);
        dps.setState({focused: true});
        const day = dps.find("[aria-label='Saturday, January 19, 2019']");
        day.simulate('click');

        expect(setPropsSpy).toHaveBeenCalledWith({date: '2019-01-19'});
    });
});

describe('Date can be cleared', () => {
    test('`setProps` callback is called when date is cleared', () => {
        const setPropsSpy = jest.fn();
        const props = {
            id: 'datepicker',
            date: '2019-01-01',
            clearable: true,
            setProps: setPropsSpy,
        };

        const dps = mount(<DatePickerSingle {...props} />);
        const clearDate = dps.find("[aria-label='Clear Date']");
        clearDate.simulate('click');

        expect(setPropsSpy).toHaveBeenCalledWith({date: null});
    });
});
