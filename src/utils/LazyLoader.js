export default {
    // datePickerRange: () =>
    //     import(/* webpackChunkName: "datepicker" */ '../fragments/DatePickerRange.react'),
    // datePickerSingle: () =>
    //     import(/* webpackChunkName: "datepicker" */ '../fragments/DatePickerSingle.react'),
    // dropdown: () =>
    //     import(/* webpackChunkName: "dropdown" */ '../fragments/Dropdown.react'),
    graph: () =>
        import(/* webpackChunkName: "graph" */ '../fragments/Graph.react'),
    // markdown: () =>
    //     import(/* webpackChunkName: "markdown" */ '../fragments/Markdown.react'),
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
    // rangeSlider: () =>
    //     import(/* webpackChunkName: "slider" */ '../fragments/RangeSlider.react'),
    // slider: () =>
    //     import(/* webpackChunkName: "slider" */ '../fragments/Slider.react'),
    // upload: () =>
    //     import(/* webpackChunkName: "upload" */ '../fragments/Upload.react'),
};
