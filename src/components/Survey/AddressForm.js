import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import FileUpload from "../FileUpload";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },


}));

export default function AddressForm() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Submit Your Title
            </Typography>
            <Grid container spacing={3}>


                <Grid item xs={12}>
                    <TextField
                        required
                        id="title_portfolio"
                        name="title_portfolio"
                        label="Portfolio Title"
                        fullWidth
                        autoComplete="portfolio title"
                    />
                </Grid>

            </Grid>
            <br/>
            <Typography variant="h6" gutterBottom>
                Submit Your Cover Picture
            </Typography>
            <Grid container spacing={3}>


                <Grid item xs={12} >
                    <Paper className={classes.paper}>
                        <FileUpload />
                    </Paper>
                </Grid>

                {/*{<Grid item xs={12}>*/}
                {/*    <FormControlLabel*/}
                {/*        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}*/}
                {/*        label="Use this address for payment details"*/}
                {/*    />*/}
                {/*</Grid>}*/}
            </Grid>
        </React.Fragment>
    );
}