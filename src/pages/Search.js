
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../components/Blog/MainFeaturedPost';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Sidebar from '../components/Blog/Sidebar';
import Footer from '../components/Blog/Footer';
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import {search, updateUserProfile, useCollections, useSearch, useUsers} from "../api";
import Nav from "../../src/components/Nav";
import SearchBar from "material-ui-search-bar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

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



export default function Result() {
    const classes = useStyles();
    var collections = search();
    //console.log(JSON.parse(collections));
    const [query, setQuery] = useState("");


    function searching() {
        window.sessionStorage.setItem("keyword", query);
        window.location.assign("http://localhost:3000/search");
    }

    function search(){
        var name = window.sessionStorage.getItem("keyword");
        console.log(name);
        const endpoint = "https://geniusolio.herokuapp.com/search";
        return fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name
            })
        }).then(res => {
            //console.log(res.json());
            return res.json();
        }).then(data => {
            if(data){
                console.log(data);
                return data;
            }
        });
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Nav />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <div className={classes.search} >
                        <InputBase
                            id="Testing"
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => searching()}
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Grid container spacing={4}>
                        {collections.map((post) => (
                            <FeaturedPost key={post.userid} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/*<Main title="From the firehose" posts={posts} />*/}
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer title="GeniuSolio" description="Endorse your own works." />
        </React.Fragment>
    );
}

