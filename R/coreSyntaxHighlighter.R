# AUTO GENERATED FILE - DO NOT EDIT

coreSyntaxHighlighter <- function(..., language=NULL, lineStyle=NULL, children=NULL, codeTagProps=NULL, theme=NULL, useInlineStyles=NULL, lineNumberContainerStyle=NULL, lineNumberStyle=NULL, startingLineNumber=NULL, wrapLines=NULL, id=NULL, showLineNumbers=NULL, customStyle=NULL) {

    component <- list(
        props = list(language=language, lineStyle=lineStyle, children=c(children, assert_valid_children(..., wildcards = NULL)), codeTagProps=codeTagProps, theme=theme, useInlineStyles=useInlineStyles, lineNumberContainerStyle=lineNumberContainerStyle, lineNumberStyle=lineNumberStyle, startingLineNumber=startingLineNumber, wrapLines=wrapLines, id=id, showLineNumbers=showLineNumbers, customStyle=customStyle),
        type = 'SyntaxHighlighter',
        namespace = 'dash_core_components',
        propNames = c('language', 'lineStyle', 'children', 'codeTagProps', 'theme', 'useInlineStyles', 'lineNumberContainerStyle', 'lineNumberStyle', 'startingLineNumber', 'wrapLines', 'id', 'showLineNumbers', 'customStyle'),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    component <- append_wildcard_props(component, wildcards = NULL, ...)

    structure(component, class = c('dash_component', 'list'))
}