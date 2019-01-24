% Auto-generated: do not edit by hand
\name{coreRadioItems}

\alias{coreRadioItems}

\title{RadioItems component}

\description{
RadioItems is a component that encapsulates several radio item inputs. The values and labels of the RadioItems is specified in the `options` property and the seleced item is specified with the `value` property. Each radio item is rendered as an input with a surrounding label.
}

\usage{
coreRadioItems(labelClassName=NULL, style=NULL, inputClassName=NULL, inputStyle=NULL, labelStyle=NULL, dashEvents=NULL, value=NULL, options=NULL, className=NULL, fireEvent=NULL, id=NULL, ...)
}

\arguments{
\item{labelClassName}{The class of the <label> that wraps the radio input
 and the option's label}

\item{style}{The style of the container (div)}

\item{inputClassName}{The class of the <input> radio element}

\item{inputStyle}{The style of the <input> radio element}

\item{labelStyle}{The style of the <label> that wraps the radio input
 and the option's label}

\item{dashEvents}{}

\item{value}{The currently selected value}

\item{options}{An array of options}

\item{className}{The class of the container (div)}

\item{fireEvent}{Dash-assigned callback that gets fired when the radio item gets selected.}

\item{id}{}

\item{...}{wildcards of the form: `data-*` or `aria-*`}
}
