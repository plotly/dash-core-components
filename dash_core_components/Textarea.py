from dash.development.base_component import Component


class Textarea(Component):
    """A Textarea component.
A basic HTML textarea for entering multiline text.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- value (string; optional): The value of the textarea
- autoFocus (string; optional): The element should be automatically focused after the page loaded.
- cols (string; optional): Defines the number of columns in a textarea.
- disabled (string; optional): Indicates whether the user can interact with the element.
- form (string; optional): Indicates the form that is the owner of the element.
- maxLength (string; optional): Defines the maximum number of characters allowed in the element.
- minLength (string; optional): Defines the minimum number of characters allowed in the element.
- name (string; optional): Name of the element. For example used by the server to identify the fields in form submits.
- placeholder (string; optional): Provides a hint to the user of what can be entered in the field.
- readOnly (string; optional): Indicates whether the element can be edited.
- required (string; optional): Indicates whether this element is required to fill out or not.
- rows (string; optional): Defines the number of rows in a text area.
- wrap (string; optional): Indicates whether the text should be wrapped.
- accessKey (string; optional): Defines a keyboard shortcut to activate or add focus to the element.
- className (string; optional): Often used with CSS to style elements with common properties.
- contentEditable (string; optional): Indicates whether the element's content is editable.
- contextMenu (string; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- dir (string; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- draggable (string; optional): Defines whether the element can be dragged.
- hidden (string; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- lang (string; optional): Defines the language used in the element.
- spellCheck (string; optional): Indicates whether spell checking is allowed for the element.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- tabIndex (string; optional): Overrides the browser's default tab order and follows the one specified instead.
- title (string; optional): Text to be displayed in a tooltip when hovering over the element.

Available events: 'click', 'blur', 'change'"""
    def __init__(self, **kwargs):
        self._prop_names = ['id', 'value', 'autoFocus', 'cols', 'disabled', 'form', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'rows', 'wrap', 'accessKey', 'className', 'contentEditable', 'contextMenu', 'dir', 'draggable', 'hidden', 'lang', 'spellCheck', 'style', 'tabIndex', 'title']
        self._type = 'Textarea'
        self._namespace = 'lib'
        self._valid_wildcard_attributes =            []
        self.available_events = ['click', 'blur', 'change']
        self.available_properties = ['id', 'value', 'autoFocus', 'cols', 'disabled', 'form', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'rows', 'wrap', 'accessKey', 'className', 'contentEditable', 'contextMenu', 'dir', 'draggable', 'hidden', 'lang', 'spellCheck', 'style', 'tabIndex', 'title']
        self.available_wildcard_properties =            []

        for k in []:
            if k not in kwargs:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Textarea, self).__init__(**kwargs)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('Textarea(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Textarea(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
