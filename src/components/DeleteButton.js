import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function DeleteButton({ className, children, onClick, ...props }) {

    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    );
}