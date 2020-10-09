if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        dccDatePickerSingle(
        id = "date-picker-single",
        date = as.Date("1997/5/10")
        )
    )

    app$run_server()
}