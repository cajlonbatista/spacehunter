import React from 'react';
import { message } from 'antd';

import "./News.css";
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
                                    <span>{article.title}</span>
                                    <span>{article.description}</span>
                                </div>
                                <span>{article.publishedAt}</span>
                            </article>
                        );
                    })
                }
            </main>
        );
    }
}