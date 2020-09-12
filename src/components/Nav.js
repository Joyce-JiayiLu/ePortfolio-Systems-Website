import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PortfolioIcon from "@material-ui/icons/Collections";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Nav() {
    return (
        <nav>
            <NavLink exact to="/">
                <HomeIcon />
            </NavLink>

        <NavLink exact to="/blog">
            <PortfolioIcon />
        </NavLink>
        <NavLink exact to="/usercenter">
            <AccountCircleIcon />
        </NavLink>
    </nav>
)
}

function backHomePage(){
    window.location.assign(`http://localhost:3000/`);
}