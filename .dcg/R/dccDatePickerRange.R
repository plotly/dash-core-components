if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)

    app <- Dash$new()

    app$layout(
        dccDatePickerRange(
        id = "date-picker-range",
        start_date = as.Date("1997/5/10"),
        end_date_placeholder_text="Select a date!"
        )
    )

    app$run_server()
}