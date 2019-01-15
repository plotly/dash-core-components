# AUTO GENERATED FILE - DO NOT EDIT

coreChecklist <- function(labelClassName=NULL, style=NULL, inputClassName=NULL, inputStyle=NULL, labelStyle=NULL, options=NULL, className=NULL, values=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(labelClassName=labelClassName, style=style, inputClassName=inputClassName, inputStyle=inputStyle, labelStyle=labelStyle, options=options, className=className, values=values, id=id, ...),
        type = 'Checklist',
        namespace = 'dash_core_components',
        propNames = c('labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'options', 'className', 'values', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}