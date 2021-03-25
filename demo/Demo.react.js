import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import {
    Checklist,
    DatePickerRange,
    Dropdown,
    Graph,
    Input,
    RadioItems,
    RangeSlider,
    Slider,
    Interval,
    Markdown,
    Upload,
    ToolTip
} from '../src';


const UploadExample = `
const properties = {};

ReactDOM.render(<Upload {...properties}/>, mountNode);`

const MarkdownExample = `

const markdown = \`
# Hello Dash

Learn more in our [Dash user guide](https://dash-docs.herokuapp.com).

![Image Alt Text](https://plotly.com/~chris/1638.png)

***

# H1
## H2
### H3
#### H4
##### H5
###### H6

*Italics* and **bold** are supported.

***

1. First item
2. Second item
3. Third item

- Bullet 1
- Bullet 2

> Block quote


\\\`\\\`\\\`
Some code
\\\`\\\`\\\`

Inline \\\`code\\\` example.
\`

ReactDOM.render(<Markdown>{markdown}</Markdown>, mountNode);

`;

const SetTimeoutExample = `class Controller extends Component {
    constructor() {
        super();
        this.state = {random: 0};
    }

    render() {
        return (
            <div>
                <Interval interval={1000} setProps={({n_intervals}) => {
                    if (n_intervals) {
                        this.setState({random: Math.random()})
                    }
                }}/>
                <div>
                	{this.state.random}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Controller/>, mountNode);
`;


const DropdownExample = `
const properties = {
    id: 'my dropdown',
    disabled: false,
    multi: false,
    options: [
        {'label': 'Melons', 'value': 'melons', 'disabled': false},
        {'label': 'Apples', 'value': 'apples'},
        {'label': 'Oranges', 'value': 'oranges', 'disabled': true}
    ],
    optionHeight: 50
};

ReactDOM.render(<Dropdown {...properties} />, mountNode);`

const GraphExample = `const properties = {
    animate: true,
    id: 'my graph',
}


class Controller extends Component {
    constructor() {
        super();
        this.timer = this.timer.bind(this);
        this.state = {};
    }

    timer() {
    	this.setState({x: Math.random()});
    }

    componentDidMount() {
        window.setInterval(this.timer, 1000);
    }

    render() {
        const newFigure = {
            data: [{'x': [1, 2, 3], 'y': [1, this.state.x, 1]}]
        };
        return (<div>
            <Graph
                setProps={(props) => {
                    this.setState({props});
                }}
                figure={newFigure}
                {...properties}
            />
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>);
    }
}

ReactDOM.render(<Controller/>, mountNode);`

const SliderExample = `
const properties = {
    className: 'my-slider',
    disabled: false,
    dots: false,
    id: 'my-slider',
    included: false,
    marks: {},
    min: -5,
    max: 5,
    step: 0.5,
    labels: {},
    value: -3,
    vertical: false
};

ReactDOM.render(<Slider {...properties}/>, mountNode);`

const RangeSliderExample = `
const properties = {
    allowCross: false,
    className: 'my-range-slider',
    count: 2,
    disabled: false,
    dots: false,
    id: 'my-range-slider',
    included: false,
    marks: {},
    min: -5,
    max: 5,
    pushable: false,
    step: 0.5,
    labels: {},
    vertical: false
};


class Controller extends Component {
    constructor() {
        super();
        this.state = {
            value: [1, 2]
        };
    }

    render() {
        return (<RangeSlider
            setProps={(props) => {
                this.setState(props);
            }}
            value={this.state.value}
            {...properties}
        />);
    }
}

ReactDOM.render(<Controller/>, mountNode);`

const InputExample = `
const properties = {
    className: 'my-input-wrapper',
    id: 'my-input',
    placeholder: 'Enter a value....',
    style: {'color': 'skyblue'},
    value: 'Initial Value'
};

ReactDOM.render(<Input {...properties}/>, mountNode);`

