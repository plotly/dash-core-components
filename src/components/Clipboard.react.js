import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy, faCheckCircle} from '@fortawesome/free-regular-svg-icons';

const clipboardAPI = navigator.clipboard;

/**
 * The Clipboard component copies text to the clipboard
 */

export default class Clipboard extends React.Component {
    constructor(props) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.copySuccess = this.copySuccess.bind(this);
        this.getText = this.getText.bind(this);
        this.stringifyId = this.stringifyId.bind(this);
        this.state = {
            copied: false,
        };
    }

    // stringifies object ids used in pattern matching callbacks
    stringifyId(id) {
        if (typeof id !== 'object') {
            return id;
        }
        const stringifyVal = v => (v && v.wild) || JSON.stringify(v);
        const parts = Object.keys(id)
            .sort()
            .map(k => JSON.stringify(k) + ':' + stringifyVal(id[k]));
        return '{' + parts.join(',') + '}';
    }

    copySuccess() {
        this.props.setProps({
            n_clicks: this.props.n_clicks + 1,
        });

        const showCopiedIcon = 1000;
        this.setState({copied: true}, () => {
            setTimeout(() => {
                this.setState({copied: false});
            }, showCopiedIcon);
        });
    }

    getText() {
        // get the inner text.  If none, use the content of the value param
        const id = this.stringifyId(this.props.target_id);
        const target = document.getElementById(id);
        let text = target.innerText;
        if (!text) {
            text = target.value;
            text = text === undefined ? null : text;
        }
        return text;
    }

    copyToClipboard() {
        let text = this.props.text;
        if (this.props.target_id) {
            text = this.getText();
        }
        if (text) {
            clipboardAPI.writeText(text).then(this.copySuccess, function() {
                alert('copy error');
            });
        } else {
            this.copySuccess();
        }
    }

    componentDidMount() {
        if (!clipboardAPI) {
            console.warn('Copy to clipboard not available with this browser'); // eslint-disable-line no-console
        }
    }

    render() {
        const {id, title, className, style} = this.props;
        const copyIcon = <FontAwesomeIcon icon={faCopy} />;
        const copiedIcon = <FontAwesomeIcon icon={faCheckCircle} />;
        const btnIcon = this.state.copied ? copiedIcon : copyIcon;

        return clipboardAPI ? (
            <div id={id} title={title} style={style} className={className}>
                <i onClick={() => this.copyToClipboard()}>{btnIcon}</i>
            </div>
        ) : null;
    }
}

Clipboard.defaultProps = {
    text: null,
    target_id: null,
    n_clicks: 0,
};

Clipboard.propTypes = {
    /**
     * The ID used to identify this component.
     */
    id: PropTypes.string,

    /**
     * The id of target component containing text to copy to the clipboard.
     * The inner text of the `children` prop will be copied to the clipboard.  If none, then the text from the
     *  `value` prop will be copied.
     */
    target_id: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * The text to  be copied to the clipboard if the `target_id` is None.
     * If the `target_id` is None and `text` is None, then the
     * icon copy animation will display, but nothing is copied to the clipboard.  This
     * allows for the use of other copy to clipboard methods in a callback, such as
     *  `pandas.DataFrame.to_clipboard`.
     */
    text: PropTypes.string,

    /**
     * The number of times copy button was clicked
     */
    n_clicks: PropTypes.number,

    /**
     * The text shown as a tooltip when hovering over the copy icon.
     */
    title: PropTypes.string,

    /**
     * The icon's styles
     */
    style: PropTypes.object,

    /**
     * The class  name of the icon element
     */
    className: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
};
