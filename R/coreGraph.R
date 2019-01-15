# AUTO GENERATED FILE - DO NOT EDIT

coreGraph <- function(style=NULL, figure=NULL, animation_options=NULL, dashEvents=NULL, className=NULL, clear_on_unhover=NULL, relayoutData=NULL, config=NULL, clickData=NULL, animate=NULL, hoverData=NULL, clickAnnotationData=NULL, id=NULL, selectedData=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(style=style, figure=figure, animation_options=animation_options, dashEvents=dashEvents, className=className, clear_on_unhover=clear_on_unhover, relayoutData=relayoutData, config=config, clickData=clickData, animate=animate, hoverData=hoverData, clickAnnotationData=clickAnnotationData, id=id, selectedData=selectedData, ...),
        type = 'Graph',
        namespace = 'dash_core_components',
        propNames = c('style', 'figure', 'animation_options', 'className', 'clear_on_unhover', 'relayoutData', 'config', 'clickData', 'animate', 'hoverData', 'clickAnnotationData', 'id', 'selectedData', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}