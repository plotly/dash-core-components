if (!require(dashTranspileR)) remotes::install_github("plotly/dashTranspileR")

library(dashTranspileR)
x <- transpile(prefix = "core")

# ---------------------------------------------------------------------------
# Change `marks=marks` to `marks=markify(marks)` in component definitions
# This adds the ability supply atomic vectors as marks
#
# Note: this is sensible for Slider/RangeSlider, but it might not for new/other components
# ---------------------------------------------------------------------------

markidx <- grep("marks=marks", x$text, fixed = TRUE)
message(
  "Adding markify() logic to the following components: '", 
  paste(names(x$text)[markidx], collapse = "', '"), "' \n"
)
x$text <- sub("marks=marks", "marks=markify(marks)", x$text, fixed = TRUE)

markify <- "
# allow one to pass an atomic vector to marks
# (where the names attribute are used for the labels)
markify <- function(x) {
  # TODO: check for list names?
  if (!is.atomic(x)) return(x)
  nms <- names(x)
  if (is.null(nms)) nms <- x
  # TODO: throw warning if not a numeric vector?
  # yes, it's confusing, but object keys are the 'value' and values are the label
  setNames(as.list(nms), setNames(x, NULL))
}
"
x$text[[length(x$text) + 1]] <- markify

# ---------------------------------------------------------------------------
# Change `options=options` to `marks=optify(options)` in component definitions
# This adds the ability accept atomic vectors as options
#
# Note: this is sensible for Checklist/Dropdown/RadioItems, 
#   but it might not for new/other components
# ---------------------------------------------------------------------------

optidx <- grep("options=options", x$text, fixed = TRUE)
message(
  "Adding optify() logic to the following components: '", 
  paste(names(x$text)[optidx], collapse = "', '"), "' \n"
)
x$text <- sub("options=options", "options=optify(options)", x$text, fixed = TRUE)

optify <- "
# allow one to pass an atomic vector to marks
# (where the names attribute are used for the labels)
optify <- function(x) {
  # TODO: check for list names?
  if (!is.atomic(x)) return(x)
  nms <- names(x)
  if (is.null(nms)) nms <- x
  # TODO: throw warning if not a numeric vector?
  # yes, it's confusing, but object keys are the 'value' and values are the label
  Map(function(x, y) list(value = x, label = y), x, nms, USE.NAMES = FALSE)
}
"
x$text[[length(x$text) + 1]] <- optify


transpile_write(x)
