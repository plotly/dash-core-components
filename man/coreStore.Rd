% Auto-generated: do not edit by hand
\name{coreStore}
\alias{coreStore}
\title{Store component}
\description{
Easily keep data on the client side with this component. The data is not inserted in the DOM. Data can be in memory, localStorage or sessionStorage. The data will be kept with the id as key.
}
\usage{
coreStore(modified_timestamp=NULL, storage_type=NULL, clear_data=NULL, data=NULL, id=NULL, ...)
}
\arguments{
\item{modified_timestamp}{The last time the storage was modified.}

\item{storage_type}{The type of the web storage.

memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}

\item{clear_data}{Set to true to remove the data contained in `data_key`.}

\item{data}{The stored data for the id.}

\item{id}{The key of the storage.}
\item{...}{wildcards of the form: `data-*` or `aria-*`}
}
