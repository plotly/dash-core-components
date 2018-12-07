# AUTO GENERATED FILE - DO NOT EDIT

coreConfirmDialog <- function(..., cancel_n_clicks=NULL, cancel_n_clicks_timestamp=NULL, submit_n_clicks=NULL, displayed=NULL, submit_n_clicks_timestamp=NULL, key=NULL, message=NULL, id=NULL) {

    component <- list(
        props = list(cancel_n_clicks=cancel_n_clicks, cancel_n_clicks_timestamp=cancel_n_clicks_timestamp, submit_n_clicks=submit_n_clicks, displayed=displayed, submit_n_clicks_timestamp=submit_n_clicks_timestamp, key=key, message=message, id=id),
        type = 'ConfirmDialog',
        namespace = 'dash_core_components',
        propNames = c('cancel_n_clicks', 'cancel_n_clicks_timestamp', 'submit_n_clicks', 'displayed', 'submit_n_clicks_timestamp', 'key', 'message', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}