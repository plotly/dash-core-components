import R from 'ramda';
import React, {PropTypes} from 'react';

const STYLES = {
    border: '1px lightgrey solid'
};

function Tab(props) {
    let style = {
        'borderLeft': STYLES.border,

        'position': 'relative',
        'paddingTop': 10,
        'paddingBottom': 10,
        'cursor': props.isSelected ? 'default' : 'pointer',
        'boxSizing': 'border-box',
        'backgroundColor': props.isSelected ? 'white' : 'rgb(253, 253, 253)'
    };

    if (props.vertical) {
        style = R.merge(style, {
            'display': 'block',
            'borderTop': STYLES.border,
            'borderBottom': props.isLast ? STYLES.border : null,
            'borderLeft': props.isSelected ? 'rgb(68, 126, 255) 2px solid': STYLES.border,
            'textAlign': 'left',
            'paddingLeft': '5px'
        });
    } else {
        style = R.merge(style, {
            'display': 'inline-block',
            'borderRight': props.isLast ? STYLES.border : null,
            'borderTopLeftRadius': props.isFirst ? 2 : 0,
            'borderTopRightRadius': props.isLast ? 2 : 0,
            'borderTop': props.isSelected ? 'rgb(68, 126, 255) 2px solid' : STYLES.border,
            'width': `calc(100% / ${props.nTabs})`,
            'textAlign': 'center',
            'paddingLeft': 20,
            'paddingRight': 20
        });
    }

    return (
        <div style={style} onClick={props.onClick} key={props.value}>
            {props.label}

            {props.isSelected && !props.vertical ? <div style={{
                'position': 'absolute',
                'display': 'block',
                'content': '',
                'bottom': '-1px',
                'height': '1px',
                'left': 0,
                'right': 0,
                'background-color': 'white'
            }}/> : null}

            {props.isSelected && props.vertical ? <div style={{
                'position': 'absolute',
                'display': 'block',
                'content': '',
                'height': '100%',
                'width': '1px',
                'right': '-1px',
                'top': '0px',
                'background-color': 'white'
            }}/> : null}

        </div>
    )
}


function Tabs(props) {
    return (
        <div>
            <div style={R.merge({
                'borderBottom': props.vertical ? null : STYLES.border,
                'borderRight': props.vertical ? STYLES.border : null,
                'boxSizing': 'border-box'
            }, props.style)}>
                {props.tabs.map((t, i) => {
                    return Tab(R.merge(t, {
                        isLast: i === props.tabs.length  - 1,
                        isFirst: i === 0,
                        onClick: () => props.setProps({value: t.value}),
                        isSelected: t.value === props.value,
                        nTabs: props.tabs.length,
                        vertical: props.vertical
                    }));
                })}
            </div>
        </div>
    );
}


Tabs.propTypes = {
    id: PropTypes.string,

    /**
     * Style object to be merged in with the parent level tabs
     */
    style: PropTypes.object,

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
    value: PropTypes.string,

    /**
     * Whether or not the tabs are rendered vertically
     */
    vertical: PropTypes.bool
}

Tabs.defaultProps = {
    vertical: false
}

export default Tabs;
