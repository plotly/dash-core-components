# AUTO GENERATED FILE - DO NOT EDIT

coreTextarea <- function(contentEditable=NULL, cols=NULL, disabled=NULL, wrap=NULL, id=NULL, tabIndex=NULL, draggable=NULL, style=NULL, rows=NULL, title=NULL, accessKey=NULL, dashEvents=NULL, hidden=NULL, spellCheck=NULL, form=NULL, contextMenu=NULL, minLength=NULL, readOnly=NULL, maxLength=NULL, autoFocus=NULL, placeholder=NULL, fireEvent=NULL, lang=NULL, name=NULL, required=NULL, value=NULL, className=NULL, dir=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(contentEditable=contentEditable, cols=cols, disabled=disabled, wrap=wrap, id=id, tabIndex=tabIndex, draggable=draggable, style=style, rows=rows, title=title, accessKey=accessKey, dashEvents=dashEvents, hidden=hidden, spellCheck=spellCheck, form=form, contextMenu=contextMenu, minLength=minLength, readOnly=readOnly, maxLength=maxLength, autoFocus=autoFocus, placeholder=placeholder, fireEvent=fireEvent, lang=lang, name=name, required=required, value=value, className=className, dir=dir, ...),
        type = 'Textarea',
        namespace = 'dash_core_components',
        propNames = c('contentEditable', 'cols', 'disabled', 'wrap', 'id', 'tabIndex', 'draggable', 'style', 'rows', 'title', 'accessKey', 'dashEvents', 'hidden', 'spellCheck', 'form', 'contextMenu', 'minLength', 'readOnly', 'maxLength', 'autoFocus', 'placeholder', 'fireEvent', 'lang', 'name', 'required', 'value', 'className', 'dir', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}