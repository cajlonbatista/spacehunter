import React from "react";
import "./Menu.css";
import { Menu, Switch } from 'antd';
import { HomeOutlined, SettingFilled, NodeExpandOutlined } from '@ant-design/icons';
import { Link, Button } from "react-router-dom";
const { SubMenu } = Menu;

export default class App extends React.Component {
  state = {
    current: '',
  };
  handleClick = e => {
    this.setState({ current: e.key });
  };
  mode = e => {
    console.log(e);
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu
          className="menu" selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Space Hunter</Link>
          </Menu.Item>
          <Menu.Item key="universe" icon={<SettingFilled />}>
            <Link to="/universe">Universe</Link>
          </Menu.Item>
          <Menu.Item key="articles" icon={<NodeExpandOutlined />}>
            <Link to="/articles">Space News </Link>
          </Menu.Item>
          <Menu.Item className="about" key="about" icon={<NodeExpandOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
