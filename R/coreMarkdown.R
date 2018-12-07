# AUTO GENERATED FILE - DO NOT EDIT

coreMarkdown <- function(..., className=NULL, children=NULL, id=NULL, containerProps=NULL) {

    component <- list(
        props = list(className=className, children=c(children, assert_valid_children(..., wildcards = NULL)), id=id, containerProps=containerProps),
        type = 'Markdown',
        namespace = 'dash_core_components',
        propNames = c('className', 'children', 'id', 'containerProps'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}