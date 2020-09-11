import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveButton from "../components/SaveButton";
import DeleteButton from "../components/DeleteButton";
import UploadButton from "../components/UploadButton";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div>
            <DeleteButton></DeleteButton>
            <UploadButton></UploadButton>
            <SaveButton></SaveButton>
            <LoginButton></LoginButton>
            <LogoutButton></LogoutButton>
        </div>
    );
}

