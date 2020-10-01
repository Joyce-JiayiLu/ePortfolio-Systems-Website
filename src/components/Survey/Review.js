import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import FileUpload from "../FileUpload";
import Paper from "@material-ui/core/Paper";

const products = [
    { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
    { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

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
    const symptoms = JSON.parse(sessionStorage.getItem("portfolio_value"))
    console.log(symptoms);
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