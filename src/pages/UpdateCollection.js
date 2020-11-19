import React, {Component} from "react";
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
import {getUsers, getCollections,getCollection} from "../api";
import {withRouter} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Paper from "@material-ui/core/Paper";
import FileUpload from "../components/FileUpload";
import Grid from "@material-ui/core/Grid";
import UpdateUpload from "../components/UpdateUpload";
import TextField from "@material-ui/core/TextField";
import imagesStyle from "./UserPortfolio/imagesStyles";
import { withStyles } from '@material-ui/styles';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    }
};

const title = {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const useStyles = theme => ({
    imgFluid: {
        maxWidth: "100%",
        height: "auto"
    },
    imgRounded: {
        borderRadius: "6px !important"
    },
    imgRoundedCircle: {
        borderRadius: "50% !important"
    },
    imgRaised: {
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    imgGallery: {
        width: "100%",
        marginBottom: "2.142rem"
    },
    imgCardTop: {
        width: "100%",
        borderTopLeftRadius: "calc(.25rem - 1px)",
        borderTopRightRadius: "calc(.25rem - 1px)"
    },
    imgCardBottom: {
        width: "100%",
        borderBottomLeftRadius: "calc(.25rem - 1px)",
        borderBottomRightRadius: "calc(.25rem - 1px)"
    },
    imgCard: {
        width: "100%",
        borderRadius: "calc(.25rem - 1px)"
    },
    imgCardOverlay: {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        padding: "1.25rem"
    },
    profile: {
        textAlign: "center",
        "& img": {
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)"
        }
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    },
    updatedescription: {
        margin: "1.071rem auto 0",
        marginTop: "3px",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    },
    name: {
        marginTop: "-80px"
    },
    ...imagesStyle,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    },

});



class ProfileePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cover:"",
            image: "",
            description:"",
            userid:"",
            title:"",
            file:"",
            first_name:"",
            last_name:"",
        };

        // This binding is necessary to make `this` work in the callback
        //this.updateSelected = this.updateSelected.bind(this);
        this.doSomething = this.doSomething.bind(this);
        //this.updateSelected = this.updateSelected.bind(this);
    }
    async componentDidMount() {
        this.doSomething();
    }
    async doSomething(){
        let result = await this.getCollection();
        this.setState({userid: result.userid});
        this.setState({cover: result.cover});
        this.setState({description: result.description});
        this.setState({title: result.title});
        this.setState({file: result.file});
        let user = await this.getUser();
        this.setState({image: user.image});
        this.setState({first_name: user.first_name});
        this.setState({last_name: user.last_name});
    }
    getCollection(){
        let id = window.sessionStorage.getItem("spec_collection");
        const endpoint = `https://geniusolio.herokuapp.com/collection/${id}`;
        return fetch(endpoint).then(res => {
            console.log(res);
            return res.json();
        }).then(data=>{
            if(data){
                return data;
            }
        });
    }
    getUser(){
        const endpoint = `https://geniusolio.herokuapp.com/user/${this.state.userid}`;
        return fetch(endpoint).then(res => {
            console.log(res);
            return res.json();
        }).then(data=>{
            if(data){
                return data;
            }
        });
    }
    onSubmit() {
        let id = window.sessionStorage.getItem("spec_collection");
        const endpoint = `https://geniusolio.herokuapp.com/collection/${id}`;
        return fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": this.state.title,
                "description": this.state.description,
                "cover": this.state.cover,
                "file": this.state.file,
            })
        }).then(res => {
            if (res.ok) {
                //window.location.assign(`https://genius-solio.herokuapp.com/usercenter`)
                window.location.assign(`http://localhost:3000/userupadteportfolio`);
                window.sessionStorage.removeItem("spec_collection")
                //window.location.href = `CaregiverInformation/${username}`;
            }
        });
    }
    parentFunction=(data_from_child)=>{
        this.setState({file: data_from_child});
    }
    render() {
        const {...rest} = this.props;
        const { classes } = this.props;

        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

        //var title = collection.title;
        //var description = collection.description;
        console.log(this.state.file);

        return (
            <div>
                <Nav/>
                <Parallax small filter image={this.state.cover}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={this.state.image||"https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"}
                                                 alt="" className={imageClasses}/>
                                        </div>
                                        <div className={classes.name}>
                                            <h3 className={classes.title}>Title</h3>


                                        </div>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Title"
                                            defaultValue="Default Value"

                                            variant="outlined"
                                            type="text"
                                            name="title"
                                            value = {this.state.title}
                                            onChange= {event => this.setState({...this.state,
                                                title: (event.target.value)})}
                                        />

                                        <div >
                                            <h3 className={classes.title}>Description</h3>


                                        </div>


                                        <textarea rows = "5" cols = "60"
                                            
                                            aria-label="Description"
                                            placeholder="Description"
                                                name="description"
                                                value ={this.state.description}
                                                onChange={event => this.setState({...this.state,
                                                    description: (event.target.value)})}
                                        />


                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                    <GridContainer justify="center">
                                    <DocView
                                        style={{
                                            width: "1200px",
                                            height: "780px",
                                            border: 'none',
                                            position: 'relative'
                                        }}
                                        // change src to show the pdf you want
                                        src={this.state.file}/>
                                    <Grid item xs={12} >
                                        <Paper className={classes.paper}>
                                            <UpdateUpload functionCallFromParent={this.parentFunction.bind(this)}/>
                                        </Paper>
                                    </Grid>
                                        </GridContainer>
                                </GridItem>

                            </GridContainer>

                        </div>
                    </div>
                </div>
                <Footer/>
                <Button onClick={()=>this.onSubmit()}>
                    Update
                </Button>
            </div>
        );
    }
}
//export default withRouter(ProfileePage);
export default withStyles(useStyles)(ProfileePage);