if (interactive() && require(dash)) {
    library(dash)
    library(dashHtmlComponents)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
    dccChecklist(
        id = "checklist-input",
        options=list(
        list("label" = "New York City", "value" = "NYC"),
        list("label" = "Montreal", "value" = "MTL"),
        list("label" = "San Francisco", "value" = "SF")
        ),
        value=list("MTL", "SF")
        )
    )

    app$run_server()
}