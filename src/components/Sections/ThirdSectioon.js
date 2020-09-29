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
                    <h2 className={classes.title}>What to Do If You Are Sick</h2>
                    <h4 className={classes.description}>
                        <p>
                            If you have a fever, cough or other symptoms, you might have COVID-19. Most people have mild illness and are able to recover at home.
                        </p>
                        <p>
                            Stay home. Most people with COVID-19 have mild illness and can recover at home without medical care. Do not leave your home, except to get medical care. Do not visit public areas.
                        </p>
                        <p>
                            Take care of yourself. Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better.
                        </p>
                        <p>
                            Stay in touch with US!
                        </p>
                        <p>
                            Post your symptoms before you get medical care. Be sure to get care if you have trouble breathing, or have any other emergency warning signs, or if you think it is an emergency.
                        </p>
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
