import React from "react";
import Menu from "./components/Menu/Menu";
import Routes from "./routes";
import "./App.less";
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            splash: false,
        }
    }
    componentDidMount() {
        setTimeout(this.none, 3000);
    }
    none = () => {
        this.setState({
            splash: true,
        })
    }
    render() {
            return (
                <BrowserRouter>
                    <Menu></Menu>
                    <Routes></Routes>
                </BrowserRouter >
            )
    }
}