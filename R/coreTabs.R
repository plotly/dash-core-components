# AUTO GENERATED FILE - DO NOT EDIT

coreTabs <- function(children=NULL, style=NULL, vertical=NULL, parent_style=NULL, parent_className=NULL, content_className=NULL, mobile_breakpoint=NULL, className=NULL, colors=NULL, value=NULL, content_style=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(children=children, style=style, vertical=vertical, parent_style=parent_style, parent_className=parent_className, content_className=content_className, mobile_breakpoint=mobile_breakpoint, className=className, colors=colors, value=value, content_style=content_style, id=id, ...),
        type = 'Tabs',
        namespace = 'dash_core_components',
        propNames = c('children', 'style', 'vertical', 'parent_style', 'parent_className', 'content_className', 'mobile_breakpoint', 'className', 'colors', 'value', 'content_style', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}