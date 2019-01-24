# AUTO GENERATED FILE - DO NOT EDIT

coreRadioItems <- function(labelClassName=NULL, style=NULL, inputClassName=NULL, inputStyle=NULL, labelStyle=NULL, dashEvents=NULL, value=NULL, options=NULL, className=NULL, fireEvent=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(labelClassName=labelClassName, style=style, inputClassName=inputClassName, inputStyle=inputStyle, labelStyle=labelStyle, dashEvents=dashEvents, value=value, options=options, className=className, fireEvent=fireEvent, id=id, ...),
        type = 'RadioItems',
        namespace = 'dash_core_components',
        propNames = c('labelClassName', 'style', 'inputClassName', 'inputStyle', 'labelStyle', 'dashEvents', 'value', 'options', 'className', 'fireEvent', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}