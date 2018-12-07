# AUTO GENERATED FILE - DO NOT EDIT

coreConfirmDialogProvider <- function(..., cancel_n_clicks=NULL, cancel_n_clicks_timestamp=NULL, submit_n_clicks=NULL, displayed=NULL, submit_n_clicks_timestamp=NULL, children=NULL, message=NULL, id=NULL) {

    component <- list(
        props = list(cancel_n_clicks=cancel_n_clicks, cancel_n_clicks_timestamp=cancel_n_clicks_timestamp, submit_n_clicks=submit_n_clicks, displayed=displayed, submit_n_clicks_timestamp=submit_n_clicks_timestamp, children=c(children, assert_valid_children(..., wildcards = NULL)), message=message, id=id),
        type = 'ConfirmDialogProvider',
        namespace = 'dash_core_components',
        propNames = c('cancel_n_clicks', 'cancel_n_clicks_timestamp', 'submit_n_clicks', 'displayed', 'submit_n_clicks_timestamp', 'children', 'message', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}