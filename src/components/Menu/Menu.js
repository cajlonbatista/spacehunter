import React from 'react';
import './Menu.css';
import { Menu } from 'antd';
import { HomeOutlined, SettingFilled, NodeExpandOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Item } = Menu;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      current: '',
    };
  }

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu
          className="menu"
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Item
            key="home"
            icon={<HomeOutlined />}
          >
            <Link to="/">
              Space Hunter
            </Link>
          </Item>

          <Item
            key="universe"
            icon={<SettingFilled />}
          >
            <Link to="/universe">
              Universe
            </Link>
          </Item>

          <Item
            key="articles"
            icon={<NodeExpandOutlined />}
          >
            <Link to="/news">
              Space News
            </Link>
          </Item>

          <Item
            className="about"
            key="about"
            icon={<NodeExpandOutlined />}
          >
            <Link to="/about">
              About
            </Link>
          </Item>
        </Menu>
      </div>
    );
  }
}
