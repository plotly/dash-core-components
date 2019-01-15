% Auto-generated: do not edit by hand
\name{coreUpload}
\alias{coreUpload}
\title{Upload component}
\description{

}
\usage{
coreUpload(style_reject=NULL, min_size=NULL, style=NULL, multiple=NULL, style_disabled=NULL, className_reject=NULL, className_disabled=NULL, accept=NULL, id=NULL, disabled=NULL, className=NULL, last_modified=NULL, style_active=NULL, max_size=NULL, className_active=NULL, filename=NULL, disable_click=NULL, contents=NULL, ...)
}
\arguments{
\item{style_reject}{CSS styles if rejected}

\item{min_size}{Minimum file size}

\item{style}{CSS styles to apply}

\item{multiple}{Allow dropping multiple files}

\item{style_disabled}{CSS styles if disabled}

\item{className_reject}{HTML class name of the component if rejected}

\item{className_disabled}{HTML class name of the component if disabled}

\item{accept}{Allow specific types of files.
See https://github.com/okonet/attr-accept for more information.
Keep in mind that mime type determination is not reliable across
platforms. CSV files, for example, are reported as text/plain
under macOS but as application/vnd.ms-excel under Windows.
In some cases there might not be a mime type set at all.
See: https://github.com/react-dropzone/react-dropzone/issues/276}

\item{id}{ID of the component. Used to identify component
in Dash callback functions.}

\item{disabled}{Enable/disable the upload component entirely}

\item{className}{HTML class name of the component}

\item{last_modified}{The last modified date of the file that was uploaded in unix time
(seconds since 1970).}

\item{style_active}{CSS styles to apply while active}

\item{max_size}{Maximum file size. If `-1`, then infinite}

\item{className_active}{HTML class name of the component while active}

\item{filename}{The name of the file(s) that was(were) uploaded.
Note that this does not include the path of the file
(for security reasons).}

\item{disable_click}{Disallow clicking on the component to open the file dialog}

\item{contents}{The contents of the uploaded file as a binary string}
\item{...}{wildcards of the form: `data-*` or `aria-*`}
}
