import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import {mainListItems, secondaryListItems, thirdListItems} from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Avatar from "@material-ui/core/Avatar";
import {getUserAndCreat, useCollections, useUsers} from "../../api";
import UpdateProfileButton from "../Button/UpdateProfileButton";
import UploadImageButton from "../Button/UploadImageButton";
import FileUpload from "../FileUpload";
import DocEditor from "../DocEditor";
import Checkout from "../Survey/Checkout";
import jwt_decode from "jwt-decode";
import FeaturedPost from "../Blog/FeaturedPost";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://genius-solio.herokuapp.com/">
                GeniuSolio
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 350,
        align: "center",
    },
    buttonBottom: {
        marginTop: 70,
    },

    imagePosition: {
        marginLeft: 90,
    },
    largeIcon: {
        width: 77,
        height: 77,
    },
}));

export default function Dashboard() {
    const [isAddingNew, setIsAddingNew] = React.useState(false);

    if (!window.localStorage.getItem("id_token")) {
        // window.location.assign("https://genius-solio.herokuapp.com/login")
        window.location.assign(`http://localhost:3000/login`);
    }
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let userid;
    userid = username.slice(index + 1);

    let user_token = localStorage.getItem("id_token");
    let user_sub = jwt_decode(user_token).sub;


    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const {loading, users, error} = useUsers();
    const {loadingg, collections, errorr} = useCollections();
    if (loading||loadingg) {
        return <p>Loading...</p>;
    }
    if (error||errorr) {
        return <p>Something went wrong: {error.message}</p>;
    }
    let items = [];
    console.log(collections);
    collections.map(collect => {
        if (collect.userid === user_sub) {
            items.push(collect);
        }
    });

    //console.log(items);
    /*
    let first_name;
    let last_name;
    let introduction;
    {users.map(user => {
        if(user.userid===window.sessionStorage.getItem("usersub")){
            first_name = user.first_name;
            last_name  = user.last_name;
            introduction = user.introduction;
        }})}*/
    //console.log(first_name);
    let image;
    let firstname;
    let lastname;

        users.map(user => {
            if (user.userid === user_sub) {
                image = user.image;
                firstname = user.first_name;
                lastname = user.last_name;
            }
        });

    for (let i=0; i<items.length; i++){
        items[i].firstname = firstname;
        items[i].lastname = lastname;
        items[i].image = image;
        //console.log(result[i]);
    }

    let contentDisplay;

    if (isAddingNew) {
        contentDisplay = <Grid item xs={12}>
            <Checkout/>
        </Grid>
    }
    else {
        contentDisplay = <Grid item xs={12} container spacing={4}>
            {items.map((post) => (
                <FeaturedPost post={post} />
            ))}
            <Grid item xs={12} md={6} onClick={() => addNewPortfolio()}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">

                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">

                                </Typography>
                                <Typography variant="subtitle1" paragraph>

                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    <AddIcon className={classes.largeIcon}/>
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia}/>
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        </Grid>
    }

    const addNewPortfolio = () => {
        setIsAddingNew(true);
    }

    const backToMyPortfolio = () => {
        setIsAddingNew(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <IconButton color="inherit" onClick={() => backHomePage()}>
                        <HomeIcon/>
                    </IconButton>

                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        User Center
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Avatar alt="/static/images/avatar/1.jpg" src={image}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>{mainListItems}</List>
                <Divider/>
                <List>{thirdListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3} justify={"center"}>
                        {contentDisplay}
                    </Grid>

                    <Box pt={4} className={classes.buttonBottom}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}

function backHomePage() {
    // window.location.assign(`https://genius-solio.herokuapp.com/`);
    window.location.assign(`http://localhost:3000/`);
}


