import {Switch, Route} from "react-router-dom";
import Main from "./components/Main";
import System from "./components/planets/System";
import React from "react";
export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Main} ></Route>
            <Route path="/universe" exact component={System}></Route>
        </Switch>
    );
}