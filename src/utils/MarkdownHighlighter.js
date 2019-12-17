import LazyLoader from './LazyLoader';

const MarkdownHighlighter = {
    loadhljs: async function() {
        this.hljs = await LazyLoader.hljs();
        this.hljsResolve();
        this.isReady = true;
    },
};

const isReady = new Promise(resolve => {
    MarkdownHighlighter.hljsResolve = resolve;
});

MarkdownHighlighter.isReady = isReady;

export default MarkdownHighlighter;
