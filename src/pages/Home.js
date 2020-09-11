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

            <div
                style={{
                    backgroundImage: `url("https://github.com/issaafalkattan/React-Landing-Page-Template/blob/master/public/img/intro-bg.jpg?raw=true")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: 1000,
                    textAlign: "center",
                    fontSize: 90,
                    color: "white",
                    display: "flex",
                    backgroundColor: "#282c34",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                WELCOME TO THE WAREHOUSE OF PORTFOLIO.

            </div>
        </div>
    );
}

