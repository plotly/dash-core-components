# AUTO GENERATED FILE - DO NOT EDIT

coreDropdown <- function(..., disabled=NULL, multi=NULL, searchable=NULL, style=NULL, value=NULL, options=NULL, className=NULL, clearable=NULL, placeholder=NULL, id=NULL) {

    component <- list(
        props = list(disabled=disabled, multi=multi, searchable=searchable, style=style, value=value, options=options, className=className, clearable=clearable, placeholder=placeholder, id=id),
        type = 'Dropdown',
        namespace = 'dash_core_components',
        propNames = c('disabled', 'multi', 'searchable', 'style', 'value', 'options', 'className', 'clearable', 'placeholder', 'id'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}