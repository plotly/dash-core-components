# AUTO GENERATED FILE - DO NOT EDIT

coreInterval <- function(..., max_intervals=NULL, interval=NULL, disabled=NULL, n_intervals=NULL, id=NULL) {

    component <- list(
        props = list(max_intervals=max_intervals, interval=interval, disabled=disabled, n_intervals=n_intervals, id=id),
        type = 'Interval',
        namespace = 'dash_core_components',
        propNames = c('max_intervals', 'interval', 'disabled', 'n_intervals', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}