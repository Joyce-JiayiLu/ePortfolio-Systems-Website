import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useAuth0} from "@auth0/auth0-react";
import FileUpload from "../components/FileUpload";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

// @material-ui/icons

// core components

import Footer from "./Footer/Footer.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";

import Parallax from "./Parallax/Parallax.js";

import styles from "./LandingPage/landingPage";

// Sections for this page

import WorkSection from "../components/Sections/WorkSection";
import SecondSection from "../components/Sections/SecondSection";
import ThirdSectioon from "../components/Sections/ThirdSectioon";

const useStyles = makeStyles(styles);

export default function IconLabelButtons(props) {
    const classes = useStyles();
    const { ...rest } = props;

    //check if user login
    const { user, isAuthenticated }  = useAuth0();
    if (isAuthenticated){
        console.log("yes is authenticated");
        window.sessionStorage.setItem("usersub",user.sub);
        window.location.assign(`http://localhost:3000/usercenter/${user.sub}`);
        //window.sessionStorage.setItem("userid",user_id);
        //getUserAndCreat(user_id);
    }
    return (

        <div>

            <Parallax filter image={require("./LandingPage/247touch.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>PANDEMICHAT</h1>
                            <h3>
                                Best Care For You During the Epidemics
                            </h3>
                            <br />

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <WorkSection />
                    <SecondSection />
                    <ThirdSectioon />
                </div>
            </div>
            <Footer />
        </div>
    );
}

