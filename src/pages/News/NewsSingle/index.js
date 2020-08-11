import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MeteorRainLoading } from "react-loadingg";
import Markdown from "react-markdown";

import './index.css';
import news from '../../../utils/news';

class NewsSingle extends Component {
  constructor() {
    super();

    this.state = {
      news: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    news.get(`/articles/${params.id}`)
      .then(({ data: news }) => this.setState({ news, loading: false }))
      .catch(console.error);

  }

  render() {
    const { news, loading } = this.state;
    const {
      title,
      content,
      publishedAt,
      author,
      imgToUrl,
    } = news;
    console.log(news);
    if (loading) {
      return (
        <div>
          <MeteorRainLoading/>
        </div>
      );
    } else {
      return (
        <div>
          <img
            className="news-banner"
            alt={title}
            src={imgToUrl}
          />

          <section className="news-body">
            <div className="container">
              <h1 className="news-title">
                {title}
              </h1>

              <h4 className="news-subtitle">
                {`${author} - ${new Date(publishedAt).toLocaleDateString()}`}
              </h4>
              <article className="news-content">
                  <Markdown source={content}/>
              </article>
            </div>
          </section>
        </div>
      );
    }
  }
}

NewsSingle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NewsSingle;
