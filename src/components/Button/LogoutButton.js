import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0} from "@auth0/auth0-react";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LogoutIcon from "@material-ui/icons/ExitToApp";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LogoutButton(){
        const {logout} = useAuth0();
        return (
            <div className={useStyles.root}>
                <div variant="contained" color="primary"  onClick={()=>logout({returnTo:window.location.origin}) & clearStorage()}>
                    <div>
                        <ListSubheader inset></ListSubheader>
                        <ListItem button >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary = "Log out" />
                        </ListItem>
                    </div>
                </div>
            </div>
        );

}

function clearStorage() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}