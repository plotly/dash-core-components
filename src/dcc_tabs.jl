# AUTO GENERATED FILE - DO NOT EDIT

export dcc_tabs

"""
    dcc_tabs(;kwargs...)
    dcc_tabs(children::Any;kwargs...)
    dcc_tabs(children_maker::Function;kwargs...)


A Tabs component.
A Dash component that lets you render pages with tabs - the Tabs component's children
can be dcc.Tab components, which can hold a label that will be displayed as a tab, and can in turn hold
children components that will be that tab's content.
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Array that holds Tab components
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Appends a class to the Tabs container holding the individual Tab components.
- `colors` (optional): Holds the colors used by the Tabs and Tab components. If you set these, you should specify colors for all properties, so:
colors: {
   border: '#d6d6d6',
   primary: '#1975FA',
   background: '#f9f9f9'
 }. colors has the following type: lists containing elements 'border', 'primary', 'background'.
Those elements have the following types:
  - `border` (String; optional)
  - `primary` (String; optional)
  - `background` (String; optional)
- `content_className` (String; optional): Appends a class to the Tab content container holding the children of the Tab that is selected.
- `content_style` (Dict; optional): Appends (inline) styles to the tab content container holding the children of the Tab that is selected.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mobile_breakpoint` (Real; optional): Breakpoint at which tabs are rendered full width (can be 0 if you don't want full width tabs on mobile)
- `parent_className` (String; optional): Appends a class to the top-level parent container holding both the Tabs container and the content container.
- `parent_style` (Dict; optional): Appends (inline) styles to the top-level parent container holding both the Tabs container and the content container.
- `persisted_props` (Array of a value equal to: 'value's; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- `persistence` (Bool | String | Real; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
- `style` (Dict; optional): Appends (inline) styles to the Tabs container holding the individual Tab components.
- `value` (String; optional): The value of the currently selected Tab
- `vertical` (Bool; optional): Renders the tabs vertically (on the side)
"""
function dcc_tabs(; kwargs...)
        available_props = Symbol[:children, :id, :className, :colors, :content_className, :content_style, :loading_state, :mobile_breakpoint, :parent_className, :parent_style, :persisted_props, :persistence, :persistence_type, :style, :value, :vertical]
        wild_props = Symbol[]
        return Component("dcc_tabs", "Tabs", "dash_core_components", available_props, wild_props; kwargs...)
end

dcc_tabs(children::Any; kwargs...) = dcc_tabs(;kwargs..., children = children)
dcc_tabs(children_maker::Function; kwargs...) = dcc_tabs(children_maker(); kwargs...)

