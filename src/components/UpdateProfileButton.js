import PersonIcon from '@material-ui/icons/Person';
import React from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {useAuth0} from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function UpdateProfileButton({ className, children, onClick, ...props }) {

    const classes = useStyles();
    const { user }  = useAuth0();

    return (
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<PersonIcon />}
            onClick={() => updateUserProfile(user)}
        >
            Update Profile
        </Button>
    );
}

function updateUserProfile(user){
    window.location.assign(`http://localhost:3000/updateProfile/${user.sub}`);
}