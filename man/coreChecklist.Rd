% Auto-generated: do not edit by hand
\name{coreChecklist}

\alias{coreChecklist}

\title{Checklist component}

\description{
Checklist is a component that encapsulates several checkboxes. The values and labels of the checklist is specified in the `options` property and the checked items are specified with the `values` property. Each checkbox is rendered as an input with a surrounding label.
}

\usage{
coreChecklist(labelClassName=NULL, style=NULL, inputClassName=NULL, inputStyle=NULL, labelStyle=NULL, dashEvents=NULL, options=NULL, className=NULL, values=NULL, fireEvent=NULL, id=NULL, ...)
}

\arguments{
\item{labelClassName}{The class of the <label> that wraps the checkbox input
 and the option's label}

\item{style}{The style of the container (div)}

\item{inputClassName}{The class of the <input> checkbox element}

\item{inputStyle}{The style of the <input> checkbox element}

\item{labelStyle}{The style of the <label> that wraps the checkbox input
 and the option's label}

\item{dashEvents}{}

\item{options}{An array of options}

\item{className}{The class of the container (div)}

\item{values}{The currently selected value}

\item{fireEvent}{Dash-assigned callback that gets fired when the checkbox item gets selected.}

\item{id}{}

\item{...}{wildcards of the form: `data-*` or `aria-*`}
}
