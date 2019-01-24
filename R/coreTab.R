# AUTO GENERATED FILE - DO NOT EDIT

coreTab <- function(children=NULL, className=NULL, style=NULL, disabled_className=NULL, value=NULL, id=NULL, disabled=NULL, selected_className=NULL, selected_style=NULL, label=NULL, disabled_style=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(children=children, className=className, style=style, disabled_className=disabled_className, value=value, id=id, disabled=disabled, selected_className=selected_className, selected_style=selected_style, label=label, disabled_style=disabled_style, ...),
        type = 'Tab',
        namespace = 'dash_core_components',
        propNames = c('children', 'className', 'style', 'disabled_className', 'value', 'id', 'disabled', 'selected_className', 'selected_style', 'label', 'disabled_style', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}