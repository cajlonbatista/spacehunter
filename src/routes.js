import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import System from "./components/planets/System";
import Mercury from "./components/planets/Mercury";
import React from "react";
import Universe from "./components/Universe";
import Mars from "./components/planets/Mars";
import Earth from "./components/planets/Earth";
import Venus from "./components/planets/Venus";
export default function Routes() {
    return (
            <Switch>
            <Route path="/" exact component={Main} ></Route>
                <Route path="/universe" exact component={Universe}></Route>
                <Route path="/universe/solarsystem" exact component={System}></Route>
                <Route path="/universe/solarsystem/mercury" exact component={Mercury}></Route>
                <Route path="/universe/solarsystem/mars" exact component={Mars}></Route>
                <Route path="/universe/solarsystem/earth" exact component={Earth}></Route>
                <Route path="/universe/solarsystem/venus" exact component={Venus}></Route>

            </Switch>
    );
}