# AUTO GENERATED FILE - DO NOT EDIT

coreChecklist <- function(labelClassName=NULL, style=NULL, inputClassName=NULL, inputStyle=NULL, labelStyle=NULL, dashEvents=NULL, options=NULL, className=NULL, values=NULL, fireEvent=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(labelClassName=labelClassName, style=style, inputClassName=inputClassName, inputStyle=inputStyle, labelStyle=labelStyle, dashEvents=dashEvents, options=options, className=className, values=values, fireEvent=fireEvent, id=id, ...),
        type = 'Checklist',
        namespace = 'dash_core_components',
        propNames = c('labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'dashEvents', 'options', 'className', 'values', 'fireEvent', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}