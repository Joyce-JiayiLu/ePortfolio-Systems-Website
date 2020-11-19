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
          <h2 className={classes.title}>Why We Are Here...</h2>
          <h4 className={classes.description}>
            With the key objectives of nurturing engaged and reflective learners, ePortfolio has been implemented to
            offer a platform for students to document, manage and reflect upon their own learning during their study.
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
