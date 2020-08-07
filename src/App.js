import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.less';
import './assets/global/styles.css';

import Menu from './components/Menu/Menu';

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    );
  }
}
