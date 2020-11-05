import React, { Component } from 'react';

import "date-fns";
import { subDays, format } from 'date-fns';
import axios from "axios";

import {
    ApodGrid,
    HeaderApod,
} from "./styles";

import CardApod from '../../components/CardApod/index';
import { BackTop } from "antd";
import { Link } from "react-router-dom";
import { SemipolarLoading } from "react-loadingg";
import { IconButton } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import newapod from '../../assets/images/new.svg';
import searchapod from '../../assets/images/image_search.svg';

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
                    <SemipolarLoading color='#ff9900'/>
                </>
            );
        } else {
            return (
                <div style={{ marginTop: 90 }}>
                    <Helmet>
                        <title>Apod | Space Hunter</title>
                    </Helmet>
                    <BackTop />
                    <HeaderApod>
                        <h2 style={{ fontFamily: "Exo, sans-serif", color: "#ff9900", textAlign: "center" }}>Astronomy Picture of the Day</h2>
                        <Link to="/apod/search/">
                            <IconButton>
                                <img src={searchapod}></img>
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
