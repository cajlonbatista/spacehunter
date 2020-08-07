import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import System from "./pages/Universe/System/System";
import Mercury from "./pages/Universe/System/Planets/Mercury";
import Universe from "./pages/Universe/Universe";
export default function Routes() {
    return (
            <Switch>
                <Route path="/" exact component={Main} ></Route>
                <Route path="/universe" exact component={Universe}></Route>
                <Route path="/universe/solarsystem" exact component={System}></Route>
                <Route path="/universe/solarsystem/mercury" exact component={Mercury}></Route>
            </Switch>
    );
}