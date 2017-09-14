import R from 'ramda';
import React, {PropTypes} from 'react';

const STYLES = {
    border: '1px lightgrey solid'
};

function Tab(props) {
    return (
        <div style={{
            'display': 'inline-block',
            'borderLeft': STYLES.border,
            'borderRight': props.isLast ? STYLES.border : null,
            'borderTopLeftRadius': props.isFirst ? 2 : 0,
            'borderTopRightRadius': props.isLast ? 2 : 0,
            'borderTop': props.isSelected ? 'rgb(68, 126, 255) 2px solid' : STYLES.border,
            'position': 'relative',
            'paddingTop': 10,
            'paddingBottom': 10,
            'paddingLeft': 20,
            'paddingRight': 20,
            'cursor': 'pointer',
            'width': `calc(100% / ${props.nTabs})`,
            'boxSizing': 'border-box',
            'textAlign': 'center',
            'backgroundColor': props.isSelected ? 'white' : 'rgb(253, 253, 253)'
        }} onClick={props.onClick}>
            {props.label}

            {props.isSelected ? <div style={{
                'position': 'absolute',
                'display': 'block',
                'content': '',
                'bottom': '-1px',
                'height': '1px',
                'left': 0,
                'right': 0,
                'background-color': 'white'
            }}/> : null}
        </div>
    )
}

function Tabs(props) {
    return (
        <div style={{'borderBottom': STYLES.border, 'boxSizing': 'border-box'}}>
            {props.tabs.map((t, i) => {
                return Tab(R.merge(t, {
                    isLast: i === props.tabs.length  - 1,
                    isFirst: i === 0,
                    onClick: () => props.setProps({value: t.value}),
                    nTabs: props.tabs.length,
                    isSelected: t.value === props.value
                }));
            })}
        </div>
    );
}

Tabs.propTypes = {
    id: PropTypes.string,

    /**
     * An array of options
     */
    tabs: PropTypes.arrayOf(PropTypes.shape({
        /**
         * The checkbox's label
         */
        label: PropTypes.string,

        /**
         * The value of the checkbox. This value
         * corresponds to the items specified in the
         * `values` property.
         */
        value: PropTypes.string
    })),

    /**
     * The currently selected tab
     */
    value: PropTypes.string

}

export default Tabs;
