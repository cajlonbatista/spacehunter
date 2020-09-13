import React, { Component } from 'react';
import {
  ConteinerApod,
  ApodGrid,
  HeaderApod,
  SelectApod,
  ApodImage
} from './styles';
import axios from "axios";
import { Button, DatePicker, Spin, message, Divider, BackTop } from 'antd';

export default class ApodSearch extends Component {
  state = {
    selectedDate: "",
    data: {},
    loader: false,
  }
  handleDateChange = (date, dateString) => {
    this.setState({
      selectedDate: dateString,
    })
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
        message.error('Algo deu errado 😞 !');
        message.info('Tente selecione uma data correta 😁');
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
              <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" width="130px"></img>
              <h2 style={{ fontFamily: "Exo, sans-serif", color: "#ff8000", textAlign: "center" }}>Astronomy Picture of the Day</h2>
            </HeaderApod>
            <Divider/>
            <SelectApod>
              <p style={{ color: "white" }}>Select the APOD date you want to see, if you were born after 2000 try your birthday 🧐.</p>
              <div>
                <DatePicker size="large" onChange={this.handleDateChange} />
              </div>
              <Button style={{ margin: 10 }} type="primary" onClick={this.onView} size="large">View</Button>
            </SelectApod>
            <Divider />
            <div>
              {
                (media_type == "video")
                  ?
                  <div>
                    <iframe src={url}></iframe>
                  </div>
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
