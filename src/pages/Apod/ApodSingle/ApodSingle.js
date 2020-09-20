import React, { Component } from "react";
import axios from "axios";
import {
    ApodImage,
    ApodVideo
} from "./styles";
import PageBack from "../../../components/PageBack/index";
import { BackTop } from "antd";

export default class ApodSingle extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${params.date}&end_date=${params.date}`)
            .then(res => {
                this.setState({
                    data: res.data[0],
                    loading: true,
                })
                console.log(res.data);
            })
    }
    render() {
        const { url, media_type, title, explanation } = this.state.data;
        return (
            <>
            <BackTop/>
                {
                    (media_type == "video")
                        ?
                        <ApodVideo>
                            <PageBack title={title} />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <iframe src={url} frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>                                
                                <p>{explanation}</p>
                            </div>
                        </ApodVideo>
                        :
                        <ApodImage>
                            <PageBack title={title} />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src={url} alt={title}></img>
                                <p>{explanation}</p>
                            </div>
                        </ApodImage>
                }
            </>
        );
    }
}