import io
import ntpath
import base64


# region Utils for Download component


def send_file(path, filename=None, type=None):
    """
    Convert a file into the format expected by the Download component.
    :param path: path to the file to be sent
    :param filename: name of the file, if not provided the original filename is used
    :param type: type of the file (optional, passed to Blob in the javascript layer)
    :return: dict of file content (base64 encoded) and meta data used by the Download component
    """
    # If filename is not set, read it from the path.
    if filename is None:
        filename = ntpath.basename(path)
    # Read the file into a base64 string.
    with open(path, "rb") as f:
        content = base64.b64encode(f.read()).decode()
    # Wrap in dict.
    return dict(content=content, filename=filename, type=type, base64=True)


def send_bytes(writer, filename, type=None, **kwargs):
    """
    Convert data written to BytesIO into the format expected by the Download component.
    :param writer: a writer that can write to BytesIO
    :param filename: the name of the file
    :param type: type of the file (optional, passed to Blob in the javascript layer)
    :return: dict of data frame content (base64 encoded) and meta data used by the Download component
    """
    return _send_data_io(io.BytesIO(), False, writer, filename, type, **kwargs)


def send_string(writer, filename, type=None, **kwargs):
    """
    Convert data written to StringIO into the format expected by the Download component.
    :param writer: a writer that can write to StringIO
    :param filename: the name of the file
    :param type: type of the file (optional, passed to Blob in the javascript layer)
    :return: dict of data frame content (base64 encoded) and meta data used by the Download component
    """
    return _send_data_io(io.StringIO(), True, writer, filename, type, **kwargs)


def send_data_frame(writer, filename, type=None, **kwargs):
    """
    Convert data frame into the format expected by the Download component.
    :param writer: a data frame writer
    :param filename: the name of the file
    :param type: type of the file (optional, passed to Blob in the javascript layer)
    :return: dict of data frame content (base64 encoded) and meta data used by the Download component

    Examples
    --------

    >>> df = pd.DataFrame({'a': [1, 2, 3, 4], 'b': [2, 1, 5, 6], 'c': ['x', 'x', 'y', 'y']})
    ...
    >>> send_data_frame(df.to_csv, "mydf.csv")  # download as csv
    >>> send_data_frame(df.to_json, "mydf.json")  # download as json
    >>> send_data_frame(df.to_excel, "mydf.xls", index=False) # download as excel
    >>> send_data_frame(df.to_pkl, "mydf.pkl") # download as pickle

    """
    name = writer.__name__
    # Check if the provided writer is known.
    if name not in _data_frame_senders.keys():
        raise ValueError(
            "The provided writer ({}) is not supported, "
            "try calling send_string or send_bytes directly.".format(name)
        )
    # Send data frame using the appropriate send function.
    return _data_frame_senders[name](writer, filename, type, **kwargs)


def _send_data_io(data_io, encode, writer, filename, type, **kwargs):
    # Some pandas writers try to close the IO, we do not want that.
    data_io_close = data_io.close
    data_io.close = lambda: None
    # Write data content.
    writer(data_io, **kwargs)
    data_value = data_io.getvalue()
    if encode:
        data_value = data_value.encode()
    data_io_close()
    content = base64.b64encode(data_value).decode()
    # Wrap in dict.
    return dict(content=content, filename=filename, type=type, base64=True)


_data_frame_senders = {
    "to_csv": send_string,
    "to_json": send_string,
    "to_html": send_string,
    "to_excel": send_bytes,
    "to_feather": send_bytes,
    "to_parquet": send_bytes,
    "to_msgpack": send_bytes,
    "to_stata": send_bytes,
    "to_pickle": send_bytes,
}

# endregion
