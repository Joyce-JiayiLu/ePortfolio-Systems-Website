import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import DocEditor from "../DocEditor";


export default function PaymentForm() {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Portfolio Tags
            </Typography>
            <Grid>add your portfolio tags</Grid>
            <Autocomplete
                onChange={(event, value) => sessionStorage.setItem("portfolio_value",JSON.stringify(value))}
                multiple
                id="tags-standard"
                options={portfolioTags}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Portfolio Tags"
                        placeholder="Favorites"
                    />
                )}
            />
            <Typography variant="h6" gutterBottom>
                Description
            </Typography>
            <Grid>add your description to your beloved project ()</Grid>
            <Grid><DocEditor /></Grid>
        </React.Fragment>
    );
}

const portfolioTags = [
    { title: 'Art'},
    { title: 'Chemistry'},
    { title: 'Physics'},
    { title: 'Architecture'},
    { title: 'Business'},
    { title: "Law"},
    { title: 'Politics'},
    { title: 'Education'},
    { title: 'Health'},
    { title: 'Biochemical Medicine'},
    { title: 'Computer Science'},
    { title: 'Mathematics & Statistics'},
    { title: 'Gaming'},
    { title: 'Technology'},
    { title: 'Philosophy'},
    { title: 'Marxism'},
    { title: 'Religion'},
    { title: 'History'},
];
console.log(document.getElementById("symptoms"))