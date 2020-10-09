if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        dccLogoutButton(logout_url='/custom-auth/logout')
    )

    app$run_server()
}