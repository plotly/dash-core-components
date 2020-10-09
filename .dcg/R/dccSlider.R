if (interactive() && require(dash)) {
    library(dash)
    library(dashCoreComponents)
    library(dashHtmlComponents)

    app <- Dash$new()

    app$layout(
        htmlDiv(
        list(
            dccConfirmDialog(
            id='confirm',
            message='Danger danger! Are you sure you want to continue?'),
            dccDropdown(
            options=lapply(list('Safe', 'Danger!!'),function(x){list('label'= x, 'value'= x)}),
            id='dropdown'
            ),
            htmlDiv(id='output-confirm1')
        )
        )
    )

    app$callback(
        output = list(id = 'confirm', property = 'displayed'),
        params=list(input(id = 'dropdown', property = 'value')),
        function(value){
        if(value == 'Danger!!'){
            return(TRUE)}
        else{
            return(FALSE)}
        })

    app$run_server()
}