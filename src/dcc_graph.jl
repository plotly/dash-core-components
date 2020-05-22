# AUTO GENERATED FILE - DO NOT EDIT

export dcc_graph

"""
    dcc_graph(;kwargs...)
    dcc_graph(children::Any;kwargs...)
    dcc_graph(children_maker::Function;kwargs...)

A Graph component.
Graph can be used to render any plotly.js-powered data visualization.

You can define callbacks based on user interaction with Graphs such as
hovering, clicking or selecting
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `clickData` (Dict; optional): Data from latest click event. Read-only.
- `clickAnnotationData` (Dict; optional): Data from latest click annotation event. Read-only.
- `hoverData` (Dict; optional): Data from latest hover event. Read-only.
- `clear_on_unhover` (Bool; optional): If True, `clear_on_unhover` will clear the `hoverData` property
when the user "unhovers" from a point.
If False, then the `hoverData` property will be equal to the
data from the last point that was hovered over.
- `selectedData` (Dict; optional): Data from latest select event. Read-only.
- `relayoutData` (Dict; optional): Data from latest relayout event which occurs
when the user zooms or pans on the plot or other
layout-level edits. Has the form `{<attr string>: <value>}`
describing the changes made. Read-only.
- `extendData` (Array | Dict; optional): Data that should be appended to existing traces. Has the form
`[updateData, traceIndices, maxPoints]`, where `updateData` is an object
containing the data to extend, `traceIndices` (optional) is an array of
trace indices that should be extended, and `maxPoints` (optional) is
either an integer defining the maximum number of points allowed or an
object with key:value pairs matching `updateData`
Reference the Plotly.extendTraces API for full usage:
https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces
- `restyleData` (Array; optional): Data from latest restyle event which occurs
when the user toggles a legend item, changes
parcoords selections, or other trace-level edits.
Has the form `[edits, indices]`, where `edits` is an object
`{<attr string>: <value>}` describing the changes made,
and `indices` is an array of trace indices that were edited.
Read-only.
- `figure` (optional): Plotly `figure` object. See schema:
https://plot.ly/javascript/reference

`config` is set separately by the `config` property. figure has the following type: lists containing elements 'data', 'layout', 'frames'.
Those elements have the following types:
  - `data` (Array of Dicts; optional)
  - `layout` (Dict; optional)
  - `frames` (Array of Dicts; optional)
- `style` (Dict; optional): Generic style overrides on the plot div
- `className` (String; optional): className of the parent div
- `animate` (Bool; optional): Beta: If true, animate between updates using
plotly.js's `animate` function
- `animation_options` (Dict; optional): Beta: Object containing animation settings.
Only applies if `animate` is `true`
- `config` (optional): Plotly.js config options.
See https://plot.ly/javascript/configuration-options/
for more info.. config has the following type: lists containing elements 'staticPlot', 'plotlyServerURL', 'editable', 'edits', 'autosizable', 'responsive', 'queueLength', 'fillFrame', 'frameMargins', 'scrollZoom', 'doubleClick', 'doubleClickDelay', 'showTips', 'showAxisDragHandles', 'showAxisRangeEntryBoxes', 'showLink', 'sendData', 'linkText', 'displayModeBar', 'showSendToCloud', 'showEditInChartStudio', 'modeBarButtonsToRemove', 'modeBarButtonsToAdd', 'modeBarButtons', 'toImageButtonOptions', 'displaylogo', 'watermark', 'plotGlPixelRatio', 'topojsonURL', 'mapboxAccessToken', 'locale', 'locales'.
Those elements have the following types:
  - `staticPlot` (Bool; optional): No interactivity, for export or image generation
  - `plotlyServerURL` (String; optional): Base URL for a Plotly cloud instance, if `showSendToCloud` is enabled
  - `editable` (Bool; optional): We can edit titles, move annotations, etc - sets all pieces of `edits`
unless a separate `edits` config item overrides individual parts
  - `edits` (optional): A set of editable properties. edits has the following type: lists containing elements 'annotationPosition', 'annotationTail', 'annotationText', 'axisTitleText', 'colorbarPosition', 'colorbarTitleText', 'legendPosition', 'legendText', 'shapePosition', 'titleText'.
Those elements have the following types:
  - `annotationPosition` (Bool; optional): The main anchor of the annotation, which is the
text (if no arrow) or the arrow (which drags the whole thing leaving
the arrow length & direction unchanged)
  - `annotationTail` (Bool; optional): Just for annotations with arrows, change the length and direction of the arrow
  - `annotationText` (Bool; optional)
  - `axisTitleText` (Bool; optional)
  - `colorbarPosition` (Bool; optional)
  - `colorbarTitleText` (Bool; optional)
  - `legendPosition` (Bool; optional)
  - `legendText` (Bool; optional): Edit the trace name fields from the legend
  - `shapePosition` (Bool; optional)
  - `titleText` (Bool; optional): The global `layout.title`
  - `autosizable` (Bool; optional): DO autosize once regardless of layout.autosize
(use default width or height values otherwise)
  - `responsive` (Bool; optional): Whether to change layout size when the window size changes
  - `queueLength` (Float64; optional): Set the length of the undo/redo queue
  - `fillFrame` (Bool; optional): If we DO autosize, do we fill the container or the screen?
  - `frameMargins` (Float64; optional): If we DO autosize, set the frame margins in percents of plot size
  - `scrollZoom` (Bool; optional): Mousewheel or two-finger scroll zooms the plot
  - `doubleClick` (a value equal to: false, 'reset', 'autosize', 'reset+autosize'; optional): Double click interaction (false, 'reset', 'autosize' or 'reset+autosize')
  - `doubleClickDelay` (Float64; optional): Delay for registering a double-click event in ms. The
minimum value is 100 and the maximum value is 1000. By
default this is 300.
  - `showTips` (Bool; optional): New users see some hints about interactivity
  - `showAxisDragHandles` (Bool; optional): Enable axis pan/zoom drag handles
  - `showAxisRangeEntryBoxes` (Bool; optional): Enable direct range entry at the pan/zoom drag points
(drag handles must be enabled above)
  - `showLink` (Bool; optional): Link to open this plot in plotly
  - `sendData` (Bool; optional): If we show a link, does it contain data or just link to a plotly file?
  - `linkText` (String; optional): Text appearing in the sendData link
  - `displayModeBar` (a value equal to: true, false, 'hover'; optional): Display the mode bar (true, false, or 'hover')
  - `showSendToCloud` (Bool; optional): Should we include a modebar button to send this data to a
Plotly Cloud instance, linked by `plotlyServerURL`.
By default this is false.
  - `showEditInChartStudio` (Bool; optional): Should we show a modebar button to send this data to a
Plotly Chart Studio plot. If both this and showSendToCloud
are selected, only showEditInChartStudio will be
honored. By default this is false.
  - `modeBarButtonsToRemove` (Array; optional): Remove mode bar button by name.
All modebar button names at https://github.com/plotly/plotly.js/blob/master/src/components/modebar/buttons.js
Common names include:
sendDataToCloud;
(2D) zoom2d, pan2d, select2d, lasso2d, zoomIn2d, zoomOut2d, autoScale2d, resetScale2d;
(Cartesian) hoverClosestCartesian, hoverCompareCartesian;
(3D) zoom3d, pan3d, orbitRotation, tableRotation, handleDrag3d, resetCameraDefault3d, resetCameraLastSave3d, hoverClosest3d;
(Geo) zoomInGeo, zoomOutGeo, resetGeo, hoverClosestGeo;
hoverClosestGl2d, hoverClosestPie, toggleHover, resetViews.
  - `modeBarButtonsToAdd` (Array; optional): Add mode bar button using config objects
  - `modeBarButtons` (Bool | Float64 | String | Dict | Array; optional): Fully custom mode bar buttons as nested array,
where the outer arrays represents button groups, and
the inner arrays have buttons config objects or names of default buttons
  - `toImageButtonOptions` (optional): Modifications to how the toImage modebar button works. toImageButtonOptions has the following type: lists containing elements 'format', 'filename', 'width', 'height', 'scale'.
Those elements have the following types:
  - `format` (a value equal to: 'jpeg', 'png', 'webp', 'svg'; optional): The file format to create
  - `filename` (String; optional): The name given to the downloaded file
  - `width` (Float64; optional): Width of the downloaded file, in px
  - `height` (Float64; optional): Height of the downloaded file, in px
  - `scale` (Float64; optional): Extra resolution to give the file after
rendering it with the given width and height
  - `displaylogo` (Bool; optional): Add the plotly logo on the end of the mode bar
  - `watermark` (Bool; optional): Add the plotly logo even with no modebar
  - `plotGlPixelRatio` (Float64; optional): Increase the pixel ratio for Gl plot images
  - `topojsonURL` (String; optional): URL to topojson files used in geo charts
  - `mapboxAccessToken` (Bool | Float64 | String | Dict | Array; optional): Mapbox access token (required to plot mapbox trace types)
If using an Mapbox Atlas server, set this option to '',
so that plotly.js won't attempt to authenticate to the public Mapbox server.
  - `locale` (String; optional): The locale to use. Locales may be provided with the plot
(`locales` below) or by loading them on the page, see:
https://github.com/plotly/plotly.js/blob/master/dist/README.md#to-include-localization
  - `locales` (Dict; optional): Localization definitions, if you choose to provide them with the
plot rather than registering them globally.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function dcc_graph(; kwargs...)
        available_props = Set(Symbol[:id, :clickData, :clickAnnotationData, :hoverData, :clear_on_unhover, :selectedData, :relayoutData, :extendData, :restyleData, :figure, :style, :className, :animate, :animation_options, :config, :loading_state])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Graph", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_graph"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_graph(children::Any; kwargs...)
    result = dcc_graph(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_graph(children_maker::Function; kwargs...) = dcc_graph(children_maker(); kwargs...)
