% Auto-generated: do not edit by hand
\name{coreTabs}
\alias{coreTabs}
\title{Tabs component}
\description{
A Dash component that lets you render pages with tabs - the Tabs component's children can be dcc.Tab components, which can hold a label that will be displayed as a tab, and can in turn hold children components that will be that tab's content.
}
\usage{
coreTabs(..., style=NULL, vertical=NULL, parent_style=NULL, parent_className=NULL, content_className=NULL, mobile_breakpoint=NULL, className=NULL, children=NULL, colors=NULL, value=NULL, content_style=NULL, id=NULL)
}
\arguments{
\item{style}{Appends (inline) styles to the Tabs container holding the individual Tab components.}

\item{vertical}{Renders the tabs vertically (on the side)}

\item{parent_style}{Appends (inline) styles to the top-level parent container holding both the Tabs container and the content container.}

\item{parent_className}{Appends a class to the top-level parent container holding both the Tabs container and the content container.}

\item{content_className}{Appends a class to the Tab content container holding the children of the Tab that is selected.}

\item{mobile_breakpoint}{Breakpoint at which tabs are rendered full width (can be 0 if you don't want full width tabs on mobile)}

\item{className}{Appends a class to the Tabs container holding the individual Tab components.}

\item{children}{Array that holds Tab components}

\item{colors}{Holds the colors used by the Tabs and Tab components. If you set these, you should specify colors for all properties, so:
colors: {
   border: '#d6d6d6',
   primary: '#1975FA',
   background: '#f9f9f9'
 }}

\item{value}{The value of the currently selected Tab}

\item{content_style}{Appends (inline) styles to the tab content container holding the children of the Tab that is selected.}

\item{id}{The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}
}
    