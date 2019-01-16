// import store from "../js/store/index";
// import { addArticle } from "../js/actions/index";
//
//
// window.store = store;
// window.addArticle = addArticle;

import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";

// const render = ReactDOM.render;

render(
    <Provider store={store}>
    <App/>
    </Provider>,

    document.getElementById("root")

)