import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import System from './pages/Universe/System';
import Planet from './pages/Universe/System/Planet';
import Universe from './pages/Universe/Universe';
import News from './pages/News';
import NewsSingle from './pages/News/NewsSingle';
import ApodSearch from './pages/Apod/ApodSearch/ApodSearch';
import ApodSingle from './pages/Apod/ApodSingle/ApodSingle';

import Apod from './pages/Apod/Apod';
import NotFound from './pages/NotFound/NotFound';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" title="Space" exact component={Main} />
      <Route path="/universe" exact component={Universe} />
      <Route path="/news" exact component={News} />
      <Route path="/news/:id" exact component={NewsSingle} />
      <Route path="/universe/solarsystem" exact component={System} />
      <Route path="/universe/solarsystem/:planet" exact component={Planet} />
      <Route path="/apod" exact component={Apod} />
      <Route path="/apod/search" exact component={ApodSearch} />
      <Route path="/apod/:date" exact component={ApodSingle} />
      <Route path="*" component={NotFound} exact></Route>
    </Switch>
  );
}
