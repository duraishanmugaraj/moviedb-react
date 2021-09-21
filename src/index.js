import React from 'react'
import ReactDOM from 'react-dom'
import {
    HashRouter,
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import SingleMov from './components/SingleMov';
import NavBar from "./components/NavBar"
import "./index.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
    <div id="main">
        <HashRouter basename='/'>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/:id" exact>
                    <SingleMov />
                </Route>
            </Switch>

        </HashRouter>
    </div>
    ,
    document.getElementById('root')
)