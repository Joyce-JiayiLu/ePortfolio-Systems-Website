import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ResumeIcon from '@material-ui/icons/AccountBox';
import PortfolioIcon from '@material-ui/icons/Collections';
import BookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import UpdateProfileButton from "../UpdateProfileButton";
import LogoutButton from "../LogoutButton";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="User Information" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ResumeIcon />
            </ListItemIcon>
            <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PortfolioIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio Collections" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset></ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
        </ListItem>
        <UpdateProfileButton />
        <LogoutButton />
    </div>
);