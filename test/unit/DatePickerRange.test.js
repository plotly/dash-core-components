import DatePickerRange from '../../src/components/DatePickerRange.react';
import R from 'ramda';
import React from 'react';
import {mount, render} from 'enzyme';

test('DatePickerRange renders', () => {
    spyOn(console, 'error');

    const dps = render(<DatePickerRange />);

    expect(dps.html()).toBeDefined();
});

describe('Date can be set properly', () => {
    const defaultProps = {};

    test('null date is not converted by moment', () => {
        spyOn(console, 'error');

        const props = R.merge(defaultProps, {
            end_date: null,
            start_date: null,
        });

        const dps = mount(<DatePickerRange {...props} />);

        expect(dps.props()).toBeDefined();
        expect(dps.props().end_date).toEqual(props.end_date);
        expect(dps.state().end_date._isValid).toEqual(false);
        expect(dps.props().start_date).toEqual(props.start_date);
        expect(dps.state().start_date._isValid).toEqual(false);
    });

    test('valid date is not converted by moment', () => {
        const props = R.merge(defaultProps, {
            end_date: '2019-01-01',
            start_date: '2019-01-01',
        });

        const dps = mount(<DatePickerRange {...props} />);

        expect(dps.props()).toBeDefined();
        expect(dps.props().end_date).toEqual(props.end_date);
        expect(dps.state().end_date).not.toEqual(props.end_date);
        expect(dps.props().start_date).toEqual(props.start_date);
        expect(dps.state().start_date).not.toEqual(props.start_date);
    });
});
