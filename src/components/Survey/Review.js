import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FileUpload from "../FileUpload";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();
    const portfolio_tags = JSON.parse(sessionStorage.getItem("portfolio_value"))
    console.log(portfolio_tags);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Select the Masterwork you want to show
            </Typography>
            {/*<List disablePadding>*/}
                {/*{symptoms.map((symptom) => (*/}
                {/*    <ListItem className={classes.listItem} key={symptom.title}>*/}
                {/*        {symptom.title}*/}
                {/*    </ListItem>*/}
                {/*))}*/}

            {/*</List>*/}
            <Grid item xs={12} >
                <Paper className={classes.paper}>
                    <FileUpload />
                </Paper>
            </Grid>
            {/*<Grid container spacing={2}>*/}
            {/*    <Grid item xs={12} sm={6}>*/}
            {/*        <Typography variant="h6" gutterBottom className={classes.title}>*/}
            {/*            Personal Information*/}
            {/*        </Typography>*/}
            {/*        <Typography gutterBottom>{sessionStorage.getItem("firstName_inquiry")}</Typography>*/}
            {/*        <Typography gutterBottom>{sessionStorage.getItem("lastName_inquiry")}</Typography>*/}
            {/*        <Typography gutterBottom>{sessionStorage.getItem("age_inquiry")}</Typography>*/}
            {/*        <Typography gutterBottom>{sessionStorage.getItem("gender_inquiry")}</Typography>*/}
            {/*        <Typography gutterBottom>{sessionStorage.getItem("contact_number_inquiry")}</Typography>*/}
            {/*        <Typography gutterBottom>{sessionStorage.getItem("city_inquiry")}</Typography>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </React.Fragment>
    );
}