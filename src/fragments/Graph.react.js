import React, {Component} from 'react';
import ResizeDetector from 'react-resize-detector';
import {
    clone,
    equals,
    filter,
    has,
    includes,
    isNil,
    mergeDeepRight,
    omit,
    type,
} from 'ramda';
import PropTypes from 'prop-types';
import {graphPropTypes, graphDefaultProps} from '../components/Graph.react';
/* global Plotly:true */

/**
 * `autosize: true` causes Plotly.js to conform to the parent element size.
 * This is necessary for `dcc.Graph` call to `Plotly.Plots.resize(target)` to do something.
 *
 * Users can override this value for specific use-cases by explicitly passing `autoresize: true`
 * if `responsive` is not set to True.
 */
const DEFAULT_LAYOUT = {
    autosize: true,
};

/**
 * `responsive: true` causes Plotly.js to resize the graph on `window.resize`.
 * This is necessary for `dcc.Graph` call to `Plotly.Plots.resize(target)` to do something.
 *
 * Users can override this value for specific use-cases by explicitly passing `responsive: false`
 * if `responsive` is not set to True.
 */
const DEFAULT_CONFIG = {
    responsive: true,
};

const filterEventData = (gd, eventData, event) => {
    let filteredEventData;
    if (includes(event, ['click', 'hover', 'selected'])) {
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
                return !includes(type(o), ['Object', 'Array']);
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
class PlotlyGraph extends Component {
    constructor(props) {
        super(props);
        this.gd = React.createRef();
        this.bindEvents = this.bindEvents.bind(this);
        this._hasPlotted = false;
        this._prevGd = null;
        this.graphResize = this.graphResize.bind(this);
        this.isResponsive = this.isResponsive.bind(this);
    }

    plot(props) {
        const {figure, animate, animation_options, config} = props;
        const responsive = this.isResponsive(props);

        const gd = this.gd.current;

        if (
            animate &&
            this._hasPlotted &&
            figure.data.length === gd.data.length
        ) {
            return Plotly.animate(gd, figure, animation_options);
        }

        let layoutClone = figure.layout;
        if (layoutClone) {
            if (responsive) {
                layoutClone = mergeDeepRight(figure.layout, DEFAULT_LAYOUT);
                delete layoutClone.height;
                delete layoutClone.width;
            } else {
                layoutClone = clone(figure.layout);
            }
        }

        const configClone = responsive
            ? mergeDeepRight(config, DEFAULT_CONFIG)
            : clone(config);

        return Plotly.react(gd, {
            data: figure.data,
            layout: layoutClone,
            frames: figure.frames,
            config: configClone,
        }).then(() => {
            const gd = this.gd.current;

            // double-check gd hasn't been unmounted
            if (!gd) {
                return;
            }

            // in case we've made a new DOM element, transfer events
            if (this._hasPlotted && gd !== this._prevGd) {
                if (this._prevGd && this._prevGd.removeAllListeners) {
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
        const {clearExtendData, extendData: extendDataArray} = props;

        extendDataArray.forEach(extendData => {
            let updateData, traceIndices, maxPoints;
            if (
                Array.isArray(extendData) &&
                typeof extendData[0] === 'object'
            ) {
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
        });
        clearExtendData();
    }

    isResponsive(props) {
        const {config, figure, responsive} = props;

        if (type(responsive) === 'Boolean') {
            return responsive;
        }

        return (
            (config.responsive || isNil(config.responsive)) &&
            (!figure.layout ||
                ((figure.layout.autosize || isNil(figure.layout.autosize)) &&
                    (isNil(figure.layout.height) ||
                        isNil(figure.layout.width))))
        );
    }

    graphResize() {
        const responsive = this.isResponsive(this.props);
        if (!responsive) {
            return;
        }

        const gd = this.gd.current;
        if (gd) {
            Plotly.Plots.resize(gd);
        }
    }

    bindEvents() {
        const {
            setProps,
            clear_on_unhover,
            relayoutData,
            restyleData,
            hoverData,
            selectedData,
        } = this.props;

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
            const hover = filterEventData(gd, eventData, 'hover');
            if (!isNil(hover) && !equals(hover, hoverData)) {
                setProps({hoverData: hover});
            }
        });
        gd.on('plotly_selected', eventData => {
            const selected = filterEventData(gd, eventData, 'selected');
            if (!isNil(selected) && !equals(selected, selectedData)) {
                setProps({selectedData: selected});
            }
        });
        gd.on('plotly_deselect', () => {
            setProps({selectedData: null});
        });
        gd.on('plotly_relayout', eventData => {
            const relayout = filterEventData(gd, eventData, 'relayout');
            if (!isNil(relayout) && !equals(relayout, relayoutData)) {
                setProps({relayoutData: relayout});
            }
        });
        gd.on('plotly_restyle', eventData => {
            const restyle = filterEventData(gd, eventData, 'restyle');
            if (!isNil(restyle) && !equals(restyle, restyleData)) {
                setProps({restyleData: restyle});
            }
        });
        gd.on('plotly_unhover', () => {
            if (clear_on_unhover) {
                setProps({hoverData: null});
            }
        });
    }

    componentDidMount() {
        this.plot(this.props);
        if (this.props.extendData) {
            this.extend(this.props);
        }
    }

    componentWillUnmount() {
        const gd = this.gd.current;
        if (gd && gd.removeAllListeners) {
            gd.removeAllListeners();
            if (this._hasPlotted) {
                Plotly.purge(gd);
            }
        }
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
        if (this.props.figure !== nextProps.figure) {
            this.plot(nextProps);
        }

        if (this.props.extendData !== nextProps.extendData) {
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
                id={id}
                key={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                style={style}
            >
                <ResizeDetector
                    handleHeight={true}
                    handleWidth={true}
                    refreshMode="debounce"
                    refreshOptions={{trailing: true}}
                    refreshRate={50}
                    onResize={this.graphResize}
                />
                <div
                    ref={this.gd}
                    style={{height: '100%', width: '100%'}}
                    className={className}
                />
            </div>
        );
    }
}

PlotlyGraph.propTypes = {
    ...graphPropTypes,
    extendData: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    ),
    clearExtendData: PropTypes.func.isRequired,
};

PlotlyGraph.defaultProps = {
    ...graphDefaultProps,
    extendData: [],
};

export default PlotlyGraph;
