# AUTO GENERATED FILE - DO NOT EDIT

coreDropdown <- function(disabled=NULL, multi=NULL, dashEvents=NULL, searchable=NULL, fireEvent=NULL, style=NULL, value=NULL, options=NULL, className=NULL, clearable=NULL, placeholder=NULL, id=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(disabled=disabled, multi=multi, dashEvents=dashEvents, searchable=searchable, fireEvent=fireEvent, style=style, value=value, options=options, className=className, clearable=clearable, placeholder=placeholder, id=id, ...),
        type = 'Dropdown',
        namespace = 'dash_core_components',
        propNames = c('disabled', 'multi', 'dashEvents', 'searchable', 'fireEvent', 'style', 'value', 'options', 'className', 'clearable', 'placeholder', 'id', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}