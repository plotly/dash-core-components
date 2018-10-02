import React from 'react';
import PropTypes from 'prop-types';

const buildToc = (
    contentSelector,
    options = {headings: ['h1', 'h2', 'h3', 'h4', 'h5']}
) => {
    const {headings} = options;
    let currentNode;
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
    let lastNodeId = 0;
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
        children.push({
            content: nodeContent,
            level: currentLevel,
            refId: nodeRefId,
        });
    }
    return children;
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

        return (
            <ul id={id} className={className}>
                {table_of_contents &&
                    table_of_contents.map(({content, refId, level}) => (
                        <li>
                            <a
                                href={`#${refId}`}
                                className={`toc-level-${level}`}
                            >
                                {content}
                            </a>
                        </li>
                    ))}
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
