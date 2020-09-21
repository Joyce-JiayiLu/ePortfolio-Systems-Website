import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0} from "@auth0/auth0-react";

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
                <div variant="contained" color="primary" onClick={logout}>
                    Log Out
                </div>
            </div>
        );

}

function logout() {
    //window.sessionStorage.removeItem("usersub");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    window.location.assign('http://localhost:3000');
}