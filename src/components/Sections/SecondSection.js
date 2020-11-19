import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../pages/Grid/GridContainer";
import GridItem from "../../pages/Grid/GridItem";


import styles from "./workStyle";

const useStyles = makeStyles(styles);

export default function WorkSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Why Choose GeniuSolio...</h2>
                    <h4 className={classes.description}>
                        File storage on personal device usually brings the risk of losing records if the device went into accidents. Therefore, it's always a wise choice to store
                        important files that you do not want to take any risk on losing it. Our online storage for your e-portfolios provides one more layer of safety. What's more,
                        our platform offers our clients a place to show their great talents and excellent works to others who might also happens to be a job recruiter......
                    </h4>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>

                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>

                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>

                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}
