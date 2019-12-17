export default {
    datePickerRange: () =>
        import(/* webpackChunkName: "datepicker" */ '../fragments/DatePickerRange.react'),
    datePickerSingle: () =>
        import(/* webpackChunkName: "datepicker" */ '../fragments/DatePickerSingle.react'),
    dropdown: () =>
        import(/* webpackChunkName: "dropdown" */ '../fragments/Dropdown.react'),
    graph: () =>
        import(/* webpackChunkName: "graph" */ '../fragments/Graph.react'),
    hljs: () =>
        Promise.resolve(
            window.hljs ||
                import(/* webpackChunkName: "highlight" */ '../../third-party/highlight.js').then(
                    result => result.default
                )
        ),
    markdown: () =>
        import(/* webpackChunkName: "markdown" */ '../fragments/Markdown.react'),
    plotly: () =>
        Promise.resolve(
            window.Plotly ||
                import(/* webpackChunkName: "plotlyjs" */ 'plotly.js').then(
                    ({default: Plotly}) => {
                        window.Plotly = Plotly;
                        return Plotly;
                    }
                )
        ),
    upload: () =>
        import(/* webpackChunkName: "upload" */ '../fragments/Upload.react'),
};
