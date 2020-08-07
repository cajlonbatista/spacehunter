import React from "react";
import Menu from "./components/Menu/Menu";
import Routes from "./routes";
import "./App.less";
import "./assets/global/styles.css";
import { BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
    render() {
            return (
                <BrowserRouter>
                    <Menu />
                    <Routes />
                </BrowserRouter >
            )
    }
}