import React from 'react';
import { message } from 'antd';

import "./News.css";
import { findAllByDisplayValue } from '@testing-library/react';
export default class News extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
        }
    }
    componentDidMount() {
        fetch("https://kauton.herokuapp.com/api/articles")
            .then(res => {
                res.json()
                    .then(res => {
                        this.setState({
                            articles: res.docs
                        })
                    })
            })
            .catch(err => {
                message.error("Algo deu errado tente mais tarde! ")
            })
    }
    formatData = (date) => {
        var data = "";
        var i = 0
        for (var ind of date) {
            if(i < 10){
                if(ind == "-"){
                    ind = "/";
                }
                i += 1;
                data += ind;
            }else{
                break
            }
        }
        var parse = data[8] + data[9] + data[7] + data[5] + data[6] + data[4] + data[0] + data[1] + data[2] + data[3]
        return parse;
    }
    render() {
        return (
            <main className="news">
                {
                    this.state.articles.map(article => {
                        return (
                            <article key={article._id} className="new">
                                <div className="preview">
                                    <img src={article.imgToUrl}></img>
                                </div>
                                <div className="content">
                                    <span className="title">{article.title}</span>
                                    <span className="description">{article.description}</span>
                                    <span className="date">{this.formatData(article.publishedAt)}</span>
                                </div>
                            </article>
                        );
                    })
                }
            </main>
        );
    }
}