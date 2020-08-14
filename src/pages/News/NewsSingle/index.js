/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable-next-line no-shadow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MeteorRainLoading } from "react-loadingg";
import Markdown from "react-markdown";

import styles from "./styles";
import "./index.css";
import news from '../../../utils/news';

const { NewsMore, NewsMoreBanner, NewsMoreBody, NewsMoreContainer, NewsTitle, NewsSubtitle, NewsContent }  = styles;
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
          <MeteorRainLoading />
        </div>
      );
    } else {
      return (
        <NewsMore>
          <img 
            className="news-banner"
            alt={title}
            align="center"
            src={imgToUrl}
          />
          <NewsMoreBody >
            <NewsMoreContainer>
              <NewsTitle>
                {title}
              </NewsTitle>
              <NewsSubtitle>
                {`${author} - ${new Date(publishedAt).toLocaleDateString()}`}
              </NewsSubtitle>
              <NewsContent className="news-content">
                <Markdown source={content} />
              </NewsContent>
            </NewsMoreContainer>
          </NewsMoreBody>
        </NewsMore>
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
