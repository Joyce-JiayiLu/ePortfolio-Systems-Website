import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";

import Parallax from "./Parallax/Parallax.js";

import styles from "./LandingPage/landingPage";

// Sections for this page

import WorkSection from "../components/Sections/WorkSection";
import SecondSection from "../components/Sections/SecondSection";
import ThirdSectioon from "../components/Sections/ThirdSectioon";
import Button from "../components/CustomButtons/CustomButton";
import Nav from "../components/Nav";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function IconLabelButtons(props) {
    const classes = useStyles();
    const {...rest} = props;

    //check if user login
    const {user, isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        console.log("yes is authenticated");
        window.sessionStorage.setItem("usersub", user.sub);
        //window.location.assign(`https://genius-solio.herokuapp.com/usercenter/${user.sub}`);
        window.location.assign(`http://localhost:3000/usercenter/${user.sub}`);
        //window.sessionStorage.setItem("userid",user_id);
        //getUserAndCreat(user_id);
    }
    return (

        <div>
            <Nav/>

            <Parallax filter image={require("./LandingPage/portfolioorange.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>GeniusSolio Collections</h1>
                            <h3>
                                Show What You Have Learn
                            </h3>
                            <br/>
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=-Pn3AAts1-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play"/>
                                Watch video
                            </Button>

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <WorkSection/>
                    <SecondSection/>
                    <ThirdSectioon/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

