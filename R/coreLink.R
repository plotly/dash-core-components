# AUTO GENERATED FILE - DO NOT EDIT

coreLink <- function(children=NULL, style=NULL, refresh=NULL, className=NULL, href=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(children=children, style=style, refresh=refresh, className=className, href=href, id=id, ...),
        type = 'Link',
        namespace = 'dash_core_components',
        propNames = c('children', 'style', 'refresh', 'className', 'href', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}