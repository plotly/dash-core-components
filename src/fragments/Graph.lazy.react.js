import React, {Component} from 'react';
import { contains, filter, clone, has, isNil, type, omit } from 'ramda';

import { graphPropTypes, graphDefaultProps } from '../components/Graph.react';
import Plotly from 'plotly.js-dist';

const filterEventData = (gd, eventData, event) => {
    let filteredEventData;
    if (contains(event, ['click', 'hover', 'selected'])) {
        const points = [];

        if (isNil(eventData)) {
            return null;
        }

        /*
         * remove `data`, `layout`, `xaxis`, etc
         * objects from the event data since they're so big
         * and cause JSON stringify ciricular structure errors.
         *
         * also, pull down the `customdata` point from the data array
         * into the event object
         */
        const data = gd.data;

        for (let i = 0; i < eventData.points.length; i++) {
            const fullPoint = eventData.points[i];
            const pointData = filter(function(o) {
                return !contains(type(o), ['Object', 'Array']);
            }, fullPoint);
            if (
                has('curveNumber', fullPoint) &&
                has('pointNumber', fullPoint) &&
                has('customdata', data[pointData.curveNumber])
            ) {
                pointData.customdata =
                    data[pointData.curveNumber].customdata[
                        fullPoint.pointNumber
                    ];
            }

            // specific to histogram. see https://github.com/plotly/plotly.js/pull/2113/
            if (has('pointNumbers', fullPoint)) {
                pointData.pointNumbers = fullPoint.pointNumbers;
            }

            points[i] = pointData;
        }
        filteredEventData = {points};
    } else if (event === 'relayout' || event === 'restyle') {
        /*
         * relayout shouldn't include any big objects
         * it will usually just contain the ranges of the axes like
         * "xaxis.range[0]": 0.7715822247381828,
         * "xaxis.range[1]": 3.0095292008680063`
         */
        filteredEventData = eventData;
    }
    if (has('range', eventData)) {
        filteredEventData.range = eventData.range;
    }
    if (has('lassoPoints', eventData)) {
        filteredEventData.lassoPoints = eventData.lassoPoints;
    }
    return filteredEventData;
};

/**
 * Graph can be used to render any plotly.js-powered data visualization.
 *
 * You can define callbacks based on user interaction with Graphs such as
 * hovering, clicking or selecting
 */
class LazyPlotlyGraph extends Component {
    constructor(props) {
        super(props);
        this.gd = React.createRef();
        this.bindEvents = this.bindEvents.bind(this);
        this._hasPlotted = false;
        this._prevGd = null;
        this.graphResize = this.graphResize.bind(this);
    }

    plot(props) {
        const {figure, animate, animation_options, config} = props;
        const gd = this.gd.current;

        if (
            animate &&
            this._hasPlotted &&
            figure.data.length === gd.data.length
        ) {
            return Plotly.animate(gd, figure, animation_options);
        }
        return Plotly.react(gd, {
            data: figure.data,
            layout: clone(figure.layout),
            frames: figure.frames,
            config: config,
        }).then(() => {
            const gd = this.gd.current;

            // double-check gd hasn't been unmounted
            if (!gd) {
                return;
            }

            // in case we've made a new DOM element, transfer events
            if(this._hasPlotted && gd !== this._prevGd) {
                if(this._prevGd && this._prevGd.removeAllListeners) {
                    this._prevGd.removeAllListeners();
                    Plotly.purge(this._prevGd);
                }
                this._hasPlotted = false;
            }

            if (!this._hasPlotted) {
                this.bindEvents();
                Plotly.Plots.resize(gd);
                this._hasPlotted = true;
                this._prevGd = gd;
            }
        });
    }

    extend(props) {
        const {extendData} = props;
        let updateData, traceIndices, maxPoints;
        if (Array.isArray(extendData) && typeof extendData[0] === 'object') {
            [updateData, traceIndices, maxPoints] = extendData;
        } else {
            updateData = extendData;
        }

        if (!traceIndices) {
            function getFirstProp(data) {
                return data[Object.keys(data)[0]];
            }

            function generateIndices(data) {
                return Array.from(Array(getFirstProp(data).length).keys());
            }
            traceIndices = generateIndices(updateData);
        }

        const gd = this.gd.current;
        return Plotly.extendTraces(gd, updateData, traceIndices, maxPoints);
    }

    graphResize() {
        const gd = this.gd.current;
        if (gd) {
            Plotly.Plots.resize(gd);
        }
    }

    bindEvents() {
        const {setProps, clear_on_unhover} = this.props;

        const gd = this.gd.current;

        gd.on('plotly_click', eventData => {
            const clickData = filterEventData(gd, eventData, 'click');
            if (!isNil(clickData)) {
                setProps({clickData});
            }
        });
        gd.on('plotly_clickannotation', eventData => {
            const clickAnnotationData = omit(
                ['event', 'fullAnnotation'],
                eventData
            );
            setProps({clickAnnotationData});
        });
        gd.on('plotly_hover', eventData => {
            const hoverData = filterEventData(gd, eventData, 'hover');
            if (!isNil(hoverData)) {
                setProps({hoverData});
            }
        });
        gd.on('plotly_selected', eventData => {
            const selectedData = filterEventData(gd, eventData, 'selected');
            if (!isNil(selectedData)) {
                setProps({selectedData});
            }
        });
        gd.on('plotly_deselect', () => {
            setProps({selectedData: null});
        });
        gd.on('plotly_relayout', eventData => {
            const relayoutData = filterEventData(gd, eventData, 'relayout');
            if (!isNil(relayoutData)) {
                setProps({relayoutData});
            }
        });
        gd.on('plotly_restyle', eventData => {
            const restyleData = filterEventData(gd, eventData, 'restyle');
            if (!isNil(restyleData)) {
                setProps({restyleData});
            }
        });
        gd.on('plotly_unhover', () => {
            if (clear_on_unhover) {
                setProps({hoverData: null});
            }
        });
    }

    componentDidMount() {
        this.plot(this.props).then(() => {
            window.addEventListener('resize', this.graphResize);
        });
    }

    componentWillUnmount() {
        const gd = this.gd.current;
        if (gd && gd.removeAllListeners) {
            gd.removeAllListeners();
            Plotly.purge(gd);
        }
        window.removeEventListener('resize', this.graphResize);
    }

    shouldComponentUpdate(nextProps) {
        return (
            this.props.id !== nextProps.id ||
            JSON.stringify(this.props.style) !== JSON.stringify(nextProps.style)
        );
    }

    componentWillReceiveProps(nextProps) {
        const idChanged = this.props.id !== nextProps.id;
        if (idChanged) {
            /*
             * then the dom needs to get re-rendered with a new ID.
             * the graph will get updated in componentDidUpdate
             */
            return;
        }

        const figureChanged = this.props.figure !== nextProps.figure;

        if (figureChanged) {
            this.plot(nextProps);
        }

        const extendDataChanged =
            this.props.extendData !== nextProps.extendData;

        if (extendDataChanged) {
            this.extend(nextProps);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.plot(this.props);
        }
    }

    render() {
        const {className, id, style, loading_state} = this.props;

        return (
            <div
                key={id}
                id={id}
                ref={this.gd}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                style={style}
                className={className}
            />
        );
    }
}

LazyPlotlyGraph.propTypes = graphPropTypes;

LazyPlotlyGraph.defaultProps = graphDefaultProps;

export default LazyPlotlyGraph;
