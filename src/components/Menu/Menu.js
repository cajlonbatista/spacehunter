import React from 'react';
import { Menu } from 'antd';
import {
  HomeFilled, RadarChartOutlined, PictureFilled, FileExclamationFilled, NodeExpandOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { HeaderTag } from './styles';

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
      <HeaderTag>
        <Menu
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Item
            key="home"
            icon={<HomeFilled />}
          >
            <Link to="/">
              Space Hunter
            </Link>
          </Item>

          <Item
            key="universe"
            icon={<RadarChartOutlined />}
          >
            <Link to="/universe">
              Universe
            </Link>
          </Item>

          <Item
            key="articles"
            icon={<FileExclamationFilled />}
          >
            <Link to="/news">
              Space News
            </Link>
          </Item>

          <Item
            key="apod"
            icon={<PictureFilled />}
          >
            <Link to="/apod">
              Astronomy Picture
            </Link>
          </Item>

          <Item
            key="about"
            icon={<NodeExpandOutlined />}
          >
            <Link to="/about">
              About
            </Link>
          </Item>
        </Menu>
      </HeaderTag>
    );
  }
}
