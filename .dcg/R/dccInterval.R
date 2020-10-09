if (interactive() && require(dash)) {
    library(dash)
    library(dashHtmlComponents)
    library(dashCoreComponents)
    library(plotly)

    app <- Dash$new()

    app$layout(
        htmlDiv(list(
        htmlH2('3 Second Updates'),
        dccInterval(id = '3s-interval',
                    interval= 3*1000,
                    n_intervals = 0),
        htmlDiv(list(
            dccGraph(id = 'live-graph')
            )
        )
        )
        )
    )

    app$callback(
        output = list(
        output('live-graph', 'figure')
        ),
        params = list(
        input('3s-interval', 'n_intervals')
        ),

        update_graph <- function(n_intervals) {
        df <- data.frame(
            'time' = c(1:8),
            'value' = sample(1:8, 8),
            'value-2' = sample(1:8, 8)
        )

        bar <- animation_opts(plot_ly(
            data = df, x=~time, y=~value, type = "bar"),
            1000, easing = "cubic-in-out"
        )

        return(list(bar))
        }
    )

    app$run_server()
}