import React from 'react';

export default class News extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        fetch("https://kauton.herokuapp.com/api/articles")
        .then(res => {
            res.json()
            .then(res => {

            })
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