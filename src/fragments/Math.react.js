import React, {Component} from 'react';
import _ from 'mathjax/es5/tex-svg';


export default class Math extends Component {
    constructor(props) {
        super(props);
        this.span_element = React.createRef();
    }

    componentDidMount() {
        this.renderMath();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tex !== this.props.tex || prevProps.inline !== this.props.inline){
            this.renderMath();
        } 
    }

    renderMath() {
        window.MathJax.typesetPromise([this.span_element.current]); 
    }

    render() {
        return (
            <span ref={this.span_element}>
                {this.props.inline ? String.raw`\(` : String.raw`\[`}
                {this.props.tex}
                {this.props.inline ? String.raw`\)` : String.raw`\]`}
            </span>
        )
    } 
}
