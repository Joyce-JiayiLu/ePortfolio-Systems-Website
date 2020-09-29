import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
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
