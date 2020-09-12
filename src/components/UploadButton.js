import React from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SaveButton({ className, children, onClick, ...props }) {

    const classes = useStyles();

    function onClickHandler() {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post("http://localhost:3000/upload", data, {
        }).then(res => {
            console.log(res.statusText)
        })
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