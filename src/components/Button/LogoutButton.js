import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0} from "@auth0/auth0-react";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LogoutButton(){
        return (
            <div className={useStyles.root}>
                <Button variant="contained" color="primary" onClick={logout}>
                    Log Out
                </Button>
            </div>
        );

}

function logout() {
    //window.sessionStorage.removeItem("usersub");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.clear();
    window.location.assign('http://localhost:3000');
}