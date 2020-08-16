import React from 'react';
import {
  Divider, Typography, Button, message,
} from 'antd';
import { MeteorRainLoading } from 'react-loadingg';
import { Link } from 'react-router-dom';

import { Loading } from '../../utils/styles/general';
import {
  Content, ContentTitle, Apod, ApodImage, ApodInfo, WelcomeTitle,
} from './styles';

const { Text } = Typography;

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      main: {},
      loader: true,
    };
  }

  componentDidMount() {
    const date = Intl.DateTimeFormat('en-GB')
      .format(new Date())
      .split('/')
      .reverse()
      .join('-');

    fetch(`https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${date}&end_date=${date}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.code !== 404) {
          this.setState({
            main: res[0],
          });
        }
      })
      .catch((err) => {
        message.error('Algo deu errado. Fale conosco ');
        console.err(err);
      })
      .finally(() => {
        this.setState({
          loader: false,
        });
      });
  }

  render() {
    const { loader, main } = this.state;

    if (loader) {
      return (
        <Loading>
          <MeteorRainLoading color="#ffb400" />
        </Loading>
      );
    }
    return (
      <Content>
        <ContentTitle>
          Welcome, Hunter
        </ContentTitle>

        <Apod>
          <ApodImage
            src={main.url}
            alt="of day"
          />

          <ApodInfo style={{ margin: '20px' }}>
            <Text type="secondary">
              Astronomy Picture of the Day: &nbsp;
              { main.title }
            </Text>

            <br />

            <Text type="warning">
              { main.copyright }
            </Text>

            <Link to="/apod">
              <Button type="primary">
                More
              </Button>
            </Link>
          </ApodInfo>
        </Apod>

        <Divider />

        <div>
          <WelcomeTitle>
            What you can find here
          </WelcomeTitle>
        </div>
      </Content>
    );
  }
}
