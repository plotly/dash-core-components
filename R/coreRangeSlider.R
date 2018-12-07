# AUTO GENERATED FILE - DO NOT EDIT

coreRangeSlider <- function(..., count=NULL, disabled=NULL, updatemode=NULL, vertical=NULL, min=NULL, max=NULL, step=NULL, value=NULL, className=NULL, dots=NULL, marks=NULL, included=NULL, pushable=NULL, id=NULL, allowCross=NULL) {

    component <- list(
        props = list(count=count, disabled=disabled, updatemode=updatemode, vertical=vertical, min=min, max=max, step=step, value=value, className=className, dots=dots, marks=marks, included=included, pushable=pushable, id=id, allowCross=allowCross),
        type = 'RangeSlider',
        namespace = 'dash_core_components',
        propNames = c('count', 'disabled', 'updatemode', 'vertical', 'min', 'max', 'step', 'value', 'className', 'dots', 'marks', 'included', 'pushable', 'id', 'allowCross'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}