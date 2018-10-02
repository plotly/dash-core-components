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
        const nodeClass = 'toc-level-'+currentLevel;
        const nodeContent = currentNode.textContent;
        const idAttr = document.createAttribute('id');
        idAttr.value = nodeRefId;
        currentNode.attributes.setNamedItem(idAttr);
        children.push(<li><a href={`#${nodeRefId}`} className={nodeClass}>{nodeContent}</a></li>);
    }
    return children;
});


export default class TableOfContent extends React.Component {
    constructor(){
        super();
        this.state = {
            children: null
        };
        this._observer = null;
        this.buildToc = this.buildToc.bind(this);
    }

    buildToc() {
        buildToc(this.props.content_selector)
            .then(children => this.setState({children}));
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
        const {children} = this.state;
        return (
            <ul>
                {children}
            </ul>
        );
    }
};

TableOfContent.defaultProps = {};

TableOfContent.propTypes = {
    id: PropTypes.string,
    /**
     * Selector to search for building the toc.
     */
    content_selector: PropTypes.string,
};
