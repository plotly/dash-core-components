# AUTO GENERATED FILE - DO NOT EDIT

coreTab <- function(..., className=NULL, style=NULL, disabled_className=NULL, value=NULL, id=NULL, disabled=NULL, selected_className=NULL, selected_style=NULL, label=NULL, disabled_style=list(), children=NULL) {

    component <- list(
        props = list(className=className, style=style, disabled_className=disabled_className, value=value, id=id, disabled=disabled, selected_className=selected_className, selected_style=selected_style, label=label, disabled_style=disabled_style, children=c(children, assert_valid_children(..., wildcards = NULL))),
        type = 'Tab',
        namespace = 'dash_core_components',
        propNames = c('className', 'style', 'disabled_className', 'value', 'id', 'disabled', 'selected_className', 'selected_style', 'label', 'disabled_style', 'children'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}