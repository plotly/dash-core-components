import moment from 'moment';
import R from 'ramda';

export default (newProps, momentProps) => {
    const dest = {};

    momentProps.forEach(key => {
        const value = newProps[key];

        switch (R.type(value)) {
            case 'Null':
                dest[key] = value;
                break;
            case 'Undefined':
                break;
            default:
                dest[key] = moment(value);
                if (key === 'max_date_allowed' && R.has(key, dest)) {
                    dest[key].add(1, 'days');
                }
                break;
        }
    });

    return dest;
};
