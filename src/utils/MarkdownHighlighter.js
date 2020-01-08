import lazyhljs from './LazyLoader/hljs';

const MarkdownHighlighter = {
    loadhljs: function () {
        return lazyhljs().then(() => {
            this.hljsResolve();
            this.isReady = true;
        });
    },
};

const isReady = new Promise(resolve => {
    MarkdownHighlighter.hljsResolve = resolve;
});

MarkdownHighlighter.isReady = isReady;

export default MarkdownHighlighter;
