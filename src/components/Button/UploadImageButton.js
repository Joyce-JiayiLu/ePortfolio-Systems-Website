import PersonIcon from '@material-ui/icons/Person';
import React from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function UploadImageButton({ className, children, onClick, ...props }) {

    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<PersonIcon />}
        >
            Update Image
        </Button>
    );
}