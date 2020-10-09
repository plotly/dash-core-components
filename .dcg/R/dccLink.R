if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)
    library(dashHtmlComponents)

    app <- Dash$new()

    app$layout(htmlDiv(list(
                # represents the URL bar, doesn't render anything
                dccLocation(id = 'url', refresh=FALSE),
                dccLink('Navigate to "/"', href='/'),
                htmlBr(),
                dccLink('Navigate to "/page-2"', href='/page-2'),
                # content will be rendered in this element
                htmlDiv(id='page-content')
            )
        )
    )

    app$callback(output=list(id='page-content', property='children'),
                    params=list(
                input(id='url', property='pathname')),
                function(pathname) {
                paste0('You are on page ', pathname)
                }
    )

    app$run_server()
}