import React, {Component, PropTypes} from 'react';
import Plotly from 'plotly.js';

export default class PlotlyGraph extends Component {
    _plot(){
        const {figure, id} = this.props;
        if (!figure) return;

        const {data, layout} = figure;
        Plotly.newPlot(id, data || [], layout || {});
    }

    // "Invoked once, only on the client (not on the server),
    // immediately after the initial rendering occurs."
    componentDidMount() {
        this._plot();
    }

    shouldComponentUpdate(nextProps) {
        // TODO optimize this check
        return JSON.stringify(this.props.figure) !== JSON.stringify(nextProps.figure);
    }

    // "Invoked immediately after the component's updates are flushed to the DOM.
    // This method is not called for the initial render."
    componentDidUpdate() {
        this._plot();
    }

    render(){
        const {width, height, id} = this.props
        const style = {width, height};

        return (
            <div
                id={id}
                style={style}
            />
        );
    }
}

PlotlyGraph.propTypes = {
    /**
     * Plotly `figure` data. See schema:
     * https://api.plot.ly/v2/plot-schema?sha1=
     */
    figure: PropTypes.shape({
        data: PropTypes.array,
        layout: PropTypes.object
    }),

    /**
     * Height of graph, e.g. '600px' or '100%'
     */
    height: PropTypes.string,

    /**
     * Width of graph, e.g. '600px' or '100%'
     */
    width: PropTypes.string
}

PlotlyGraph.defaultProps = {
    figure: {data: [], layout: {}},
    height: '600px',
    width: '100%'
};
