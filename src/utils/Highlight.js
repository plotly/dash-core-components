import LazyLoader from './LazyLoader';

export default class Highlight {
    static hljsResolve() {}

    constructor() {
        if (!Highlight.isReady) {
            Highlight.isReady = new Promise(resolve => {
                Highlight.hljsResolve = resolve;
            });
        }
    }

    static async loadhljs() {
        Highlight.hljs = await LazyLoader.hljs();
        Highlight.hljsResolve();
        Highlight.isReady = true;
    }
}
