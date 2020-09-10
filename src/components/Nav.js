import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return <nav>

    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/Login">
      Log in
    </NavLink>
    <NavLink exact to="/blog">
      My Blog
    </NavLink>
    <NavLink exact to="/user">
      Usercenter
    </NavLink>
  </nav>;
}
