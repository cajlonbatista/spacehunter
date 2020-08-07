import React from "react";
import { Alert, Divider, Typography, Button } from "antd";
import {MeteorRainLoading} from "react-loadingg";
import "./Main.css";
const { Text } = Typography;

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            main: {},
            loader: true,
            status: true,
        }
    }
    
    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a")
            .then(res => {
                res.json()
                    .then(res => {
                        if (res.code === 404) {
                            this.setState({
                                loader: false,
                                status: false
                            })
                        } else {
                            this.setState({
                                main: res,
                                loader: false
                            })
                        }
                    })
                    .catch((err) => {
                        this.setState({
                            loader: false,
                            status: false,
                        })
                    })
            })
    }

    render() {
        if (this.state.loader) {
            return (
                <MeteorRainLoading color="#ffb400" size="larger" />
            );
        } else {
            if (this.state.status) {
                return (
                    <div className="content" >
                        <h1>
                          Welcome, Hunter
                        </h1>

                        <div className="apod">
                            <img src={this.state.main.url} className="day" />
                            <div style={{ margin: "20px" }} className="info">
                                <Text type="secondary"> Astronomy Picture of the Day : {this.state.main.title}</Text><br></br>
                                <Text type="warning">{this.state.main.copyright}</Text>
                                <Button type="primary">More</Button>
                            </div>
                        </div>

                        <Divider />

                        <div className="welcome">
                            <h2>
                              What you can find here
                            </h2>

                            <div className="painels">

                            </div>
                            <div className="painels">

                            </div>
                            <div className="painels">

                            </div>
                            <div className="painels">

                            </div>
                        </div>
                    </div>
                );
            } else {
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

    }
}