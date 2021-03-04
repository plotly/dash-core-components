import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy, faCheckCircle} from '@fortawesome/free-regular-svg-icons';

/**
 * The Clipboard component copies text to the clipboard
 */

export default class Clipboard extends React.Component {
    constructor(props) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.copySuccess = this.copySuccess.bind(this);
        this.getText = this.getText.bind(this);
        this.state = {
            copied: false,
            hasNavigator: true,
        };
    }

    copySuccess() {
        const showCopiedIcon = 1000;
        this.setState({copied: true}, () => {
            setTimeout(() => {
                this.setState({copied: false});
            }, showCopiedIcon);
        });
    }

    getText() {
        // get the inner text.  If none, use the content of the value param
        var text = document.getElementById(this.props.target_id).innerText;
        if (text === undefined || text === '') {
            text = document.getElementById(this.props.target_id).value;
            text = text === undefined ? '' : text;
        }
        return text;
    }

    copyToClipboard() {
        const text = this.getText();
        navigator.clipboard.writeText(text).then(
            () => {
                this.copySuccess();
            },
            function() {
                alert('copy error');
            }
        );
    }

    componentDidMount() {
        if (!navigator.clipboard) {
            this.setState({hasNavigator: false});
            alert('Copy to clipboard not available with this browser');
        }
    }

    render() {
        const {id, title, className, style} = this.props;
        const copyIcon = <FontAwesomeIcon icon={faCopy} />;
        const copiedIcon = <FontAwesomeIcon icon={faCheckCircle} />;
        const btnIcon = this.state.copied ? copiedIcon : copyIcon;

        return this.state.hasNavigator ? (
            <div id={id} title={title} style={style} className={className}>
                <i onClick={() => this.copyToClipboard()}>{btnIcon}</i>
            </div>
        ) : null;
    }
}

Clipboard.defaultProps = {};

Clipboard.propTypes = {
    /**
     * The ID used to identify this component.
     */
    id: PropTypes.string,

    /**
     * id of target component containing text to copy to the clipboard.
     *  The inner text of the `children` prop will be copied to the clipboard.  If none, then the text from the
     *  `value` prop will be copied.
     */
    target_id: PropTypes.string.isRequired,

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
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
