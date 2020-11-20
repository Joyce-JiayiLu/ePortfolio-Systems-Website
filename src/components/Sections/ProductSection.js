import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocalOffer from "@material-ui/icons/LocalOffer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
// core components
import GridContainer from "../../pages/Grid/GridContainer";
import GridItem from "../../pages/Grid/GridItem";
import InfoArea from "../../pages/InfoArea/InfoArea";

import styles from "./productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Why Choose GeniuSolio...</h2>
                    <h4 className={classes.description}>
                        File storage on personal device usually brings the risk of losing records if the device went into accidents. Therefore, it's always a wise choice to store
                        important files that you do not want to take any risk on losing it. Our online storage for your e-portfolios provides one more layer of safety. What's more,
                        our platform offers our clients a place to show their great talents and excellent works to others who might also happens to be a job recruiter......
                    </h4>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Search Tags"
                            description="Divided the collection of portfolios into different types with the type tag, so that user could easily add tag to search and filter the target portfolio."
                            icon={LocalOffer}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Verified Users"
                            description="Implement the third party component Auth0 to log in or sign up, so that the user could log in or sign up with Google, and Auth0 could simply verified users. "
                            icon={VerifiedUser}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Collections Bookmark"
                            description="User could easily press the red heart in portfolio page to bookmark their favorite portfolio, and then they could easily find the bookmarked portfolios in their user center pages."
                            icon={CollectionsBookmark}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
