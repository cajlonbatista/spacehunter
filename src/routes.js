import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import System from './pages/Universe/System/System';
import Mercury from './pages/Universe/System/Planets/Mercury';
import Universe from './pages/Universe/Universe';
import News from "./pages/News/News";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/universe" exact component={Universe} />
      <Route path="/news" exact component={News}/>
      <Route path="/universe/solarsystem" exact component={System} />
      <Route path="/universe/solarsystem/mercury" exact component={Mercury} />
    </Switch>
  );
}
