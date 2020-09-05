import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login"
import "./views/styles.css";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}
