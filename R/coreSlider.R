# AUTO GENERATED FILE - DO NOT EDIT

coreSlider <- function(dots=NULL, disabled=NULL, updatemode=NULL, vertical=NULL, min=NULL, max=NULL, dashEvents=NULL, value=NULL, fireEvent=NULL, className=NULL, step=NULL, marks=NULL, included=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(dots=dots, disabled=disabled, updatemode=updatemode, vertical=vertical, min=min, max=max, dashEvents=dashEvents, value=value, fireEvent=fireEvent, className=className, step=step, marks=marks, included=included, id=id, ...),
        type = 'Slider',
        namespace = 'dash_core_components',
        propNames = c('dots', 'disabled', 'updatemode', 'vertical', 'min', 'max', 'dashEvents', 'value', 'fireEvent', 'className', 'step', 'marks', 'included', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}