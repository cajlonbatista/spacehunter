import React, { Component } from 'react';
import { message, Spin } from 'antd';
import { SolarSystemLoading } from 'react-loadingg';

import { Loading } from '../../styles/general';
import { NewsGrid, More, Container } from './styles';
import CardNews from '../../components/CardNews';
import news from '../../utils/news';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      total: 0,
      page: 1,
      loading: true,
      spinning: false,
    };
  }

  componentDidMount() {
    news.get("articles?page=1")
      .then(res => {
        this.setState({
          page: res.data.pages
        })
        news.get(`/articles?page=${this.state.page}`)
          .then(({ data: { docs: articles, pages: total } }) =>{
            this.setState({ articles,page: this.state.page - 1, loading: false,total: total });
          })     
          .catch(() => {
            message.error('Algo deu errado tente mais tarde!');
          });
      })
      
  }
  loaderArticles = () => {
    this.setState({
      spinning: true
    })
    if (this.state.page < 1) {
    } else {
      console.log(this.state.page)
      news.get(`/articles?page=${this.state.page}`)
        .then(({ data: { docs: articles } }) => {
          for (const i of articles) {
            const item = this.state.articles.push(i);
            this.setState({
              article: item,
              spinning: false,
              page: this.state.page - 1
            });
          }
        })
        .catch(() => {
          message.error('Algo deu errado tente mais tarde!');
        });
    }
  }
  render() {
    const { articles, loading } = this.state;

    return loading
      ? <Loading><SolarSystemLoading /></Loading>
      : (
        <Spin spinning={this.state.spinning}>
          <NewsGrid>
            {articles.map((article) => <CardNews key={article._id} news={article} />)}
          </NewsGrid>
          <Container>
            <More onClick={this.loaderArticles}>
               More
            </More>
          </Container>
        </Spin>

      );
  }
}
