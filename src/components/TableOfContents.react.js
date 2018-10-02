import React from 'react';
import PropTypes from 'prop-types';
import {last} from 'ramda';

const buildToc = (
    contentSelector,
    options = {headings: ['h1', 'h2', 'h3', 'h4', 'h5']}
) => {
    const {headings} = options;
    let currentNode;

    // default levels
    const levels = headings.reduce((a, e) => {
        a[headings.indexOf(e)] = [];
        return a;
    }, {});

    // noinspection JSCheckFunctionSignatures
    const nodeIterator = document.createNodeIterator(
        document.querySelector(contentSelector),
        NodeFilter.SHOW_ELEMENT,
        node =>
            headings
                .map(h => node.nodeName.toLowerCase().match(h))
                .reduce((a, e) => a || e)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT
    );
    let lastNodeId = 1;
    const children = [];
    // eslint-disable-next-line no-cond-assign
    while ((currentNode = nodeIterator.nextNode())) {
        const nodeId = 'toc-' + lastNodeId++;
        const nodeRefId = nodeId + '-ref';
        const currentLevel = headings.indexOf(
            currentNode.nodeName.toLowerCase()
        );
        const nodeContent = currentNode.textContent;
        const idAttr = document.createAttribute('id');
        idAttr.value = nodeRefId;
        currentNode.attributes.setNamedItem(idAttr);
        const node = {
            content: nodeContent,
            level: currentLevel,
            refId: nodeRefId,
            children: [],
        };

        if (currentLevel > 0) {
            const lastLevel = last(levels[currentLevel - 1]);
            lastLevel.children.push(node);
        } else {
            children.push(node);
        }

        levels[currentLevel].push(node);
    }
    return children;
};

const renderToc = toc => {
    const rendered = [];
    for (let i = 0; i < toc.length; i++) {
        const t = toc[i];
        let node;
        const a = (
            <a href={t.refId} className={`toc-level-${t.level}`}>
                {t.content}
            </a>
        );

        if (t.children.length > 0) {
            const children = renderToc(t.children);
            node = (
                <li>
                    {a}
                    <ul>{children}</ul>
                </li>
            );
        } else {
            node = <li>{a}</li>;
        }
        rendered.push(node);
    }
    return rendered;
};

/**
 * Build a table of contents list with links to the headers tag.
 */
export default class TableOfContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table_of_contents: props.table_of_contents,
        };
        this._observer = null;
        this.buildToc = this.buildToc.bind(this);
    }

    buildToc() {
        const {content_selector, headings, setProps} = this.props;
        const table_of_contents = buildToc(content_selector, {headings});

        this.setState({table_of_contents});
        if (setProps) {
            setProps({table_of_contents});
        }
    }

    componentDidMount() {
        const {content_selector} = this.props;
        if (content_selector) {
            const content = document.querySelector(content_selector);
            this._observer = new MutationObserver(this.buildToc);
            this._observer.observe(content, {childList: true});
            this.buildToc();
        }
    }

    componentWillUnmount() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    componentWillReceiveProps(props) {
        // The renderer also re-render the inputs after a callback.
        // Check if falsy to not lose the toc.
        // Means you can't mix callback controlled and state controlled easily.
        if (props.table_of_contents) {
            this.setState({table_of_contents: props.table_of_contents});
        }
    }

    render() {
        const {id, className} = this.props;
        const {table_of_contents} = this.state;

        if (!table_of_contents) {
            return null;
        }

        const toc = renderToc(table_of_contents);

        return (
            <ul id={id} className={className}>
                {toc}
            </ul>
        );
    }
}

TableOfContents.defaultProps = {
    headings: ['h1', 'h2', 'h3', 'h4', 'h5'],
};

TableOfContents.propTypes = {
    id: PropTypes.string,

    /**
     * className for the top ul component.
     */
    className: PropTypes.string,
    /**
     * Selector to search for building the toc.
     */
    content_selector: PropTypes.string,

    /**
     * Headings tag name to search.
     */
    headings: PropTypes.arrayOf(PropTypes.string),

    /**
     * The table of content in object form.
     */
    table_of_contents: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The content of the heading.
             */
            content: PropTypes.string,
            /**
             * The level of the heading.
             */
            level: PropTypes.number,
            /**
             * The id to reference on the page. (scroll to)
             */
            refId: PropTypes.string,
        })
    ),

    setProps: PropTypes.any,
};
