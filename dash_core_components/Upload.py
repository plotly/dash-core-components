# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Upload(Component):
    """A Upload component.


Keyword arguments:
- children (a list of or a singular dash component, string or number | string; optional): Contents of the upload component
- id (string; optional): ID of the component. Used to identify component
in Dash callback functions.
- contents (string | list; optional): The contents of the uploaded file as a binary string
- filename (string | list; optional): The name of the file(s) that was(were) uploaded.
Note that this does not include the path of the file
(for security reasons).
- last_modified (number | list; optional): The last modified date of the file that was uploaded in unix time
(seconds since 1970).
- accept (string; optional): Allow specific types of files.
See https://github.com/okonet/attr-accept for more information.
Keep in mind that mime type determination is not reliable across
platforms. CSV files, for example, are reported as text/plain
under macOS but as application/vnd.ms-excel under Windows.
In some cases there might not be a mime type set at all.
See: https://github.com/react-dropzone/react-dropzone/issues/276
- disabled (boolean; optional): Enable/disable the upload component entirely
- disable_click (boolean; optional): Disallow clicking on the component to open the file dialog
- max_size (number; optional): Maximum file size. If `-1`, then infinite
- min_size (number; optional): Minimum file size
- multiple (boolean; optional): Allow dropping multiple files
- className (string; optional): HTML class name of the component
- className_active (string; optional): HTML class name of the component while active
- className_reject (string; optional): HTML class name of the component if rejected
- className_disabled (string; optional): HTML class name of the component if disabled
- style (dict; optional): CSS styles to apply
- style_active (dict; optional): CSS styles to apply while active
- style_reject (dict; optional): CSS styles if rejected
- style_disabled (dict; optional): CSS styles if disabled

Available events: """
    @_explicitize_args
    def __init__(self, children=None, id=Component._NO_DEFAULT_ARG, contents=Component._NO_DEFAULT_ARG, filename=Component._NO_DEFAULT_ARG, last_modified=Component._NO_DEFAULT_ARG, accept=Component._NO_DEFAULT_ARG, disabled=False, disable_click=False, max_size=-1, min_size=0, multiple=False, className=Component._NO_DEFAULT_ARG, className_active=Component._NO_DEFAULT_ARG, className_reject=Component._NO_DEFAULT_ARG, className_disabled=Component._NO_DEFAULT_ARG, style={}, style_active={'borderStyle': 'solid', 'borderColor': '#6c6', 'backgroundColor': '#eee'}, style_reject={'borderStyle': 'solid', 'borderColor': '#c66', 'backgroundColor': '#eee'}, style_disabled={'opacity': 0.5}, **kwargs):
        self._prop_names = ['children', 'id', 'contents', 'filename', 'last_modified', 'accept', 'disabled', 'disable_click', 'max_size', 'min_size', 'multiple', 'className', 'className_active', 'className_reject', 'className_disabled', 'style', 'style_active', 'style_reject', 'style_disabled']
        self._type = 'Upload'
        self._namespace = 'dash_core_components'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['children', 'id', 'contents', 'filename', 'last_modified', 'accept', 'disabled', 'disable_click', 'max_size', 'min_size', 'multiple', 'className', 'className_active', 'className_reject', 'className_disabled', 'style', 'style_active', 'style_reject', 'style_disabled']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        args = {k: _locals[k] for k in self._prop_names
                 if k != 'children' and not k.endswith('-*')}
        args.update(kwargs)  # For wildcard attrs

        for k in []:
            if k not in _explicit_args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Upload, self).__init__(children=children, **args)

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
            return ('Upload(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Upload(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
