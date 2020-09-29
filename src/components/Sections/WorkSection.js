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
          <h2 className={classes.title}>The Greatest Threat for Humans in Decades</h2>
          <h4 className={classes.description}>
            Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS).

            A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans.

            The coronavirus COVID-19 pandemic is the defining global health crisis of our time and the greatest challenge we have faced since World War Two. Since its emergence in Asia late last year, the virus has spread to every continent except Antarctica.
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
