% Auto-generated: do not edit by hand
\name{coreSyntaxHighlighter}
\alias{coreSyntaxHighlighter}
\title{SyntaxHighlighter component}
\description{
A component for pretty printing code.
}
\usage{
coreSyntaxHighlighter(language=NULL, lineStyle=NULL, codeTagProps=NULL, theme=NULL, useInlineStyles=NULL, lineNumberContainerStyle=NULL, lineNumberStyle=NULL, startingLineNumber=NULL, wrapLines=NULL, id=NULL, showLineNumbers=NULL, customStyle=NULL, ...)
}
\arguments{
\item{language}{the language to highlight code in.}

\item{lineStyle}{inline style to be passed to the span wrapping each line if wrapLines is true. Can be either an object or a function that recieves current line number as argument and returns style object.}

\item{codeTagProps}{props that will be spread into the <code> tag that is the direct parent of the highlighted code elements. Useful for styling/assigning classNames.}

\item{theme}{theme: light or dark}

\item{useInlineStyles}{if this prop is passed in as false, react syntax highlighter will not add style objects to elements, and will instead append classNames. You can then style the code block by using one of the CSS files provided by highlight.js.}

\item{lineNumberContainerStyle}{the line numbers container default to appearing to the left with 10px of right padding. You can use this to override those styles.}

\item{lineNumberStyle}{inline style to be passed to the span wrapping each number. Can be either an object or a function that recieves current line number as argument and returns style object.}

\item{startingLineNumber}{if showLineNumbers is enabled the line numbering will start from here.}

\item{wrapLines}{a boolean value that determines whether or not each line of code should be wrapped in a parent element. defaults to false, when false one can not take action on an element on the line level. You can see an example of what this enables here}

\item{id}{}

\item{showLineNumbers}{if this is enabled line numbers will be shown next to the code block.}

\item{customStyle}{prop that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles.}
\item{...}{wildcards of the form: `data-*` or `aria-*`}
}
