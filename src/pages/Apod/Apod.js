import React, { Component } from 'react';

import "date-fns";
import axios from "axios";
import { subDays, format } from 'date-fns';

import CardApod from '../../components/CardApod/index';
import { BackTop } from "antd";
import { Link } from "react-router-dom";
import { CircleLoading } from "react-loadingg";
import { IconButton } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import {
    ApodGrid,
    HeaderApod,
} from "./styles";


import newapod from '../../assets/images/new.svg';
import searchapod from '../../assets/images/image_search.svg';

export default class Apod extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.setState({
            loading: true,
        })
        const date = Intl.DateTimeFormat('en-GB')
            .format(new Date())
            .split('/')
            .reverse()
            .join('-');
        const data = format(subDays(Date.now(), 20), "yyyy-MM-dd");
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=g5EOHFgzk1FTPU1LqDOOeAfC5d1agD4hFM6FTC4a&start_date=${data}&end_date=${date}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false,
                })
                this.setState({
                    data: this.state.data.reverse(),
                })
            }).catch(err => {
                console.log(err);
            })
    }
    render() {
        const date = Intl.DateTimeFormat('en-GB')
            .format(new Date())
            .split('/')
            .reverse()
            .join('-');
        if (this.state.loading) {
            return <CircleLoading color='#ff9900' />
        } else {
            return (
                <div style={{ marginTop: 90 }}>
                    <Helmet>
                        <title>Apod | Space Hunter</title>
                    </Helmet>
                    <BackTop />
                    <HeaderApod>
                        <h1 style={{ fontFamily: "Exo, sans-serif", color: "#ff9900", textAlign: "center" }}>Astronomy Picture of the Day</h1>
                        <Link to="/apod/search/">
                            <IconButton>
                                <img src={searchapod} alt='Search' />
                            </IconButton>
                        </Link>
                    </HeaderApod>

                    <ApodGrid>
                        {
                            this.state.data.map(apod1 => {
                                if (apod1.date == date) {
                                    return (
                                        <CardApod apod={apod1} news={newapod} key={apod1.date}>
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
