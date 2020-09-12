import React, { useState } from "react";

import {checkUser, updateUserProfile} from "../api";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from "@material-ui/icons/Save";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    divStyle: {
        margin: "auto",
    },
    textFieldStyle: {
        margin: theme.spacing(1),
        width: 300,
    },
    button: {
        margin: theme.spacing(1),
        width: 300,
    }
}));

export default function UpdateProfile() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.divStyle}>
            <TextField required id="first_name" label="firstname" variant="outlined" className={classes.textFieldStyle} />

            <TextField required id="last_name" label="lastname" variant="outlined" className={classes.textFieldStyle} />
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="genderInput">Gender</InputLabel>
                    <Select
                        labelId="genderSelect"
                        name="gender"
                        value={gender}
                        onChange={handleChangeGender}
                        label="gender(male/female)"
                    >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <form noValidate>
                    <TextField
                        id="age"
                        label="Birthday"
                        type="string"
                        defaultValue="2000-05-24"
                        className={classes.textFieldStyle}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </form>
            </div>

            <TextField id="address" label="address(city)" variant="outlined" className={classes.textFieldStyle} />
            <TextField id="working_experience" label="working experience(years)" variant="outlined" className={classes.textFieldStyle} />
            <TextField id="contact_information" label="contact information" variant="outlined" className={classes.textFieldStyle} />
            <div>
                <TextField required multiline rows={5} id="introduction" label="introduction" variant="outlined" className={classes.textFieldStyle} />
            </div>
            </div>
            <div className={classes.divStyle}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={() => onSubmit(gender)}
                >
                    Save
                </Button>
            </div>
        </form>


        {/*<div className="addCaregiver">*/}
        {/*    <h1>Update Profile</h1>*/}
        {/*    <table id='profile'>*/}
        {/*        <tr><td>firstname</td> <td><textarea rows = "1" cols = "40" id="first_name">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr><td>lastname</td> <td><textarea rows = "1" cols = "40" id="last_name">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr><td>gender(male/female)</td> <td><textarea rows = "1" cols = "40" id="gender">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr><td>age</td><td><textarea rows = "1" cols = "40" id="age">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr><td>address(city)</td><td><textarea rows = "1" cols = "40" id="address">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr><td>working experience(years)</td><td><textarea rows = "1" cols = "40" id="working_experience">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr><td>contact infromation</td><td><textarea rows = "1" cols = "40" id="contact_information">*/}
        {/* </textarea></td></tr>*/}
        {/*        <tr height={'100px'}><td>introduction</td><td><textarea rows = "5" cols = "40" id="introduction">*/}
        {/* </textarea></td></tr>*/}
        {/*        <Button className={"btn-success"} onClick={() => onSubmit()}>*/}
        {/*            Save*/}
        {/*        </Button>*/}
        {/*    </table>*/}
        {/*</div>*/}
        </div>
    );
}

function onSubmit(gender) {

    let userid;
    userid = window.sessionStorage.getItem("usersub");
    console.log(userid);
   // userid = window.sessionStorage.getItem("userid");
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    //var gender = document.getElementById("gender").value;
    // var working_experience = document.getElementById("working_experience").value;
    // var salary = document.getElementById("salary").value;
    var introduction = document.getElementById("introduction").value;
    var age = document.getElementById("age").value;
    console.log(age);
    console.log(gender);

    // var age = document.getElementById("age").value
    // var address = document.getElementById("address").value;
    // var contact_information = document.getElementById("contact_information").value;
    //const userid = window.sessionStorage.getItem("userid");
    updateUserProfile({
        userid,
        first_name,
        last_name,
        gender,
        introduction,
        age,
        // username,
        // age,
        // address,
        // salary,
        // working_experience,
        // contact_information,
    });
}