# AUTO GENERATED FILE - DO NOT EDIT

coreRangeSlider <- function(count=NULL, disabled=NULL, updatemode=NULL, dashEvents=NULL, vertical=NULL, min=NULL, max=NULL, step=NULL, value=NULL, fireEvent=NULL, className=NULL, dots=NULL, marks=NULL, included=NULL, pushable=NULL, id=NULL, allowCross=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(count=count, disabled=disabled, updatemode=updatemode, dashEvents=dashEvents, vertical=vertical, min=min, max=max, step=step, value=value, fireEvent=fireEvent, className=className, dots=dots, marks=marks, included=included, pushable=pushable, id=id, allowCross=allowCross, ...),
        type = 'RangeSlider',
        namespace = 'dash_core_components',
        propNames = c('count', 'disabled', 'updatemode', 'dashEvents', 'vertical', 'min', 'max', 'step', 'value', 'fireEvent', 'className', 'dots', 'marks', 'included', 'pushable', 'id', 'allowCross', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}