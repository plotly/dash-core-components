if (!require(dashTranspileR)) remotes::install_github("plotly/dashTranspileR")

library(dashTranspileR)
transpile_write(transpile())
