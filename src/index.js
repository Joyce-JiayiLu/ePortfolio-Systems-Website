import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth from "./Auth";
import {Auth0Provider} from '@auth0/auth0-react';
import { TextureLoader, WebGLRenderTarget, Object3D, LinearFilter } from "three"
import { Suspense, useMemo, useRef } from "react"
import { Canvas, useLoader, useThree, useFrame } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import BackfaceMaterial from "./backface-material"
import RefractionMaterial from "./refraction-material"
import diamondUrl from "./assets/diamond.glb"
import textureUrl from "./assets/233.jpg"
import "./views/Homepage.css"
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const auth = new Auth();
const rootElement = document.getElementById("root");
let state = {};





window.setState = (changes) => {
    state = Object.assign({},state,changes);
    ReactDOM.render(<App {...state}/>, rootElement);
}
/* eslint no-restricted-globals : 0 */
let initialState = {
    name :"haha",
    location: location.pathname.replace(/^\?|\/$/g,""),
    auth
};
window.setState(initialState);