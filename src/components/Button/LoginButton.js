import React,{Component} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useAuth0} from "@auth0/auth0-react";
import Button from "./Button";
import auth from "../../Auth"

const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
});

class LoginButton extends Component {

    render() {
        //const auth0 = new auth();
        return (
            <div className={useStyles.root}>
                <div variant="contained" color="primary" onClick={this.props.auth.login}>
                    Log In
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(LoginButton)