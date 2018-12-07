% Auto-generated: do not edit by hand
\name{coreSlider}
\alias{coreSlider}
\title{Slider component}
\description{
A slider component with a single handle.
}
\usage{
coreSlider(..., dots=NULL, disabled=NULL, updatemode=NULL, vertical=NULL, min=NULL, max=NULL, value=NULL, className=NULL, step=NULL, marks=NULL, included=NULL, id=NULL)
}
\arguments{
\item{dots}{When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.}

\item{disabled}{If true, the handles can't be moved.}

\item{updatemode}{Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.}

\item{vertical}{If true, the slider will be vertical}

\item{min}{Minimum allowed value of the slider}

\item{max}{Maximum allowed value of the slider}

\item{value}{The value of the input}

\item{className}{Additional CSS class for the root DOM node}

\item{step}{Value by which increments or decrements are made}

\item{marks}{Marks on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific mark point,
the value should be an object which
contains style and label properties.}

\item{included}{If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.}

\item{id}{}
}
    