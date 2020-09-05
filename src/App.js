import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Authors from "./pages/Authors";

import "./views/styles.css";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Header />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>
      <Home />
    </div>
    </Router>
  );
}