const RadioExample = `
const properties = {
    id: 'my radios',
    labelStyle: {'display': 'block'},
    disabled: false,
    options: [
        {'label': 'Melons', 'value': 'melons', 'disabled': false},
        {'label': 'Apples', 'value': 'apples'},
        {'label': 'Oranges', 'value': 'oranges', 'disabled': true}
    ],
    value: 'apples'
};

ReactDOM.render(<RadioItems {...properties}/>, mountNode);`


const ChecklistExample = `
const properties = {
    id: 'my checklist',
    labelStyle: {'display': 'block'},
    disabled: false,
    options: [
        {'label': 'Melons', 'value': 'melons', 'disabled': false},
        {'label': 'Apples', 'value': 'apples'},
        {'label': 'Oranges', 'value': 'oranges', 'disabled': true}
    ]
};

class Controller extends Component {
    constructor() {
        super();
        this.state = {
            value: ['melons', 'apples']
        };
    }

    render() {
        return (<Checklist
            setProps={(props) => {
                this.setState(props);
            }}
            value={this.state.value}
            {...properties}
        />);
    }
}

ReactDOM.render(<Controller/>, mountNode);`


const DatePickerRangeExample = `
const properties = {
    id: 'my date',
    start_date_id: 'start',
    end_date_id: 'end'
};

class Controller extends Component {

    render() {
        // Use last 7, next 7 days as allowed range
        const today = new Date();
        const min_date_allowed = new Date();
        const max_date_allowed = new Date();
        min_date_allowed.setDate(today.getDate() - 7);
        max_date_allowed.setDate(today.getDate() + 7);

        return (<DatePickerRange
            // split on time to get YYYY-MM-DD
            min_date_allowed={min_date_allowed.toISOString().split('T')[0]}
            max_date_allowed={max_date_allowed.toISOString().split('T')[0]}
            {...properties}
        />);
    }
}

ReactDOM.render(<Controller/>, mountNode);`


const ToolTipExample = `class Controller extends Component {
    render() {
        return (
            <div>
                <p>This is an inline <ToolTip direction="top" colors={{background:"#ccc", border:"#f00"}}>ToolTip top</ToolTip> tooltip.</p>
                <p>
                    You can also position them using CSS:
                    <ToolTip direction="top" style={{position: 'relative', left: '140px', top: '-20px'}}>ToolTip top</ToolTip>
                    <ToolTip direction="right" style={{position: 'relative', left: '160px', top: '0px'}}>ToolTip right</ToolTip>
                    <ToolTip direction="bottom" style={{position: 'relative', left: '140px', top: '20px'}}>ToolTip bottom</ToolTip>
                    <ToolTip direction="left" style={{position: 'relative', left: '120px', top:'0px'}}>ToolTip left</ToolTip>
                </p>
            </div>
        );
    }
}

ReactDOM.render(<Controller/>, mountNode);
`;


const examples = [
    {name: 'Upload', code: UploadExample},
    {name: 'Markdown', code: MarkdownExample},
    {name: 'Interval', code: SetTimeoutExample},
    {name: 'Graph', code: GraphExample},
    {name: 'Radio', code: RadioExample},
    {name: 'Checklist', code: ChecklistExample},
    {name: 'Dropdown', code: DropdownExample},
    {name: 'Slider', code: SliderExample},
    {name: 'RangeSlider', code: RangeSliderExample},
    {name: 'Input', code: InputExample},
    {name: 'DatePickerRange', code: DatePickerRangeExample},
    {name: 'Tooltip', code: ToolTipExample},
];

class Demo extends Component {
    render() {
        return (
            <div style={{'fontFamily': 'Sans-Serif'}}>
                <h1>Dash Core Component Suite Demo</h1>
                {examples.map((example, index) =>
                    <div key={index}>
                        <div style={{'marginBottom': 150}}>
                            <h3>{example.name}</h3>
                            <Playground
                                codeText={example.code}
                                scope={{Component, React, ReactDOM, Checklist, DatePickerRange, Dropdown, Graph, Input, RadioItems, RangeSlider, Slider, Interval, Markdown, Upload}}
                                noRender={false}
                                theme={'xq-light'}
                            />
                        </div>
                        <hr style={{color: 'lightgrey'}}/>
                    </div>
                    )}
            </div>
        );
    }
}

export default Demo;
