import React, { Component } from 'react';
import { message } from 'antd';
import { SolarSystemLoading } from "react-loadingg";
import styles from  './styles';
import CardNews from '../../components/CardNews';
import news from '../../utils/news';

const { NewsGrid, Loading }  = styles;

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }
  
  componentDidMount() {
    news.get('/articles')
      .then(({ data: { docs: articles } }) => this.setState({ articles, loading: false }))
      .catch(() => {
        message.error('Algo deu errado tente mais tarde!');
      });
  }

  render() {
    const { articles, loading } = this.state;
    if(loading){
      return <Loading><SolarSystemLoading/></Loading>
    }
    return (
      <NewsGrid >
        {
          articles.map((article) => <CardNews news={article} />)
        }
      </NewsGrid>
    );
  }
}
