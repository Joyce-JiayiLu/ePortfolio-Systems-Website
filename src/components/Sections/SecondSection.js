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
                    <h2 className={classes.title}>Protect yourself and others from COVID-19</h2>
                    <h4 className={classes.description}>
                        Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.
                        Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COVID-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).
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
