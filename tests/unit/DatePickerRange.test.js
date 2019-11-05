import DatePickerRange from '../../src/fragments/DatePickerRange.react';
import {merge} from 'ramda';
import React from 'react';
import {mount, render} from 'enzyme';

const defaultProps = {
    start_date_id: 'start-date-id',
    end_date_id: 'end-date-id',
    id: 'datepicker',
};

test('DatePickerRange renders', () => {
    const dps = render(<DatePickerRange {...defaultProps} />);

    expect(dps.html()).toBeDefined();
});

describe('Date can be set properly', () => {
    test('null date is not converted by moment', () => {
        const props = merge(defaultProps, {
            end_date: null,
            start_date: null,
        });

        const dps = mount(<DatePickerRange {...props} />);

        expect(dps.props()).toBeDefined();
        expect(dps.props().end_date).toEqual(props.end_date);
        expect(dps.props().start_date).toEqual(props.start_date);
    });

    test('valid date is not converted by moment', () => {
        const props = merge(defaultProps, {
            end_date: '2019-01-01',
            start_date: '2019-01-01',
        });

        const dps = mount(<DatePickerRange {...props} />);

        expect(dps.props()).toBeDefined();
        expect(dps.props().end_date).toEqual(props.end_date);
        expect(dps.props().start_date).toEqual(props.start_date);
    });
});
