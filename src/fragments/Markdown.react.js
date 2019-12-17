import React, {Component} from 'react';
import {type} from 'ramda';
import Markdown from 'react-markdown';

import Highlight from '../utils/Highlight';
import {propTypes, defaultProps} from '../components/Markdown.react';
import '../components/css/highlight.css';

export default class DashMarkdown extends Component {
    constructor(props) {
        super(props);
        /* eslint-disable no-new */
        new Highlight();
        if (Highlight.isReady !== true) {
            Highlight.isReady.then(() => {
                this.setState({});
            });
        }
        this.highlightCode = this.highlightCode.bind(this);
        this.dedent = this.dedent.bind(this);
    }

    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        if (this.mdContainer) {
            const nodes = this.mdContainer.querySelectorAll('pre code');

            if (Highlight.hljs) {
                for (let i = 0; i < nodes.length; i++) {
                    Highlight.hljs.highlightBlock(nodes[i]);
                }
            } else {
                Highlight.loadhljs();
            }
        }
    }

    dedent(text) {
        const lines = text.split(/\r\n|\r|\n/);
        let commonPrefix = null;
        for (const line of lines) {
            const preMatch = line && line.match(/^\s*(?=\S)/);
            if (preMatch) {
                const prefix = preMatch[0];
                if (commonPrefix !== null) {
                    for (let i = 0; i < commonPrefix.length; i++) {
                        // Like Python's textwrap.dedent, we'll remove both
                        // space and tab characters, but only if they match
                        if (prefix[i] !== commonPrefix[i]) {
                            commonPrefix = commonPrefix.substr(0, i);
                            break;
                        }
                    }
                } else {
                    commonPrefix = prefix;
                }

                if (!commonPrefix) {
                    break;
                }
            }
        }

        const commonLen = commonPrefix ? commonPrefix.length : 0;
        return lines
            .map(line => {
                return line.match(/\S/) ? line.substr(commonLen) : '';
            })
            .join('\n');
    }

    render() {
        const {
            id,
            style,
            className,
            highlight_config,
            loading_state,
            dangerously_allow_html,
            children,
            dedent,
        } = this.props;

        const textProp =
            type(children) === 'Array' ? children.join('\n') : children;
        const displayText =
            dedent && textProp ? this.dedent(textProp) : textProp;

        return (
            <div
                id={id}
                ref={node => {
                    this.mdContainer = node;
                }}
                style={style}
                className={
                    ((highlight_config && highlight_config.theme) ||
                        className) &&
                    `${className ? className : ''} ${
                        highlight_config &&
                        highlight_config.theme &&
                        highlight_config.theme === 'dark'
                            ? 'hljs-dark'
                            : ''
                    }`
                }
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                <Markdown
                    source={displayText}
                    escapeHtml={!dangerously_allow_html}
                />
            </div>
        );
    }
}

DashMarkdown.propTypes = propTypes;
DashMarkdown.defaultProps = defaultProps;
