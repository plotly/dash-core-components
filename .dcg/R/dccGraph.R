if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)
    library(plotly)
    app <- Dash$new()

    year <- c(1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
        2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012)

    worldwide <- c(219, 146, 112, 127, 124, 180, 236, 207, 236, 263,
        350, 430, 474, 526, 488, 537, 500, 439)

    china <- c(16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270,
        299, 340, 403, 549, 499)

    data <- data.frame(year, worldwide, china)

    app$layout(
        htmlDiv(
        dccGraph(
            figure = layout(
                    add_trace(
                        plot_ly(data,
                                x = ~year,
                                y = ~worldwide,
                                type = "bar",
                                name = "Worldwide",
                                marker = list(color = "rgb(55, 83, 109)")
                                ),
                                y = ~china,
                                name = "China",
                                marker = list(color = "rgb(26, 118, 255)")
                        ),
                        yaxis = list(title = "Count"),
                        xaxis = list(title = "Year"),
                        barmode = "group",
                        title="US Export of Plastic Scrap"),
                        style = list("height" = 300),
                        id = "my_graph"
        )
        )
    )

    app$run_server()
}