if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        htmlDiv(
        dccTextarea(
            placeholder = 'Enter a value...',
            value = 'This is a TextArea component'
        )
        )
    )

    app$run_server()
}