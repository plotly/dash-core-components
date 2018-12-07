# AUTO GENERATED FILE - DO NOT EDIT

coreGraph <- function(..., style=NULL, figure=list(), animation_options=list(), className=NULL, clear_on_unhover=NULL, relayoutData=list(), config=NULL, clickData=list(), animate=NULL, hoverData=list(), clickAnnotationData=list(), id=NULL, selectedData=list()) {

    component <- list(
        props = list(style=style, figure=figure, animation_options=animation_options, className=className, clear_on_unhover=clear_on_unhover, relayoutData=relayoutData, config=config, clickData=clickData, animate=animate, hoverData=hoverData, clickAnnotationData=clickAnnotationData, id=id, selectedData=selectedData),
        type = 'Graph',
        namespace = 'dash_core_components',
        propNames = c('style', 'figure', 'animation_options', 'className', 'clear_on_unhover', 'relayoutData', 'config', 'clickData', 'animate', 'hoverData', 'clickAnnotationData', 'id', 'selectedData'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}