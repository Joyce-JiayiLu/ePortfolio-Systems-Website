import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import BurstMode from "@material-ui/icons/BurstMode";
import AccountBox from "@material-ui/icons/AccountBox";
import Favorite from "@material-ui/icons/Favorite";
import Comment from "@material-ui/icons/Comment";
import Delete from "@material-ui/icons/Delete";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookMarkFile from "../components/Bookmark/Favorite";
import DeletePost from "../components/Bookmark/DeletePost";

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
import {addBookmark, deleteCollection, useCollections, useUsers} from "../api";
import Nav from "../components/Nav";
import DocView from "../components/DocView";
import IconButton from "@material-ui/core/IconButton";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
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
    let user_sub = window.sessionStorage.getItem("spec_userid");
    let first_name;
    let last_name;
    let title;
    let description;
    let cover;
    let file;
    let image;
    let userid;
    var user_token = localStorage.getItem("id_token");
    var myuserid = jwt_decode(user_token).sub;


    {
        collections.map(collection => {
            if (collection["_id"] === user_sub) {
                title = collection.title;
                description = collection.description;
                cover = collection["cover"];
                file = collection.file;
                userid = collection.userid;
            }
        })
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
                                        <img src={image || "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"}
                                             alt="" className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{first_name} {last_name}</h3>
                                        <h2>{title}</h2>
                                        {/*<Button justIcon link className={classes.margin5}>*/}
                                        {/*    <Favorite/>*/}
                                        {/*</Button>*/}


                                        <BookMarkFile myuserid={myuserid} user_sub={user_sub} onClick={()=>addBookmark(myuserid,user_sub)} className={classes.margin5} aria-label="Bookmark"/>






                                        {/*<Button justIcon link className={classes.margin5} >*/}
                                        {/*<IconButton aria-label="delete" justIcon link className={classes.margin5}>*/}
                                        {/*    <Delete />*/}
                                        {/*</IconButton>*/}
                                        {/*</Button>*/}
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                {description}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Portfolio",
                                            tabIcon: BurstMode,
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
                                            tabButton: "Resume",
                                            tabIcon: AccountBox,
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
                                            tabButton: "Comment",
                                            tabIcon: Comment,
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
                        {deleteEnable(userid,user_sub)}
                        {update(userid,user_sub)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

function deleteEnable(userid, postid){
     if (localStorage.getItem("id_token")) {
         var user_token = localStorage.getItem("id_token");
         var user = jwt_decode(user_token).sub;
         if (user === userid) {
             return (
                 <Button onClick={() => deleteCollection(postid)}>delete</Button>
             )
         }
     }
 }
 function update(userid, postid){
     if (localStorage.getItem("id_token")) {
         var user_token = localStorage.getItem("id_token");
         var user = jwt_decode(user_token).sub;
         if (user === userid) {
             return (
                 <Button onClick={() => {
                     window.sessionStorage.setItem("spec_collection", postid);
                     window.location.assign(`http://localhost:3000/userupadteportfolio`);}}>update</Button>
             )
         }

     }
 }
