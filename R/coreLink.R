# AUTO GENERATED FILE - DO NOT EDIT

coreLink <- function(..., style=NULL, refresh=NULL, children=NULL, className=NULL, href=NULL, id=NULL) {

    component <- list(
        props = list(style=style, refresh=refresh, children=c(children, assert_valid_children(..., wildcards = NULL)), className=className, href=href, id=id),
        type = 'Link',
        namespace = 'dash_core_components',
        propNames = c('style', 'refresh', 'children', 'className', 'href', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}