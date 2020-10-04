import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import Avatar from "@material-ui/core/Avatar";
import {getUserAndCreat, useUsers} from "../../api";
import UpdateProfileButton from "../Button/UpdateProfileButton";
import jwt_decode from "jwt-decode";
import Upload from "../Upload";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://genius-solio.herokuapp.com/usercenter">
                Your Website
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
        height: 440,
    },
    fixedHeightImage: {
        height: 240,
    },

    buttonBottom: {
        marginTop: 50,
    },

    imagePosition: {
        marginLeft: 90,
        marginTop: 700,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(35),
        height: theme.spacing(35),
    },

}));

export default function Dashboard() {
    if(!window.localStorage.getItem("access_token")){

        window.location.assign("https://genius-solio.herokuapp.com/login")
    }

    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let userid;
    userid = username.slice(index+1);

    var user_token = localStorage.getItem("id_token");
    var user_sub = jwt_decode(user_token).sub;
    console.log(jwt_decode(user_token))

    // getUserAndCreat(window.sessionStorage.getItem("usersub"));
    getUserAndCreat(user_sub);


    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaperImage = clsx(classes.paper, classes.fixedHeightImage);


    const { loading, users, error } = useUsers();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    let first_name;
    let last_name;
    let introduction;
    let gender;
    let age;
    let image;
    {users.map(user => {
        if(user.userid===user_sub){
            first_name = user.first_name;
            console.log(first_name);
            console.log(user.userid);
            last_name  = user.last_name;
            introduction = user.introduction;
            gender = user.gender;
            age = user.age;
            image = user.image;
        }})}
     //console.log(first_name);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => backHomePage()}>
                        <HomeIcon />
                    </IconButton>

                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        User Center
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                    <Avatar alt="/static/images/avatar/1.jpg" src={image} />
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
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List><Divider />
                <List>{thirdListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <p>firstname: {first_name}</p>
                                <p>lastname:  {last_name}</p>
                                <p>gender:  {gender}</p>
                                <p>birthday:  {age}</p>
                                <p>introduction:  {introduction}</p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p className={classes.buttonBottom}><UpdateProfileButton /></p>

                            </Paper>

                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            {/*<Paper className={fixedHeightPaperImage}>*/}
                            {/*    <p>*/}
                            {/*        <IconButton color="inherit">*/}
                            {/*        <Avatar className={classes.imagePosition} alt="" src={image} className={classes.large}/>*/}
                            {/*        </IconButton>*/}
                            {/*    </p>*/}
                                <div className={classes.buttonBottom}>
                                    <Upload/>
                                </div>
                            {/*</Paper>*/}
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                    <Box pt={4} className={classes.buttonBottom}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>

    );
}

function backHomePage(){
    window.location.assign(`https://genius-solio.herokuapp.com/`);
}