import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './Component/history';
import Home from "./Component/Home";
import SchoolProfile from "./Component/SchoolProfile";
import SearchResult from "./Component/SearchResult";
import UserProfile from "./Component/UserProfile";
// import SchoolAbout from "./Component/SchoolInfoComponet/SchoolAbout";
// import SchoolResult from "./Component/SchoolInfoComponet/SchoolResult";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/SchoolProfile" component={SchoolProfile} />
                    <Route path="/SearchResult" component={SearchResult} />
                    <Route path="/UserProfile" component={UserProfile} />
                    {/* <Route path="/SchoolAbout" component={SchoolAbout} />
                    <Route path="/SchoolResult" component={SchoolResult} /> */}
                </Switch>
            </Router>
        )
    }
}