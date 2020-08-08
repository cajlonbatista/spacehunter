import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import System from './pages/Universe/System/System';
import Planet from './pages/Universe/System/Planet';
import Universe from './pages/Universe/Universe';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/universe" exact component={Universe} />
      <Route path="/universe/solarsystem" exact component={System} />
      <Route path="/universe/solarsystem/:planet" exact component={Planet} />
    </Switch>
  );
}
