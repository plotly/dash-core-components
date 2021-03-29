import {memoizeWith, identity, contains} from 'ramda';

export default () => {
    return memoizeWith(identity, (vertical, verticalHeight, tooltip) => {
        const style = {
            padding: '25px',
            display: 'flex',
        };

        if (vertical) {
            style.height = verticalHeight + 'px';
            style.flexDirection = "column";

            if (
                !tooltip ||
                !tooltip.always_visible ||
                !contains(tooltip.placement, [
                    'left',
                    'topRight',
                    'bottomRight',
                ])
            ) {
                style.paddingLeft = '0px';
            }
        } else {
            if (
                !tooltip ||
                !tooltip.always_visible ||
                !contains(tooltip.placement, ['top', 'topLeft', 'topRight'])
            ) {
                style.paddingTop = '0px';
            }
            style.alignItems = 'center';
        }

        return style;
    });
};
