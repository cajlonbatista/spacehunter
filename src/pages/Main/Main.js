import React from "react";
import { Alert, Layout, Divider, Typography } from "antd";
import Loader from "./loading/Loader";
import "./Main.css";
const { Content } = Layout;
const { Text, Title } = Typography;
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
                        if (res.code == 404) {
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
                <div className="loading">
                    <Loader>

                    </Loader>
                </div>
            );
        } else {
            if (this.state.status) {
                return (
                    <div className="content" >
                        <Divider />
                        <div className="apod">
                            <img src={this.state.main.url} className="day" ></img>
                            <div style={{ margin: "20px" }} className="info">
                                <Text type="secondary"> Astronomy Picture of the Day : {this.state.main.title}</Text><br></br>
                                <Text type="warning">{this.state.main.copyright}</Text>
                            </div>
                        </div>
                        <div className="description">
                            <Text type="secondary">{this.state.main.explanation}</Text>
                        </div>
                        <Divider />
                    </div>
                );
            } else {
                return (
                    <div className="content">
                        <div className="notfound">
                            <Alert type="warning" message="Warning" description="Sorry, we did not get the image of the day due to time zone issues with the Nasa server, but we are working on a solution, in the meantime try to access it during daytime hours 🤓👍."/>
                        </div>
                        <Divider></Divider>
                    </div>
                );
            }

        }

    }
}