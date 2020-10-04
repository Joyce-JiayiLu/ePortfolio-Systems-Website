import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth from "./Auth";
import {Auth0Provider} from '@auth0/auth0-react';
import "./views/Homepage.css"

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const auth = new Auth();
const rootElement = document.getElementById("root");
let state = {};


window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<Auth0Provider domain={domain} clientId={clientId}> <App {...state}/></Auth0Provider>, rootElement);
}
/* eslint no-restricted-globals : 0 */
let initialState = {
    name: "haha",
    location: location.pathname.replace(/^\?|\/$/g, ""),
    auth
};
window.setState(initialState);
/*ReactDOM.render(<Auth0Provider domain={domain} clientId={clientId} >
    <App {...state}/><App/></Auth0Provider> , rootElement);*/

//ReactDOM.render(<Auth0Provider domain={domain} clientId={clientId}> <App {...state}/></Auth0Provider>, rootElement);