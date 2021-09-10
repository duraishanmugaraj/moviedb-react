import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import SingleMov from './components/SingleMov';
import NavBar from "./components/NavBar"
import "./index.css"

ReactDOM.render(
    <Router>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
            <Route path="/:id" exact>
                <SingleMov />
            </Route>
        </Switch>

    </Router>
    ,
    document.getElementById('root')
)