import React, { Component } from 'react';
import { message, Spin, Button, BackTop } from 'antd';
import { SolarSystemLoading } from 'react-loadingg';

import { Loading } from '../../utils/styles/general';
import { NewsGrid, Container } from './styles';
import CardNews from '../../components/CardNews';
import news from '../../utils/news';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

export default class News extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      articles: [],
      total: 0,
      page: 1,
      loading: true,
      enable: false,
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
          .then(({ data: { docs: articles, pages: total } }) => {
            this.setState({ articles, page: this.state.page - 1, loading: false, total: total });
          })
          .catch(() => {
            message.error('Algo deu errado tente mais tarde!');
          });
      })
  }
  loaderArticles = () => {
    if (this.state.page < 1) {
      this.setState({
        enable: true,
      })
    } else {
      this.setState({
        spinning: true
      })
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
        <Spin spinning={this.state.spinning} size="large">
          
          <div>
          <BackTop>
          </BackTop>
            <NewsGrid>
              {articles.map((article) => <CardNews key={article._id} news={article} />)}
            </NewsGrid>
            <Container>
              <Button block disabled={this.state.enable} style={{ margin: "0 auto" }} onClick={this.loaderArticles}>
                More
            </Button>
            </Container>
          </div>
          
        </Spin>

      );
  }
}
