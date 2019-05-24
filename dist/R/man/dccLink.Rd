% Auto-generated: do not edit by hand
\name{NoneLink}

\alias{NoneLink}

\title{Link component}

\description{
Link allows you to create a clickable link within a multi-page app.  For links with destinations outside the current app, `html.A` is a better component to use.
}

\usage{
NoneLink(children=NULL, id=NULL, href=NULL, refresh=NULL, className=NULL, style=NULL, loading_state=NULL)
}

\arguments{
\item{children}{The children of this component}

\item{id}{The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{href}{The URL of a linked resource.}

\item{refresh}{Controls whether or not the page will refresh when the link is clicked}

\item{className}{Often used with CSS to style elements with common properties.}

\item{style}{Defines CSS styles which will override styles previously set.}

\item{loading_state}{Object that holds the loading state object coming from dash-renderer}
}
