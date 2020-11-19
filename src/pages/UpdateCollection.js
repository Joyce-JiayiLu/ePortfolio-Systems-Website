import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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
import {useEffect, useState} from "react";
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
import {getCollectionId, updateCollection, useCollections, useUsers} from "../api";
import Nav from "../components/Nav";
import DocView from "../components/DocView";

const useStyles = makeStyles(styles);

export default function ProfileePage(props) {
    var user_sub = window.sessionStorage.getItem("spec_collection");
    var collection = getCollectionId(user_sub);
    const [title, Settitle] = useState(collection.title);
    const [description, Setdescription] = useState(collection.description);
    const classes = useStyles();
    const {...rest} = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const {loading, collections, error} = useCollections();
    const {loadingg, users, errorr} = useUsers();
    if (loading||loadingg) {
        return <p>Loading...</p>;
    }
    if (error||errorr) {
        return <p>Something went wrong: {error.message}</p>;
    }

    //var title = collection.title;
    //var description = collection.description;
    var cover = collection["cover"];
    var file = collection.file;
    var userid = collection.userid;

    let first_name;
    let last_name;
    let image;
    function onSubmit() {
        // call upate author function
        updateCollection(userid,title,description
            );
    }
    {
        users.map(user => {
            if (user.userid === userid) {

                first_name = user.first_name;
                last_name = user.last_name;
                image = user.image;
                console.log("image: ", {image});
            }
        })
    }
    return (
        <div>
            <Nav/>
            <Parallax small filter image={cover}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={image || "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"} alt="" className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{first_name} {last_name}</h3>
                                        <input type="text"
                                               name="title"
                                               value = {title}
                                               onChange={event => {
                                                   Settitle(event.target.value);
                                               }}
                                        />

                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <input type="text"
                                   name="description"
                                   value = {description}
                                   onChange={event => {
                                       Setdescription(event.target.value);
                                   }}
                            />
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Studio",
                                            tabIcon: Camera,
                                            tabContent: (
                                                <GridContainer justify="center">


                                                    <div>
                                                        <DocView
                                                            style={{
                                                                width: "1200px",
                                                                height: "780px",
                                                                border: 'none',
                                                                position: 'relative'
                                                            }}
                                                            // change src to show the pdf you want
                                                            src={file}/>
                                                    </div>

                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Work",
                                            tabIcon: Palette,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={work1}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={work2}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={work3}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={work4}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={work5}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Favorite",
                                            tabIcon: Favorite,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={work4}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={studio3}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={work2}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={work1}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={studio1}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>

                    </div>
                </div>
            </div>
            <Footer/>
            <Button  onClick={onSubmit}>
                Update
            </Button>
        </div>
    );
}
