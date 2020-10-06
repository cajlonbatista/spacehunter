import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.less';
import './assets/global/styles.css';

import Header from './components/Header/Header';
import {animateScroll as scroll } from "react-scroll" ;

export default class App extends React.PureComponent {
  componentDidMount(){
    scroll.scrollTo();
  }
  render() {
    return (
      <BrowserRouter>
        <div id="layout">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}