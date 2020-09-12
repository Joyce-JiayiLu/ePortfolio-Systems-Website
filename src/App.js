import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login"
import "./views/styles.css";
import UpdateProfile from "./pages/UpdateProfile";
import Blog from "./components/Blog/Blog";
import UserCenter from "./components/UserCenter/UserCenter";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
          <Route exact path="/">
              <Nav />
              <Home />
          </Route>
          <Route path="/login">
              <Nav />
              <Login />
          </Route>
          <Route path="/blog">
              <Blog />
          </Route>
          <Route path="/usercenter">
              <UserCenter />
          </Route>
          <Route path='/updateProfile'>
              <Nav />
              <UpdateProfile />
          </Route>
          <Route path='/user'>
              <Users/>
          </Route>

      </Switch>
    </div>
    </Router>
  );
}
