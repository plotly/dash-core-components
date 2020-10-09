if (interactive() && require(dash)) {
    library(dash)
    library(dashHtmlComponents)
    library(dashCoreComponents)

    app <- Dash$new()

    app$title("dccMarkdown Syntax Highlighting Demo")

    # dccMarkdown leverages Highlight.js, which allows
    # app developers to specify the language inline
    # and highlight its syntax properly:
    app$layout(
        htmlDiv(
        list(
            htmlDiv(htmlH2("Syntax markdown demo:")),
            dccMarkdown(children = "
            ```r
            library(dash)
            library(dashHtmlComponents)

            app <- Dash$new()
            app$layout(htmlDiv('Dash app code wrapped within an app'))
            app$run_server()
            ```")
        )
        )
    )

    app$run_server()
}