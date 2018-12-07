# AUTO GENERATED FILE - DO NOT EDIT

coreTabs <- function(..., style=NULL, vertical=NULL, parent_style=NULL, parent_className=NULL, content_className=NULL, mobile_breakpoint=NULL, className=NULL, children=NULL, colors=NULL, value=NULL, content_style=NULL, id=NULL) {

    component <- list(
        props = list(style=style, vertical=vertical, parent_style=parent_style, parent_className=parent_className, content_className=content_className, mobile_breakpoint=mobile_breakpoint, className=className, children=c(children, assert_valid_children(..., wildcards = NULL)), colors=colors, value=value, content_style=content_style, id=id),
        type = 'Tabs',
        namespace = 'dash_core_components',
        propNames = c('style', 'vertical', 'parent_style', 'parent_className', 'content_className', 'mobile_breakpoint', 'className', 'children', 'colors', 'value', 'content_style', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}