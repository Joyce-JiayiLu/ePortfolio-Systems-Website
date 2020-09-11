import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SaveButton({ className, children, onClick, ...props }) {

    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
        >
            Save
        </Button>
    );
}