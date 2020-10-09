if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        htmlDiv(
        dccDropdown(
            options=list(
            list(label = "New York City", value = "NYC"),
            list(label = "Montreal", value = "MTL"),
            list(label = "San Francisco", value = "SF")
            ),
            value="MTL"
        )
        )
    )

    app$run_server()
}