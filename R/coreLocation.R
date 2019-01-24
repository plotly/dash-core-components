# AUTO GENERATED FILE - DO NOT EDIT

coreLocation <- function(search=NULL, hash=NULL, refresh=NULL, href=NULL, pathname=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(search=search, hash=hash, refresh=refresh, href=href, pathname=pathname, id=id, ...),
        type = 'Location',
        namespace = 'dash_core_components',
        propNames = c('search', 'hash', 'refresh', 'href', 'pathname', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}