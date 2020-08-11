import React, { Component } from 'react';
import { message } from 'antd';

// import api from '../../utils/axios';
import './index.css';

import CardNews from '../../components/CardNews';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // api.get('/articles')
    //   .then(({ data: { docs: articles } }) => this.setState({ articles }))
    //   .catch(() => {
    //     message.error('Algo deu errado tente mais tarde!');
    //   });
  }

  render() {
    const { articles } = this.state;

    return (
      <main className="news">
        {
          articles.map((article) => <CardNews news={article} />)
        }
      </main>
    );
  }
}
