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
import {useAuth0} from "@auth0/auth0-react";
import FileUpload from "../components/FileUpload";
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    //check if user login
    const { user, isAuthenticated }  = useAuth0();
    if (isAuthenticated){
        console.log("yes is authenticated");
        window.sessionStorage.setItem("usersub",user.sub);
        window.location.assign(`http://localhost:3000/usercenter/${user.sub}`);
        //window.sessionStorage.setItem("userid",user_id);
        //getUserAndCreat(user_id);
    }
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
                    color: "grey",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                WELCOME TO THE WAREHOUSE OF PORTFOLIO.

            </div>
            <FileUpload/>
        </div>
    );
}

