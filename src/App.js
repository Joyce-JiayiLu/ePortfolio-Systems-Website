import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login"
import "./views/styles.css";
import UpdateProfile from "./pages/UpdateProfile";
import Blog from "./components/Blog";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/blog">
              <Blog />
          </Route>
          <Route path='/updateProfile'>
              <UpdateProfile />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}
