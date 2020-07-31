import React from "react";
import { Button } from "antd";
import {Link} from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons"
export default class Mars extends React.Component {
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
                    <h3>Mars</h3>
                </div>
            </div>
        );
    }
}