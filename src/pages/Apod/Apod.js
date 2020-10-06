import React, { Component } from 'react';

import "date-fns";
import { subDays, format } from 'date-fns';
import axios from "axios";

import {
    ApodGrid,
    HeaderApod,
} from "./styles";

import CardApod from '../../components/CardApod/index';
import { BackTop, Button } from "antd";
import { Link } from "react-router-dom";
import { SemipolarLoading } from "react-loadingg";
import { SearchOutlined } from '@ant-design/icons';


export default class Apod extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const spls = new Date();
        this.setState({
            loading: true,
        })
        const date = Intl.DateTimeFormat('en-GB')
            .format(new Date())
            .split('/')
            .reverse()
            .join('-');
        const data = format(subDays(Date.now(), 80), "yyyy-MM-dd");
        console.log(data);
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${data}&end_date=${date}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    data: res.data,
                    loading: false,
                })
                this.setState({
                    data: this.state.data.reverse(),
                })
            })
    }
    render() {
        const date = Intl.DateTimeFormat('en-GB')
            .format(new Date())
            .split('/')
            .reverse()
            .join('-');
        if (this.state.loading) {
            return (
                <>
                    <SemipolarLoading />
                </>
            );
        } else {
            return (
                <div style={{ marginTop: 90 }}>
                    <BackTop />
                    <HeaderApod>
                        <h2 style={{ fontFamily: "Exo, sans-serif", color: "#ff8000", textAlign: "center" }}>Astronomy Picture of the Day</h2>
                        <Link to="/apod/search/" style={{ display: "flex", justifyContent: "center", margin: 20 }}>
                            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                        </Link>
                    </HeaderApod>

                    <ApodGrid>
                        {
                            this.state.data.map(apod1 => {
                                if (apod1.date == date) {
                                    return (
                                        <CardApod apod={apod1} news="https://www.flaticon.com/svg/static/icons/svg/891/891448.svg" key={apod1.date}>
                                        </CardApod>
                                    );
                                } else {
                                    return (
                                        <CardApod apod={apod1} key={apod1.date}>
                                        </CardApod>
                                    );
                                }
                            })
                        }
                    </ApodGrid>
                </div>
            );
        }
    }
}
