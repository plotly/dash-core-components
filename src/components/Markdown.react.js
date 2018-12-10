import React from 'react';
import PropTypes from 'prop-types';
import {type} from 'ramda';
import Markdown from 'react-markdown';

// eslint-disable-next-line valid-jsdoc
/**
 * A component that renders Markdown text as specified by the
 * CommonMark spec.
 */
function DashMarkdown(props) {
    if (type(props.children) === 'Array') {
        props.children = props.children.join('\n');
    }

    return (
        <Markdown
            source={props.children}
            escapeHtml={!props.dangerously_allow_html}
            {...props}
        />
    );
}

DashMarkdown.propTypes = {
    id: PropTypes.string,
    /**
     * Class name of the container element
     */
    className: PropTypes.string,

    /**
     * An object containing custom element props to put on the container
     * element such as id or style
     */
    containerProps: PropTypes.object,

    /**
     * A boolean to control raw HTML escaping.
     * Setting HTML from code is risky because it's easy to
     * inadvertently expose your users to a cross-site scripting (XSS)
     * (https://en.wikipedia.org/wiki/Cross-site_scripting) attack.
     */
    dangerously_allow_html: PropTypes.bool,

    /**
     * A markdown string (or array of strings) that adhreres to the CommonMark spec
     */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};

DashMarkdown.defaultProps = {
    dangerously_allow_html: false,
};

export default DashMarkdown;
