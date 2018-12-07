# AUTO GENERATED FILE - DO NOT EDIT

coreRadioItems <- function(..., labelClassName='', style=NULL, inputClassName='', inputStyle=list(), labelStyle=list(), value=NULL, options=list(), className=NULL, id=NULL) {

    component <- list(
        props = list(labelClassName=labelClassName, style=style, inputClassName=inputClassName, inputStyle=inputStyle, labelStyle=labelStyle, value=value, options=options, className=className, id=id),
        type = 'RadioItems',
        namespace = 'dash_core_components',
        propNames = c('labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'value', 'options', 'className', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}