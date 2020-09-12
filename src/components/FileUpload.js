import React, {Component} from "react";
import "../views/FileUpload.css";
import UploadButton from "./UploadButton";

export default class FileUpload extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form method="post" action="#" id="#">
                            <div className="form-group files color">
                                <label>Upload Your File </label>
                                <input type="file" className="form-control" name="file" onChange={this.onChangeHandler} multiple="" />
                            </div>
                        </form>
                    </div>
                </div>
                <UploadButton />
            </div>

        );
    }
}
