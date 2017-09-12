import React, {Component, PropTypes} from 'react';
import Dropzone from 'react-dropzone';

export default class DashDropzone extends Component {
    constructor() {
        super();
    }

    render() {
        const {setProps} = this.props;
        return (
            <Dropzone
                onDrop={ (files) => {
                    const file = files[0];
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (setProps) setProps({contents: reader.result});
                    }
                    reader.readAsBinaryString(file);
                }}
                multiple={false}
                disableClick={this.props.disable_click}
            >
                <div>
                    <div style={{'textAlign': 'center', 'marginTop': '20px', 'width': '100%'}}>
                        {'Upload Data File'}
                    </div>
                </div>
            </Dropzone>
        );
    }
}

DashDropzone.propTypes = {
    id: PropTypes.string,

    /**
    * Disable clicking on the dropzone to bring up file manager
    */
    disable_click: PropTypes.bool,

    contents: PropTypes.string
};

DashDropzone.defaultProps = {
    disable_click: false
};
