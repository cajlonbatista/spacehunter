import React from "react";
import { Alert, Layout, Divider, Typography, Button } from "antd";
import Loader from "../../components/Loader/Loader";
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
                        <h1>Welcome, Hunter</h1>
                        <div className="apod">
                            <img src={this.state.main.url} className="day" ></img>
                            <div style={{ margin: "20px" }} className="info">
                                <Text type="secondary"> Astronomy Picture of the Day : {this.state.main.title}</Text><br></br>
                                <Text type="warning">{this.state.main.copyright}</Text>
                                <Button type="primary">More</Button>
                            </div>
                        </div>
                        <Divider />
                        <div className="welcome">
                            <h2>What you can find here</h2>
                        </div>
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