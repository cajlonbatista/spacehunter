import React, { Component } from "react";
import axios from "axios";
import { ApodImage, ApodVideo } from "./styles";
import PageBack from "../../../components/PageBack/index";
import { Helmet } from "react-helmet";

import { BatteryLoading } from "react-loadingg";

export default class ApodSingle extends Component {
  state = {
    data: {},
    loading: true,
  };
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${params.date}&end_date=${params.date}`
      )
      .then((res) => {
        this.setState({
          data: res.data[0],
          loading: false,
        });
        console.log(res.data);
      });
  }
  render() {
    const { url, media_type, title, explanation } = this.state.data;
    if (this.state.loading) {
      return <BatteryLoading color="#ff9900" />;
    } else {
      return (
        <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          {media_type === "video" ? (
            <ApodVideo>
              <PageBack title={title} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <iframe
                  src={url}
                  frameborder="0"
                  webkitAllowFullScreen
                  mozallowfullscreen
                  allowFullScreen
                  title={title}
                ></iframe>
                <p>{explanation}</p>
              </div>
            </ApodVideo>
          ) : (
              <ApodImage>
                <PageBack title={title} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src={url} alt={title}/>
                  <p>{explanation}</p>
                </div>
              </ApodImage>
            )}
        </>
      );
    }
  }
}
