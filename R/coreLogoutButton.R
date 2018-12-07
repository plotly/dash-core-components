# AUTO GENERATED FILE - DO NOT EDIT

coreLogoutButton <- function(..., style=NULL, logout_url=NULL, id=NULL, className=NULL, label='Logout', method='post') {

    component <- list(
        props = list(style=style, logout_url=logout_url, id=id, className=className, label=label, method=method),
        type = 'LogoutButton',
        namespace = 'dash_core_components',
        propNames = c('style', 'logout_url', 'id', 'className', 'label', 'method'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}