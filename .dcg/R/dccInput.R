if (interactive() && require(dash)) {
    library(dash)
    library(dashHtmlComponents)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        htmlDiv(
        dccInput(
            placeholder = "Enter a value...",
            type = "text",
            value = ""
        )
        )
    )

    app$run_server()
}