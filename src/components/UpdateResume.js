import React, {Component, useState} from 'react';
import '../views/FileUpload.css'
import UploadButton from "./Button/UploadButton";
import {Alert} from "antd";
import {withRouter} from "react-router-dom";
import CoverUploadButton from "./Button/CoverUploadButton";

class UpdateResume extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: "",
            urL: "",
        };
        this.updateSelected = this.updateSelected.bind(this);
        this.success = this.success.bind(this);
    };

    updateSelected(newSelected) {
        console.log(newSelected);
        this.setState({...this.state,
            urL: newSelected
        })
        this.props.functionCallFromParent(this.state.urL);
    }
    success(){
        if (this.state.urL){
            console.log(this.state.urL);
            return(
                <Alert message="Upload successful" type="success" showIcon />
            );
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form method="post" action="#" id="#">
                            <div className="form-group files color">
                                <label>Upload Your Resume </label>
                                <input type="file" className="form-control" multiple="" type="file" name="file" onChange={event => this.setState({...this.state,
                                    selectedFile: (event.target.files[0])})}/>
                                {this.success()}

                            </div>
                        </form>
                    </div>
                </div>
                <UploadButton onChange={this.updateSelected} data={this.state.selectedFile} />
            </div>
        );
    }


};
export default withRouter(UpdateResume);