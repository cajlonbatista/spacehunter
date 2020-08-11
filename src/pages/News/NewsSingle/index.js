import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import api from '../../utils/axios';
import './index.css';

class NewsSingle extends Component {
  constructor() {
    super();

    this.state = {
      news: {},
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    fetch(`https://kauton.herokuapp.com/api/articles/${params.id}`)
      .then(res => res.json())
      .then(news => this.setState({ news }))
      .catch(console.error);
  }

  render() {
    const { news } = this.state;
    const {
      title,
      content,
      publishedAt,
      author,
      imgToUrl,
    } = news;

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
              { title }
            </h1>

            <h4 className="news-subtitle">
              { `${author} - ${new Date(publishedAt).toLocaleDateString()}` }
            </h4>

            <article className="news-content">
              { content }
            </article>
          </div>
        </section>
      </div>
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
