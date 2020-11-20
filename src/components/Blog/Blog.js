import React, {Component, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Nav from "../Nav";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from "react-router-dom";
import SearchBar from "../SearchBar";
import Chips from "./Tag";


const sections = [
    // { title: 'Technology', url: '#' },
    // { title: 'Design', url: '#' },
];

const mainFeaturedPost = {
    title: "Dig into today's Most featured design here.",
    description:
        "",
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};
/*
const featuredPosts = [
    {
        title: 'Featured post',
        date: '',
        description:
            '',
        image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80',
        imageText: 'Image Text',
    },
    {
        title: 'Featured post',
        date: '',
        description:
            '',
        image: 'https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageText: 'Image Text',
    },
];*/

const sidebar = {
    title: 'About',
    description:
        '',
    archives: [
        { title: 'September 2020', url: '#' },
        { title: 'August 2020', url: '#' },
        { title: 'July 2020', url: '#' },
        { title: 'June 2020', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};



class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            selected: [],
        };

        // This binding is necessary to make `this` work in the callback
        //this.updateSelected = this.updateSelected.bind(this);
        this.doSomething = this.doSomething.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }

    async componentDidMount() {
        this.doSomething();

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selected !== this.state.selected) {
            this.doSomething();
        }
    }

    updateSelected(newSelected) {
        this.setState({...this.state,
            selected: newSelected
        })
    }

    async doSomething() {
        let result = await this.search();
        for (let i=0; i<result.length; i++){
            let user = await this.link_to_user(result[i].userid);
            result[i].firstname = user.first_name;
            result[i].lastname = user.last_name;
            result[i].image = user.image;
            //console.log(result[i]);
        }
        let res = [];
        if (this.state.selected.length == 0){
            this.setState({items: result});
        }else{
            result.map(discussion => {
                const tags = discussion.tag.map(s => {
                    return s;
                });
                console.log(this.state.selected);
                const ta = JSON.parse(tags);
                for (let i=0; i<ta.length; i++) {
                    //console.log(ta);
                    if (this.state.selected.includes(ta[i].title)) {
                        if(!res.includes(discussion)) {
                            res.push(discussion);
                        }
                        break;
                    }
                }

            });
            console.log(res)
            this.setState({items: res})
        }
        //console.log(result);
        //this.setState({items: result})
        return result;
    }



    search(){
        const endpoint = "https://geniusolio.herokuapp.com/collection";
        return fetch(endpoint).then(res => {
            //console.log(res);
            return res.json();
        }).then(data => {
            if(data){
                //this.setState({items: data});
                return data;
            }
        });
    }

    link_to_user(id){
        const endpoint = `https://geniusolio.herokuapp.com/user/${id}`;
        return fetch(endpoint).then(res => {
            //console.log(res);
            return res.json();
        }).then(data => {
            if(data){
                return data;
            }
        });
    }
    render() {


        const classes = makeStyles((theme) => ({
            mainGrid: {
                marginTop: theme.spacing(3),
            },
        }));
        const items = this.state.items;
        //console.log(JSON.parse(collections));
        //console.log(this.state.selected);
        console.log(items);




        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Nav />
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <SearchBar />
                        <Chips selected={this.state.selected} onChange={this.updateSelected}/>
                        <Grid container spacing={4}>
                            {items.map((post) => (
                                <FeaturedPost post={post} />
                            ))}
                        </Grid>
                    </main>
                </Container>
                <Footer title="GeniuSolio" description="Endorse your own works." />
            </React.Fragment>
        );
    }
}

export default withRouter(Blog);