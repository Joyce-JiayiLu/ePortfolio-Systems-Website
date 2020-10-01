import React, {useState} from 'react';
import '../views/FileUpload.css'
import CoverUploadButton from "./Button/CoverUploadButton";

export default function CoverFileUpload () {

    const [selectedFile, setSelectedFile] = useState(null);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form method="post" action="#" id="#">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="" type="file" name="file" onChange={event => setSelectedFile(event.target.files[0])} />
                        </div>
                    </form>
                </div>
            </div>
            <CoverUploadButton data={selectedFile} />
        </div>
    );
};
