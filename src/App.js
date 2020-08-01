import React from "react";
import Menu from "./components/Menu";
import Routes from "./routes";
import "./App.css";
import rocket from "./components/rocket.svg";
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
const { Header, Content } = Layout;

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
        if (this.state.splash == true) {
            return (
                <BrowserRouter>
                    <Menu></Menu>
                    <Routes></Routes>
                </BrowserRouter >
            )
        }else{
            return (
                <div className="logo" style={{ display: this.state.animation }}>
                    <img src={rocket} />
                    <span>Space Hunter</span>
                </div>
            )
        }

    }
}