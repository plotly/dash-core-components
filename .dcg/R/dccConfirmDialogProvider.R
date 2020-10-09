if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)
    library(dashHtmlComponents)

    app <- Dash$new()

    app$layout(htmlDiv(list(
        dccConfirmDialogProvider(
        children=htmlButton(
            'Click Me',
            n_clicks = 0
        ),
        id='danger-danger-provider',
        message='Danger danger! Are you sure you want to continue?',
        submit_n_clicks=NULL
        ),
        htmlDiv(id='output-provider',
                children='Click the button to submit')
    )))

    app$callback(
        output = list(id = 'output-provider', property = 'children'),
        params=list(input(id = 'danger-danger-provider', property = 'submit_n_clicks')),
        function(submit_n_clicks) {
        if (is.null(unlist(submit_n_clicks))) {
            return('')
        } else {
            paste0('That was a dangerous choice! Submitted ', submit_n_clicks, ' times.')
        }
        }

    )

    app$run_server()
}