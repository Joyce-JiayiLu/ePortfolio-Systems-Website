import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";


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
        </React.Fragment>
    );
}

const portfolioTags = [
    { title: 'Fever (≥38 °C)'},
    { title: 'Sore throat'},
    { title: 'Runny nose'},
    { title: 'Dry Cough'},
    { title: 'Shortness of Breath'},
    { title: "Vomiting"},
    { title: 'Nausea'},
    { title: 'Diarrhea'},
    { title: 'Tiredness'},
    { title: 'Conjunctivitis'},
    { title: 'Loss of Taste'},
    { title: 'Loss of Smell'},
    { title: 'Rash on Skin'},
    { title: 'Discolouration of Fingers or Toes'},
    { title: 'Chest Pain or Pressure'},
];
console.log(document.getElementById("symptoms"))