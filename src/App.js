import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import "./views/styles.css";
import UpdateProfile from "./pages/UpdateProfile";
import Blog from "./components/Blog/Blog";
import Dashboard from "./components/UserCenter/Dashboard";
import Users from "./pages/Users";
import PortfolioCollections from "./components/UserCenter/PortfolioCollections";
import Resume from "./components/UserCenter/Resume";
import Callback from "./pages/Callback";



export default class App extends Component {
    render() {

        return (

            <Router>

                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Nav/>
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Nav/>
                            <Login {...this.props} />
                        </Route>
                        <Route path="/callback">
                            <Callback/>
                        </Route>
                        <Route path="/blog">
                            <Blog/>
                        </Route>
                        <Route path="/usercenter">
                            <Dashboard {...this.props}/>
                        </Route>
                        <Route path="/portfoliocollections">
                            <PortfolioCollections/>
                        </Route>
                        <Route path="/resume">
                            <Resume/>
                        </Route>
                        <Route path='/updateProfile'>
                            <Nav/>
                            <UpdateProfile/>
                        </Route>
                        <Route path='/user'>
                            <Users/>
                        </Route>
                    </Switch>
                </div>

            </Router>

        );
    }
}
