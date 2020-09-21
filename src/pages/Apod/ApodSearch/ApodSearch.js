import React, { Component } from 'react';
import {
  ConteinerApod,
  ApodGrid,
  HeaderApod,
  SelectApod,
  ApodVideo,
  ApodImage
} from './styles';
import axios from "axios";
import { Button, DatePicker, Spin, message, Divider, BackTop } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PageBack from "../../../components/PageBack/index";

export default class ApodSearch extends Component {
  state = {
    selectedDate: "",
    data: {},
    loader: false,
    enable: true,
  }
  handleDateChange = (date, dateString) => {
    if (dateString == "") {
      this.setState({
        enable: true
      })
    } else {
      this.setState({
        selectedDate: dateString,
        enable: false
      })
    }
  }
  onView = () => {
    this.setState({
      loader: true,
    })
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${this.state.selectedDate}&end_date=${this.state.selectedDate}`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          data: res.data[0]
        })
      }).catch((err) => {
        message.error('Something went wrong 😞!');
        message.info('Try to select a correct date 😁');
      }).finally(() => {
        this.setState({ loader: false, });
      });
  }
  render() {
    const { media_type, title, url, explanation } = this.state.data;
    return (
      <>
        <BackTop />
        <Spin spinning={this.state.loader}>
          <ConteinerApod>
            <HeaderApod>
                <PageBack title="Astronomy Picture Day"/>
            </HeaderApod>
            <Divider />
            <SelectApod>
              <p style={{ color: "white" }}>Select the APOD date you want to see, if you were born after 2000 try your birthday 🧐.</p>
              <div>
                <DatePicker size="large" onChange={this.handleDateChange} />
              </div>
              <Button type="primary" shape="circle" disabled={this.state.enable} onClick={this.onView} size="large" style={{marginTop: 15}} icon={<SearchOutlined />} />
            </SelectApod>
            <Divider />
            <div>
              {
                (media_type == "video")
                  ?
                  <ApodVideo>
                    <h2 style={{color: "#ff8000"}}>{title}</h2>
                    <iframe src={url} frameborder='0' webkitAllowFullScreen mozallowfullscreen controls allowFullScreen></iframe>
                    <span>{explanation}</span>
                  </ApodVideo>
                  :
                  <ApodImage>
                    <h2 style={{ color: "#ff8000" }}>{title}</h2>
                    <img src={url}></img>
                    <span>{explanation}</span>
                  </ApodImage>
              }
            </div>
          </ConteinerApod>
        </Spin>
      </>
    );

  }
}
