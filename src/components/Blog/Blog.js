import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './BlogHeader';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

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
];

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

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Design Square" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
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

