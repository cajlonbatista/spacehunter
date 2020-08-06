import React from "./node_modules/react";
import { Button } from "./node_modules/antd";
import {Link} from "./node_modules/react-router-dom";
import { LeftOutlined } from "./node_modules/@ant-design/icons"
export default class Earth extends React.Component {
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
                    <h3>Earth</h3>
                </div>
            </div>
        );
    }
}