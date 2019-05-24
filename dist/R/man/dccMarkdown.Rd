% Auto-generated: do not edit by hand
\name{NoneMarkdown}

\alias{NoneMarkdown}

\title{Markdown component}

\description{
A component that renders Markdown text as specified by the GitHub Markdown spec. These component uses [react-markdown](https://rexxars.github.io/react-markdown/) under the hood.
}

\usage{
NoneMarkdown(children=NULL, id=NULL, className=NULL, containerProps=NULL, dangerously_allow_html=NULL, loading_state=NULL)
}

\arguments{
\item{children}{A markdown string (or array of strings) that adhreres to the CommonMark spec}

\item{id}{The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Class name of the container element}

\item{containerProps}{An object containing custom element props to put on the container
element such as id or style}

\item{dangerously_allow_html}{A boolean to control raw HTML escaping.
Setting HTML from code is risky because it's easy to
inadvertently expose your users to a cross-site scripting (XSS)
(https://en.wikipedia.org/wiki/Cross-site_scripting) attack.}

\item{loading_state}{Object that holds the loading state object coming from dash-renderer}
}
