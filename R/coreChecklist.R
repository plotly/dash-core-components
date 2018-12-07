# AUTO GENERATED FILE - DO NOT EDIT

coreChecklist <- function(..., labelClassName='', style=NULL, inputClassName='', inputStyle=list(), labelStyle=list(), options=list(), className=NULL, values=NULL, id=NULL) {

    component <- list(
        props = list(labelClassName=labelClassName, style=style, inputClassName=inputClassName, inputStyle=inputStyle, labelStyle=labelStyle, options=options, className=className, values=values, id=id),
        type = 'Checklist',
        namespace = 'dash_core_components',
        propNames = c('labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'options', 'className', 'values', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}