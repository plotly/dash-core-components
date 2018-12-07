# AUTO GENERATED FILE - DO NOT EDIT

coreStore <- function(..., modified_timestamp=NULL, storage_type=NULL, clear_data=NULL, data=NULL, id=NULL) {

    component <- list(
        props = list(modified_timestamp=modified_timestamp, storage_type=storage_type, clear_data=clear_data, data=data, id=id),
        type = 'Store',
        namespace = 'dash_core_components',
        propNames = c('modified_timestamp', 'storage_type', 'clear_data', 'data', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}