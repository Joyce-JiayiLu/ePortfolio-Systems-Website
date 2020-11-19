import React from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {uploadFile} from "react-s3";
import {Alert} from "antd";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function UploadButton({ className, children, onClick, ...props }) {

    const classes = useStyles();

    const config = {
        bucketName: 'itproject',
        dirName: 'file', /* optional */
        region: 'ap-southeast-2',
        accessKeyId: 'AKIAJ6JITOOOA3AF5QWA',
        secretAccessKey: '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',
    };

    function onClickHandler() {
        console.log(props.data);
        const maxsize = 10485760;
        if(props.data==null){
            alert("Please select a file to upload")
        }
        else if(props.data.size >= maxsize){
            alert("This file has exceeded 10Mib！Please choose a smaller file and try again!")
        }
        else {
            uploadFile(props.data, config)
                .then(data => {
                    console.log(data);
                    props.onChange(data.location);
                    window.sessionStorage.setItem("fileUrl", data.location)

                })
                .catch(err => console.error(err))
        }
    }

    return (
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={onClickHandler}
        >
            Upload
        </Button>
    );
}
