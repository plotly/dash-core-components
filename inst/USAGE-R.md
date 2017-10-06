# dashCoreComponents

Core component suite for Dash

## Installation

dashCoreComponents is not yet available on CRAN, but you can install with:

```r
remotes::install_github("plotly/dashCoreComponents")
```

## Usage

```r
library(dashCoreComponents)
library(dasher)

app <- Dash$new()

app$layout_set(
  exampleComponent(id = "inputID", value = "initial value"),
  html_div(id = "outputID")
)

app$callback(
  function(x = input("inputID")) {
    sprintf("You've entered: '%s'", x)
  },
  output("outputID")
)

app$run_server(showcase = TRUE)
```
