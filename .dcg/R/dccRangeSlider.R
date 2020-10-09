if (interactive() && require(dash)) {
    library(dash)
    library(dashHtmlComponents)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        htmlDiv(
        dccRangeSlider(
            count = 1,
            min = -5,
            max = 10,
            step = 0.5,
            value = list(-3, 7),
            marks = as.list(
            setNames(-5:10, as.character(-5:10))
            )
        )
        )
    )

    app$run_server()
}
