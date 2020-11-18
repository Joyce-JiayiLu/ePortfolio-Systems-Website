import React, {Component, useState} from 'react';
import '../views/FileUpload.css'
import CoverUploadButton from "./Button/CoverUploadButton";
import {withRouter} from "react-router-dom";
import {Alert} from "antd";

class CoverFileUpload extends Component {
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
    }
    success(){
        if (this.state.urL){
            console.log(this.state.urL);
            return(
                <Alert message="Success Tips" type="success" showIcon />
            );
        }
    }

    render() {
        console.log(this.state.urL);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form method="post" action="#" id="#">
                            <div className="form-group files color">
                                <label>Upload Your File </label>
                                <input type="file" className="form-control" multiple="" type="file" name="file" onChange={event => this.setState({...this.state,
                                selectedFile: (event.target.files[0])})}/>
                                {this.success()}
                            </div>
                        </form>
                    </div>
                </div>
                <CoverUploadButton onChange={this.updateSelected} data={this.state.selectedFile}/>
            </div>
        );
    }
};

export default withRouter(CoverFileUpload);
