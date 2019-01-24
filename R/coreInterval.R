# AUTO GENERATED FILE - DO NOT EDIT

coreInterval <- function(max_intervals=NULL, interval=NULL, dashEvents=NULL, fireEvent=NULL, disabled=NULL, n_intervals=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(max_intervals=max_intervals, interval=interval, dashEvents=dashEvents, fireEvent=fireEvent, disabled=disabled, n_intervals=n_intervals, id=id, ...),
        type = 'Interval',
        namespace = 'dash_core_components',
        propNames = c('max_intervals', 'interval', 'dashEvents', 'fireEvent', 'disabled', 'n_intervals', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}