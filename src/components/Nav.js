import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>

        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink exact to="/login">
            Log in
        </NavLink>
        <NavLink exact to="/blog">
            Design Square
        </NavLink>
        <NavLink exact to="/usercenter">
            User Center
        </NavLink>
        <NavLink exact to="/user">
            Usercenter
        </NavLink>
    </nav>
)
}