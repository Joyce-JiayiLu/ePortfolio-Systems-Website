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
const useStyles = makeStyles(styles);

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
                window.location.assign(`http://localhost:3000/usercenter`);
                //window.location.href = `CaregiverInformation/${username}`;
            }
        });
    }
    render() {

        const classes = makeStyles(styles);
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

        //var title = collection.title;
        //var description = collection.description;

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
                                            <img src={this.state.image||"https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"} alt="" className={imageClasses}/>
                                        </div>
                                        <div className={classes.name}>
                                            <h3 className={classes.title}></h3>
                                            <input type="text"
                                                   name="title"
                                                   value = {this.state.title}
                                                   onChange= {event => this.setState({...this.state,
                                                       title: (event.target.value)})}
                                            />

                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>
                                <input type="text"
                                       name="description"
                                       value ={this.state.description}
                                       onChange={event => this.setState({...this.state,
                                           description: (event.target.value)})}
                                />
                            </div>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                    <DocView
                                        style={{
                                            width: "1200px",
                                            height: "780px",
                                            border: 'none',
                                            position: 'relative'
                                        }}
                                        // change src to show the pdf you want
                                        src={this.state.file}/>

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
export default withRouter(ProfileePage);