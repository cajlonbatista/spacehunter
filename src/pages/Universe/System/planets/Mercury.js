import React from "react";
import { Button } from "antd";
import"./Mercury.css";
import {Link} from "react-router-dom";
import { LeftOutlined } from "antd"
export default class Mercury extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="titleMercury">
                    <Link to="/universe/solarsystem">
                        <Button shape="circle" icon={<LeftOutlined />} type="primary"></Button>
                    </Link>
                    <h2>Mercury</h2>
                </div>
                <div className="contentMercury">
                </div>
            </div>
        );
    }
}