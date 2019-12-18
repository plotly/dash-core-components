export const datePickerRang = () =>
    import(/* webpackChunkName: "datepicker" */ '../fragments/DatePickerRange.react');

export const datePickerSingle = () =>
    import(/* webpackChunkName: "datepicker" */ '../fragments/DatePickerSingle.react');

export const dropdown = () =>
    import(/* webpackChunkName: "dropdown" */ '../fragments/Dropdown.react');

export const graph = () =>
    import(/* webpackChunkName: "graph" */ '../fragments/Graph.react');

export const markdown = () =>
    import(/* webpackChunkName: "markdown" */ '../fragments/Markdown.react');

export const plotly = () =>
    Promise.resolve(
        window.Plotly ||
            import(/* webpackChunkName: "plotlyjs" */ 'plotly.js').then(
                ({default: Plotly}) => {
                    window.Plotly = Plotly;
                    return Plotly;
                }
            )
    );

export const upload = () =>
    import(/* webpackChunkName: "upload" */ '../fragments/Upload.react');
