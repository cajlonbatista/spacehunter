import "./App.less";
import React from "react";
import "./Menu.css";
import { Menu } from 'antd';
import { HomeOutlined, DownCircleOutlined, NodeExpandOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

export default class App extends React.Component {
  state = {
    current: '',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="universe" icon={<NodeExpandOutlined />}>
          <Link to="/universe">Universe</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<NodeExpandOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
      </Menu>
    );
  }
}