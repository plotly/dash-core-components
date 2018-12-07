# AUTO GENERATED FILE - DO NOT EDIT

coreUpload <- function(..., style_reject=list(), min_size=NULL, style=list(), multiple=NULL, style_disabled=list(), className_reject=NULL, className_disabled=NULL, accept=NULL, id=NULL, disabled=NULL, className=NULL, last_modified=NULL, style_active=list(), max_size=NULL, className_active=NULL, filename=NULL, disable_click=NULL, children=NULL, contents=NULL) {

    component <- list(
        props = list(style_reject=style_reject, min_size=min_size, style=style, multiple=multiple, style_disabled=style_disabled, className_reject=className_reject, className_disabled=className_disabled, accept=accept, id=id, disabled=disabled, className=className, last_modified=last_modified, style_active=style_active, max_size=max_size, className_active=className_active, filename=filename, disable_click=disable_click, children=c(children, assert_valid_children(..., wildcards = NULL)), contents=contents),
        type = 'Upload',
        namespace = 'dash_core_components',
        propNames = c('style_reject', 'min_size', 'style', 'multiple', 'style_disabled', 'className_reject', 'className_disabled', 'accept', 'id', 'disabled', 'className', 'last_modified', 'style_active', 'max_size', 'className_active', 'filename', 'disable_click', 'children', 'contents'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}