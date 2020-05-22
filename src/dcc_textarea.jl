# AUTO GENERATED FILE - DO NOT EDIT

export dcc_textarea

"""
    dcc_textarea(;kwargs...)
    dcc_textarea(children::Any;kwargs...)
    dcc_textarea(children_maker::Function;kwargs...)

A Textarea component.
A basic HTML textarea for entering multiline text.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `value` (String; optional): The value of the textarea
- `autoFocus` (String; optional): The element should be automatically focused after the page loaded.
- `cols` (String | Float64; optional): Defines the number of columns in a textarea.
- `disabled` (String | Bool; optional): Indicates whether the user can interact with the element.
- `form` (String; optional): Indicates the form that is the owner of the element.
- `maxLength` (String | Float64; optional): Defines the maximum number of characters allowed in the element.
- `minLength` (String | Float64; optional): Defines the minimum number of characters allowed in the element.
- `name` (String; optional): Name of the element. For example used by the server to identify the fields in form submits.
- `placeholder` (String; optional): Provides a hint to the user of what can be entered in the field.
- `readOnly` (Bool | a value equal to: 'readOnly', 'readonly', 'READONLY'; optional): Indicates whether the element can be edited.
readOnly is an HTML boolean attribute - it is enabled by a boolean or
'readOnly'. Alternative capitalizations `readonly` & `READONLY`
are also acccepted.
- `required` (a value equal to: 'required', 'REQUIRED' | Bool; optional): Indicates whether this element is required to fill out or not.
required is an HTML boolean attribute - it is enabled by a boolean or
'required'. Alternative capitalizations `REQUIRED`
are also acccepted.
- `rows` (String | Float64; optional): Defines the number of rows in a text area.
- `wrap` (String; optional): Indicates whether the text should be wrapped.
- `accessKey` (String; optional): Defines a keyboard shortcut to activate or add focus to the element.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `contentEditable` (String | Bool; optional): Indicates whether the element's content is editable.
- `contextMenu` (String; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- `dir` (String; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- `draggable` (a value equal to: 'true', 'false' | Bool; optional): Defines whether the element can be dragged.
- `hidden` (String; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- `lang` (String; optional): Defines the language used in the element.
- `spellCheck` (a value equal to: 'true', 'false' | Bool; optional): Indicates whether spell checking is allowed for the element.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tabIndex` (String | Float64; optional): Overrides the browser's default tab order and follows the one specified instead.
- `title` (String; optional): Text to be displayed in a tooltip when hovering over the element.
- `n_blur` (Float64; optional): Number of times the textarea lost focus.
- `n_blur_timestamp` (Float64; optional): Last time the textarea lost focus.
- `n_clicks` (Float64; optional): Number of times the textarea has been clicked.
- `n_clicks_timestamp` (Float64; optional): Last time the textarea was clicked.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `persistence` (Bool | String | Float64; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- `persisted_props` (Array of a value equal to: 'value's; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
"""
function dcc_textarea(; kwargs...)
        available_props = Set(Symbol[:id, :value, :autoFocus, :cols, :disabled, :form, :maxLength, :minLength, :name, :placeholder, :readOnly, :required, :rows, :wrap, :accessKey, :className, :contentEditable, :contextMenu, :dir, :draggable, :hidden, :lang, :spellCheck, :style, :tabIndex, :title, :n_blur, :n_blur_timestamp, :n_clicks, :n_clicks_timestamp, :loading_state, :persistence, :persisted_props, :persistence_type])
        wild_props = Set(Symbol[])
        wild_regs = r"^(?<prop>)"

        result = Component("Textarea", "dash_core_components", Dict{Symbol, Any}(), available_props, Set(Symbol[]))

        for (prop, value) = pairs(kwargs)
            m = match(wild_regs, string(prop))
            if (length(wild_props) == 0 || isnothing(m)) && !(prop in available_props)
                throw(ArgumentError("Invalid property $(string(prop)) for component " * "dcc_textarea"))
            end

            push!(result.props, prop => Front.to_dash(value))
        end

    return result
end

function dcc_textarea(children::Any; kwargs...)
    result = dcc_textarea(;kwargs...)
    push!(result.props, :children => Front.to_dash(children))
    return result
end

dcc_textarea(children_maker::Function; kwargs...) = dcc_textarea(children_maker(); kwargs...)
