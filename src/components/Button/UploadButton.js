import React from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';
import {uploadFile} from "react-s3";
import jwt_decode from "jwt-decode";
import {uploadResume} from "../../api";

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
        uploadFile(props.data, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
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

function upload(data) {
    var user_token = localStorage.getItem("id_token");
    var user_sub = jwt_decode(user_token).sub;
    let userid;
    userid = user_sub
    let resume = data;
    uploadResume({
        userid,
        resume,
    });
}