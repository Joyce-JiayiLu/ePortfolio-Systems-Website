import React, {useState} from 'react';
import ReactDom from 'react-dom';
import ReactS3, {uploadFile} from 'react-s3';
import S3FileUpload from 'react-s3';
import BackupIcon from '@material-ui/icons/Backup';
import '../views/FileUpload.css'
import UploadButton from "./Button/UploadButton";

export default function FileUpload () {

    const config = {
        bucketName: 'itproject',
        dirName: 'file', /* optional */
        region: 'ap-southeast-2',
        accessKeyId: 'AKIAJ6JITOOOA3AF5QWA',
        secretAccessKey: '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',
    };

    const [selectedFile, setSelectedFile] = useState(null);

    function onClickHandler() {
        console.log(selectedFile);
        uploadFile(selectedFile, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

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
            <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
        </div>
    );
};
