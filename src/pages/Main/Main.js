import React from 'react';
import { Alert, Divider, Typography, Button, message } from 'antd';
import { MeteorRainLoading } from 'react-loadingg';

import styles from './styles';
const { Content, ContentTitle, Loading, Apod, ApodImage, ApodInfo, Welcome, WelcomePainel, WelcomeTitle} = styles;
const { Text } = Typography;

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      main: {},
      loader: true,
      status: true,
    };
  }

  componentDidMount() {
    var year = new Date().getFullYear();
    var day = new Date().getDate();
    var moth = new Date().getMonth() + 1;
    console.log(year + "-" + moth + "-" + day)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${year}-${moth}-${day}&end_date=${year}-${moth}-${day}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 404) {
          this.setState({
            loader: false,
            status: false,
          });
        } else {
          this.setState({
            main: res[0],
            loader: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          loader: false,
          status: false,
        });
        message.error("Algo deu errado. Fale conosco ")
        console.log(err)
      });
  }

  render() {
    const { loader, status, main } = this.state;

    if (loader) {
      return (
        <Loading>
            <MeteorRainLoading color="#ffb400" />
        </Loading>
      );
    }
    return (
      <Content >
        <ContentTitle>
          Welcome, Hunter
          </ContentTitle>
        <Apod>
          <ApodImage
            src={main.url}
            className="day"
            alt="of day"
          />

          <ApodInfo style={{ margin: '20px' }}>
            <Text type="secondary">
              Astronomy Picture of the Day: &nbsp;
                {main.title}
            </Text>

            <br />

            <Text type="warning">
              {main.copyright}
            </Text>

            <Button type="primary">
              More
            </Button>
          </ApodInfo>
        </Apod>

        <Divider />

        <Welcome className="welcome">
          <WelcomeTitle>
            What you can find here
            </WelcomeTitle>
          <WelcomePainel className="painels" />
          <WelcomePainel className="painels" />
          <WelcomePainel className="painels" />
          <WelcomePainel className="painels" />
        </Welcome>
      </Content>
    );
  }
}