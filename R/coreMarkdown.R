# AUTO GENERATED FILE - DO NOT EDIT

coreMarkdown <- function(children=NULL, className=NULL, dangerously_allow_html=NULL, id=NULL, containerProps=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(children=children, className=className, dangerously_allow_html=dangerously_allow_html, id=id, containerProps=containerProps, ...),
        type = 'Markdown',
        namespace = 'dash_core_components',
        propNames = c('children', 'className', 'dangerously_allow_html', 'id', 'containerProps', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}