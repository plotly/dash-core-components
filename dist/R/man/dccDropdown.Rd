% Auto-generated: do not edit by hand
\name{NoneDropdown}

\alias{NoneDropdown}

\title{Dropdown component}

\description{
Dropdown is an interactive dropdown element for selecting one or more items. The values and labels of the dropdown items are specified in the `options` property and the selected item(s) are specified with the `value` property.  Use a dropdown when you have many options (more than 5) or when you are constrained for space. Otherwise, you can use RadioItems or a Checklist, which have the benefit of showing the users all of the items at once.
}

\usage{
NoneDropdown(id=NULL, options=NULL, value=NULL, optionHeight=NULL, className=NULL, clearable=NULL, disabled=NULL, multi=NULL, placeholder=NULL, searchable=NULL, style=NULL, loading_state=NULL)
}

\arguments{
\item{id}{The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{options}{An array of options {label: [string|number], value: [string|number]},
an optional disabled field can be used for each option}

\item{value}{The value of the input. If `multi` is false (the default)
then value is just a string that corresponds to the values
provided in the `options` property. If `multi` is true, then
multiple values can be selected at once, and `value` is an
array of items with values corresponding to those in the
`options` prop.}

\item{optionHeight}{height of each option. Can be increased when label lengths would wrap around}

\item{className}{className of the dropdown element}

\item{clearable}{Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.}

\item{disabled}{If true, the option is disabled}

\item{multi}{If true, the user can select multiple values}

\item{placeholder}{The grey, default text shown when no option is selected}

\item{searchable}{Whether to enable the searching feature or not}

\item{style}{Defines CSS styles which will override styles previously set.}

\item{loading_state}{Object that holds the loading state object coming from dash-renderer}
}
