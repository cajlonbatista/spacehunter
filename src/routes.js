/* eslint-disable linebreak-style */
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import System from './pages/Universe/System';
import Planet from './pages/Universe/System/Planet';
import Universe from './pages/Universe/Universe';
import News from './pages/News';
import NewsSingle from './pages/News/NewsSingle';
import Apod from './pages/Apod/Apod';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/universe" exact component={Universe} />
      <Route path="/news" exact component={News} />
      <Route path="/news/:id" exact component={NewsSingle} />
      <Route path="/universe/solarsystem" exact component={System} />
      <Route path="/universe/solarsystem/:planet" exact component={Planet} />
      <Route path="/apod" exact component={Apod} />
    </Switch>
  );
}
