import React from "react";
import Menu from "./components/Menu";
import Routes from "./routes";
import { Layout } from 'antd';
import {BrowserRouter} from "react-router-dom";
const { Header, Content } = Layout;

export default function App() {
    return (
        <BrowserRouter>
            <Menu></Menu>
            <Routes></Routes>
        </BrowserRouter>
    )
}