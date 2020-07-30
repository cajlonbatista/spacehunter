import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import System from "./components/planets/System";

import React from "react";
import Universe from "./components/Universe";
export default function Routes() {
    return (
            <Switch>
            <Route path="/" exact component={Main} ></Route>
                <Route path="/universe" exact component={Universe}></Route>
                <Route path="/universe/solarsystem" component={System}></Route>
            </Switch>
    );
}