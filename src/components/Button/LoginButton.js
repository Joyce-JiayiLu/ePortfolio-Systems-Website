import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0} from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LoginButton() {
    const classes = useStyles();
    const { loginWithRedirect } = useAuth0();

    return (
        <div className={classes.root}>
            <div variant="contained" color="primary" onClick={() => loginWithRedirect()}>
                Log In
            </div>
        </div>
    );
}