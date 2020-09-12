import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ReactS3, {uploadFile} from 'react-s3';
import S3FileUpload from 'react-s3';


export default function FileUpload () {
    const config = {
        bucketName: 'itproject',
        dirName: 'file', /* optional */
        region: 'ap-southeast-2',
        accessKeyId: 'AKIAJ6JITOOOA3AF5QWA',
        secretAccessKey: '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',
    };
    const upload = async e => {
        console.log(e.target.files[0]);
        uploadFile(e.target.files[0], config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    };


    return(
        <div className="file">
            <h1> upload</h1>
            <input type='file' onChange={upload}/>


        </div>
    );
};
