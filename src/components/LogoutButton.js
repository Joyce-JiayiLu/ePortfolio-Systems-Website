import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useAuth0} from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LogoutButton() {
    const classes = useStyles();
    const { logout } = useAuth0();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={() => logout()}>
                Log Out
            </Button>
        </div>
    );
}