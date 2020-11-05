import React, { Component } from "react";
import PropTypes from "prop-types";
import { SemipolarLoading } from "react-loadingg";

import Markdown from "react-markdown";
import api from "../../../utils/news";
import { Container } from "../../../utils/styles/general";
import { Helmet } from 'react-helmet';

import {
  NewsMore,
  NewsBanner,
  NewsTitle,
  NewsSubtitle,
  NewsContent,
  NewsImage,
} from "./styles";

import { BackTop } from "antd";

class NewsSingle extends Component {
  constructor() {
    super();

    this.state = {
      news: {},
      loading: true,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    api
      .get(`/articles/${params.id}`)
      .then(({ data: news }) => this.setState({ news, loading: false }))
      .catch(console.error);
  }

  render() {
    const { news, loading } = this.state;
    const { title, content, publishedAt, author, imgToUrl } = news;

    return loading ? (
      <div>
        <SemipolarLoading color='#FF990'/>
      </div>
    ) : (
      <NewsMore>
        <BackTop />
        <Helmet>
          <title>{ title } | Space Hunter</title>
        </Helmet>
        <NewsBanner alt={title} align="center" src={imgToUrl} />
        <Container>
          <NewsTitle>{title}</NewsTitle>
          <NewsImage src={imgToUrl}></NewsImage>
          <NewsSubtitle>
            {`${author} - ${new Date(publishedAt).toLocaleDateString()}`}
          </NewsSubtitle>

          <NewsContent className="news-content">
            <Markdown source={content} />
          </NewsContent>
        </Container>
      </NewsMore>
    );
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
