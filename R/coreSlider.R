# AUTO GENERATED FILE - DO NOT EDIT

coreSlider <- function(..., dots=NULL, disabled=NULL, updatemode=NULL, vertical=NULL, min=NULL, max=NULL, value=NULL, className=NULL, step=NULL, marks=NULL, included=NULL, id=NULL) {

    component <- list(
        props = list(dots=dots, disabled=disabled, updatemode=updatemode, vertical=vertical, min=min, max=max, value=value, className=className, step=step, marks=marks, included=included, id=id),
        type = 'Slider',
        namespace = 'dash_core_components',
        propNames = c('dots', 'disabled', 'updatemode', 'vertical', 'min', 'max', 'value', 'className', 'step', 'marks', 'included', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}