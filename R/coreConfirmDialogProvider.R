# AUTO GENERATED FILE - DO NOT EDIT

coreConfirmDialogProvider <- function(children=NULL, cancel_n_clicks=NULL, cancel_n_clicks_timestamp=NULL, submit_n_clicks=NULL, displayed=NULL, submit_n_clicks_timestamp=NULL, message=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(children=children, cancel_n_clicks=cancel_n_clicks, cancel_n_clicks_timestamp=cancel_n_clicks_timestamp, submit_n_clicks=submit_n_clicks, displayed=displayed, submit_n_clicks_timestamp=submit_n_clicks_timestamp, message=message, id=id, ...),
        type = 'ConfirmDialogProvider',
        namespace = 'dash_core_components',
        propNames = c('children', 'cancel_n_clicks', 'cancel_n_clicks_timestamp', 'submit_n_clicks', 'displayed', 'submit_n_clicks_timestamp', 'message', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}