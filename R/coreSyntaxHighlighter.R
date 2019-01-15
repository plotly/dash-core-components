# AUTO GENERATED FILE - DO NOT EDIT

coreSyntaxHighlighter <- function(children=NULL, language=NULL, lineStyle=NULL, codeTagProps=NULL, theme=NULL, useInlineStyles=NULL, lineNumberContainerStyle=NULL, lineNumberStyle=NULL, startingLineNumber=NULL, wrapLines=NULL, id=NULL, showLineNumbers=NULL, customStyle=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(children=children, language=language, lineStyle=lineStyle, codeTagProps=codeTagProps, theme=theme, useInlineStyles=useInlineStyles, lineNumberContainerStyle=lineNumberContainerStyle, lineNumberStyle=lineNumberStyle, startingLineNumber=startingLineNumber, wrapLines=wrapLines, id=id, showLineNumbers=showLineNumbers, customStyle=customStyle, ...),
        type = 'SyntaxHighlighter',
        namespace = 'dash_core_components',
        propNames = c('children', 'language', 'lineStyle', 'codeTagProps', 'theme', 'useInlineStyles', 'lineNumberContainerStyle', 'lineNumberStyle', 'startingLineNumber', 'wrapLines', 'id', 'showLineNumbers', 'customStyle', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}