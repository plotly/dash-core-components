# AUTO GENERATED FILE - DO NOT EDIT

coreInput <- function(disabled=NULL, selectionStart=NULL, selectionEnd=NULL, spellCheck=NULL, id=NULL, size=NULL, className=NULL, style=NULL, min=NULL, minlength=NULL, dashEvents=NULL, n_blur=NULL, pattern=NULL, autofocus=NULL, type=NULL, multiple=NULL, max=NULL, n_blur_timestamp=NULL, readOnly=NULL, selectionDirection=NULL, placeholder=NULL, fireEvent=NULL, n_submit=NULL, name=NULL, debounce=NULL, n_submit_timestamp=NULL, required=NULL, list=NULL, step=NULL, value=NULL, autocomplete=NULL, inputmode=NULL, maxlength=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(disabled=disabled, selectionStart=selectionStart, selectionEnd=selectionEnd, spellCheck=spellCheck, id=id, size=size, className=className, style=style, min=min, minlength=minlength, dashEvents=dashEvents, n_blur=n_blur, pattern=pattern, autofocus=autofocus, type=type, multiple=multiple, max=max, n_blur_timestamp=n_blur_timestamp, readOnly=readOnly, selectionDirection=selectionDirection, placeholder=placeholder, fireEvent=fireEvent, n_submit=n_submit, name=name, debounce=debounce, n_submit_timestamp=n_submit_timestamp, required=required, list=list, step=step, value=value, autocomplete=autocomplete, inputmode=inputmode, maxlength=maxlength, ...),
        type = 'Input',
        namespace = 'dash_core_components',
        propNames = c('disabled', 'selectionStart', 'selectionEnd', 'spellCheck', 'id', 'size', 'className', 'style', 'min', 'minlength', 'dashEvents', 'n_blur', 'pattern', 'autofocus', 'type', 'multiple', 'max', 'n_blur_timestamp', 'readOnly', 'selectionDirection', 'placeholder', 'fireEvent', 'n_submit', 'name', 'debounce', 'n_submit_timestamp', 'required', 'list', 'step', 'value', 'autocomplete', 'inputmode', 'maxlength', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}