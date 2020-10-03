import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "./Footer/Footer";
import Button from "../components/CustomButtons/CustomButton";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import NavPills from "./NavPills/NavPills.js";
import Parallax from "./Parallax/Parallax.js";

import profile from "./UserPortfolio/faces/christian.jpg";

import studio1 from "./UserPortfolio/examples/studio-1.jpg";
import studio2 from "./UserPortfolio/examples/studio-2.jpg";
import studio3 from "./UserPortfolio/examples/studio-3.jpg";
import studio4 from "./UserPortfolio/examples/studio-4.jpg";
import studio5 from "./UserPortfolio/examples/studio-5.jpg";
import work1 from "./UserPortfolio/examples/olu-eletu.jpg";
import work2 from "./UserPortfolio/examples/clem-onojeghuo.jpg";
import work3 from "./UserPortfolio/examples/cynthia-del-rio.jpg";
import work4 from "./UserPortfolio/examples/mariya-georgieva.jpg";
import work5 from "./UserPortfolio/examples/clem-onojegaw.jpg";

import styles from "./UserPortfolio/profilePage";
import {useCollections, useUsers} from "../api";
import Nav from "../components/Nav";
import DocView from "../components/DocView";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const { loading, collections, error } = useCollections();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    let user_sub = window.sessionStorage.getItem("spec_userid");
    let first_name;
    let last_name;
    let title;
    let description;
    let cover;
    let file;
    {collections.map(collection => {
        if(collection.userid===user_sub){
            first_name = collection.first_name;
            last_name  = collection.last_name;
            title = collection.title;
            description = collection.description;
            cover = collection["cover"];
            file = collection.file;
        }})}
    console.log(title);
    return (
        <div>
            <Nav />
            <Parallax small filter image={require("./UserPortfolio/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={cover} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{first_name} {last_name}</h3>
                                        <h2>{title}</h2>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-twitter"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-facebook"} />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div>
                            <DocView
                                style = {{
                                    width:"1200px",
                                    height:"780px",
                                    border: 'none',
                                    position: 'relative'
                                }}
                                // change src to show the pdf you want
                                src={file}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
