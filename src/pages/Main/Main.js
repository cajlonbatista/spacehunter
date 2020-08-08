import React from 'react';
import {
  Alert, Divider, Typography, Button,
} from 'antd';
import { MeteorRainLoading } from 'react-loadingg';
import './Main.css';

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
        console.log(err)
      });
  }

  render() {
    const { loader, status, main } = this.state;

    if (loader) {
      return (
        <MeteorRainLoading color="#ffb400" size="larger" />
      );
    }

    if (status) {
      return (
        <div className="content">
          <h1>
            Welcome, Hunter
          </h1>

          <div className="apod">
            <img
              src={main.url}
              className="day"
              alt="of day"
            />

            <div style={{ margin: '20px' }} className="info">
              <Text type="secondary">
                Astronomy Picture of the Day :
                {main.title}
              </Text>

              <br />

              <Text type="warning">
                {main.copyright}
              </Text>

              <Button type="primary">
                More
              </Button>
            </div>
          </div>

          <Divider />

          <div className="welcome">
            <h2>
              What you can find here
            </h2>

            <div className="painels" />
            <div className="painels" />
            <div className="painels" />
            <div className="painels" />
          </div>
        </div>
      );
    }

    return (
      <div className="content">
        <div className="notfound">
          <Alert
            type="warning"
            message="Warning"
            description="Sorry, we did not get the image of the day due to time zone issues with the Nasa server, but we are working on a solution, in the meantime try to access it during daytime hours 🤓👍."
          />
        </div>

        <Divider />
      </div>
    );
  }
}
