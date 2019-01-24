# AUTO GENERATED FILE - DO NOT EDIT

coreLogoutButton <- function(style=NULL, logout_url=NULL, id=NULL, className=NULL, label=NULL, method=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(style=style, logout_url=logout_url, id=id, className=className, label=label, method=method, ...),
        type = 'LogoutButton',
        namespace = 'dash_core_components',
        propNames = c('style', 'logout_url', 'id', 'className', 'label', 'method', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}