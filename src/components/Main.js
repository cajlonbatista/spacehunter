import React from "react";
import rocket from "./rocket.svg";
import wallp from "./wallpaper.jpg";
import notfound from "./404.svg";
import { Layout, Typography, Spin } from "antd";
import "./Main.css";
import "./Main.less";
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
            })
    }
    render() {
        if (this.state.loader) {
            return (
                <div className="loading">
                    <div className="logo">
                        <img src={rocket} width="200px" />
                    </div>
                    <Spin tip="Loading..." size="large">

                    </Spin>
                </div>
            );
        } else {
            if (this.state.status) {
                return (
                    <div className="content">
                        <div className="logo">
                            <img src={rocket} width="80px" />
                            <h1 level={2} >Space Hunter</h1>
                        </div>
                        <Content className="apod">
                            <img src={this.state.main.url} className="day" ></img>
                            <div style={{ margin: "20px" }} className="info">
                                <Text type="secondary"> Astronomy Picture of the Day : {this.state.main.title}</Text><br></br>
                                <Text type="warning">{this.state.main.copyright}</Text>
                            </div>
                        </Content>
                        <div className="description">
                            <Text type="secondary">{this.state.main.explanation}</Text>
                        </div>
                        <div className="tempy">
                            <img src={wallp}></img>
                            <Text type="primary">Let's explore this universe and everything that we are not looking at.</Text>
                        </div>
                        <section className="main">
                            <Title type="warning" level={4}>A checklist of what you can find here 🤓: </Title>
                        </section>
                    </div>

                );
            } else {
                return (
                    <div className="content">
                        <div className="logo">
                            <img src={rocket} width="80px" />
                            <h1 level={2} >Space Hunter</h1>
                        </div>
                        <div className="notfound">
                            <Text type="warning">We were unable to load the Astronomy Picture of the Day</Text>
                            <img src={notfound} width="140px"></img>
                        </div>
                        <div className="tempy">
                            <img src={wallp}></img>
                            <Text type="secondary" >Let's explore this universe and everything that we are not looking at.</Text>
                        </div>
                        <section className="main">
                            <Title level={4}>A checklist of what you can find here 🤓: </Title>
                        </section>
                    </div>
                );
            }

        }

    }
}