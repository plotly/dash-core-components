import React from 'react';
import PropTypes from 'prop-types';

const promiseWrap = (func, options={rejectNull: false}) => new Promise((resolve, reject) => {
    const { rejectNull } = options;
    let result;
    try {
        result = func();
    } catch(e) {
        reject(e);
    }
    if (rejectNull && !result) {reject('Expected promise result is null');}
    else {resolve(result);}
});

const selectElement = (selector) => promiseWrap(() => document.querySelector(selector));

const buildToc = (contentSelector, options={headings: ['h1', 'h2', 'h3', 'h4', 'h5']}) => selectElement(contentSelector).then(element => {
    const { headings } = options;
    let currentNode;
    // noinspection JSCheckFunctionSignatures
    const nodeIterator = document.createNodeIterator(element, NodeFilter.SHOW_ELEMENT,
        (node) => headings.map(h => node.nodeName.toLowerCase().match(h)).reduce((a, e) => a || e) ?
            NodeFilter.FILTER_ACCEPT :
            NodeFilter.FILTER_REJECT);
    let lastNodeId = 0;
    const children = [];
    // eslint-disable-next-line no-cond-assign
    while(currentNode = nodeIterator.nextNode()) {
        const nodeId = 'toc-' + lastNodeId++;
        const nodeRefId = nodeId + '-ref';
        const currentLevel = headings.indexOf(currentNode.nodeName.toLowerCase());
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
});

/**
 * Build a table of contents list with links to the headers tag.
 */
export default class TableOfContents extends React.Component {
    constructor(){
        super();
        this.state = {
            table_of_contents: null
        };
        this._observer = null;
        this.buildToc = this.buildToc.bind(this);
    }

    buildToc() {
        const { content_selector, headings, setProps } = this.props;
        buildToc(content_selector, {headings})
            .then(table_of_contents =>{
                this.setState({table_of_contents});
                if (setProps) {
                    setProps({table_of_contents})
                }
            });
    }

    componentDidMount() {
        const { content_selector } = this.props;
        selectElement(content_selector).then(element => {
            const mutant = new MutationObserver(this.buildToc);
            mutant.observe(element, {childList: true});
            this._observer = mutant;
        });
        this.buildToc();
    }

    componentWillUnmount() {
        this._observer.disconnect();
    }

    render() {
        const {table_of_contents} = this.state;
        return (
            <ul>
                {table_of_contents && table_of_contents.map(
                    ({content, refId, level}) => <li>
                        <a
                            href={`#${refId}`}
                            className={`toc-level-${level}`}>
                            {content}
                        </a>
                    </li>
                )}
            </ul>
        );
    }
};

TableOfContents.defaultProps = {
    headings: ['h1', 'h2', 'h3', 'h4', 'h5']
};

TableOfContents.propTypes = {
    id: PropTypes.string,
    /**
     * Selector to search for building the toc.
     */
    content_selector: PropTypes.string,

    /**
     * Headings tag name to search.
     */
    headings: PropTypes.arrayOf(PropTypes.string),

    table_of_contents: PropTypes.array,

    setProps: PropTypes.any
};
