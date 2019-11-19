import {merge, memoizeWith, identity, contains} from 'ramda';

export default (vertical, verticalHeight, tooltip) => {
    return memoizeWith(identity, (vertical, verticalHeight, tooltip) => {
        let style = {
            padding: '25px',
        };

        if (
            !vertical &&
            (!tooltip ||
                !tooltip.always_visible ||
                !contains(tooltip.placement, ['top', 'topLeft', 'topRight']))
        ) {
            style = merge(style, {paddingTop: '0px'});
        }

        if (
            vertical &&
            (!tooltip ||
                !tooltip.always_visible ||
                !contains(tooltip.placement, [
                    'left',
                    'topRight',
                    'bottomRight',
                ]))
        ) {
            style = merge(style, {paddingLeft: '0px'});
        }

        if (vertical) {
            style = merge(style, {height: verticalHeight + 'px'});
        }

        return style;
    });
};
