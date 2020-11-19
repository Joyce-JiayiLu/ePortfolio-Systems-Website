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
                    <h2 className={classes.title}>What You Can Do With Our Platform...</h2>
                    <h4 className={classes.description}>
                        <p>
                            Show others your talents!
                        </p>
                        <p>
                            Find another safety place for your files!
                        </p>
                        <p>
                            Browse through great works created by others like you!
                        </p>
                        <p>
                            Meet job recruiters with opportunities!
                        </p>
                        <p>
                            Stay in touch with US!
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
