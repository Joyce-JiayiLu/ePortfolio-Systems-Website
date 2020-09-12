import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

export default function Nav() {
    const classes = useStyles();

    return (

        <Breadcrumbs aria-label="breadcrumb">
            <Link
                color="inherit"
                href="/"
                className={classes.link}
            >
                <HomeIcon className={classes.icon} />
            </Link>
            <Link
                color="inherit"
                href="/Login"
                className={classes.link}
            >
                <VpnKeyIcon className={classes.icon} />
            </Link>
            <Link
                color="inherit"
                href="/blog"
                className={classes.link}
            >
                <WhatshotIcon className={classes.icon} />
            </Link>
            <Link
                color="inherit"
                href="/usercenter"
                className={classes.link}
            >
                <PersonIcon className={classes.icon} />
            </Link>
        </Breadcrumbs>
    );
}
