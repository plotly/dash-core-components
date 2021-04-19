import moment from 'moment';
import {has} from 'ramda';

/**
 * Set locale globally based on `language` parameter.
 * Pass `language` parameter `auto` to use the browser's default language.
 * See https://momentjs.com/docs/#/i18n/ for details.
 *
 * @param {string} language
 */
export const setLocaleGlobally = (language) => {
    if (language === "auto") {
        language = window.navigator.language || 'en';
    }
    moment.locale(language);
};

export default (newProps, momentProps) => {
    const dest = {};

    momentProps.forEach(key => {
        const value = newProps[key];

        if (value === null || value === undefined) {
            dest[key] = null;

            if (key === 'initial_visible_month') {
                dest[key] = moment(
                    newProps.start_date ||
                        newProps.min_date_allowed ||
                        newProps.end_date ||
                        newProps.max_date_allowed ||
                        undefined
                );
            }
        } else {
            dest[key] = moment(value);

            if (key === 'max_date_allowed' && has(key, dest)) {
                dest[key].add(1, 'days');
            }
        }
    });

    return dest;
};
