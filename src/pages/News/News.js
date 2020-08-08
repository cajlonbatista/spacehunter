import React from 'react';
import { message } from 'antd';

export default class News extends React.Component{
    constructor(){
        super();
        this.state = {
            articles: [],
        }
    }
    componentDidMount(){
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
    render(){
        return(
            <main className="news">
                {

                }
            </main>
        );
    }
}