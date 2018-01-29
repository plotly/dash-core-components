/* global window:true */

import React, {Component, PropTypes} from 'react';

/**
 * A generalised component for showing information in an info card with variable visibility
 */
export default class Card extends Component {

    constructor(props) {
        super(props);

        this.shadows = [
            'none',
            '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
        ]
    }

    getShadow() {
        let elevation = this.props.elevation;
        if (elevation < 0 || elevation >= this.shadows.length)
            elevation = 0;
        let shadow = this.shadows[elevation];
        return {
            'box-shadow': shadow,
            '-moz-box-shadow': shadow,
            '-webkit-box-shadow': shadow
        };
    }

    computeStyles() {
        let baseStyles = {
            'opacity': this.props.visible ? 1 : 0,
            'pointer-events': this.props.visible ? 'auto' : 'none',
            'background': '#fff',
            'color': '#333',
            'padding': '10px'
        };
        baseStyles = this.merge(baseStyles, this.getShadow());
        if (this.props.transition) {
            baseStyles = this.merge(baseStyles, {
                '-webkit-transition': 'all 300ms',
                'transition': 'all 300ms'
            });
        }
        return this.merge(baseStyles, this.props.style || {});
    }

    merge(a, b) {
        for (let key in b) {
            a[key] = b[key];
        }
        return a;
    }

    render() {
        const {className, id} = this.props;

        let style = this.computeStyles();

        return (
            <div id={id}
                 className={className}
                 style={style}
            >
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {

    'className': PropTypes.string,

    'style': PropTypes.object,

    'id': PropTypes.string,

    /**
     * Is the card visible?
     */
    'visible': PropTypes.bool,

    /**
     * Used for shadow styling
     */
    'elevation': PropTypes.number,

    /**
     * Whether or not we should add transitions as a base style
     */
    'transition': PropTypes.bool,

    'children': PropTypes.node
};

Card.defaultProps = {
    'transition': true
};
