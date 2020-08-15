import React, { Component } from 'react';
import { message, Spin } from 'antd';
import { SolarSystemLoading } from 'react-loadingg';

import { Loading } from '../../styles/general';
import { NewsGrid } from './styles';
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
      spinnig: false,
    };
  }

  componentDidMount() {
    news.get(`/articles/${this.state.page}`)
      .then(({ data: { docs: articles, page: page } }) => this.setState({ articles, loading: false, page: this.state.page + 1,total: page }))
      .catch(() => {
        message.error('Algo deu errado tente mais tarde!');
      });
  }
  loaderArticles = () => {
    if(this.state.page >= this.state.total){

    }else{
    news.get(`/articles/${this.state.page}`)
      .then(({ data: { docs: articles } }) => {
          console.log(articles);
      })
      .catch(() => {
        message.error('Algo deu errado tente mais tarde!');
      });
    }
    console.log(this.state.total)
  }
  render() {
    const { articles, loading } = this.state;

    return loading
      ? <Loading><SolarSystemLoading /></Loading>
      : (
        <Spin spinning={this.state.spinnig}>
          <NewsGrid>
            {articles.map((article) => <CardNews news={article} />)}
          </NewsGrid>
          <div>
            <a href="#" onClick={this.loaderArticles}>
              Carregar mais
            </a>
          </div>
        </Spin>

      );
  }
}
