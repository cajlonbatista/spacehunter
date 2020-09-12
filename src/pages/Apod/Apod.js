import React, { Component } from 'react';
import {
  ConteinerApod
} from './styles';

import { DatePicker } from 'antd';

export default class Apod extends Component {
  state = {
    selectedDate: {}
  }
  handleDateChange = (date) => {
    console.log(date);
    this.setState({
      selectedDate: date
    })
  }
  render() {
    return (
      <ConteinerApod>
              <DatePicker size="large" onChange={this.handleDateChange} />
      </ConteinerApod>
    );
  }
}
