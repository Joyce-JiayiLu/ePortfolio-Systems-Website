import React, {useState} from 'react';
import ReactDom from 'react-dom';
import ReactS3, {uploadFile} from 'react-s3';
import S3FileUpload from 'react-s3';
import BackupIcon from '@material-ui/icons/Backup';
import '../views/FileUpload.css'
import UploadButton from "./Button/UploadButton";

export default function FileUpload () {

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
            <UploadButton data={selectedFile} />
        </div>
    );
};
