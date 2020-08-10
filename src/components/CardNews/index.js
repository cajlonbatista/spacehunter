import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

class CardNews extends PureComponent {
  render() {
    const { news } = this.props;
    const {
      _id,
      title,
      description,
      author,
      imgToUrl,
      publishedAt,
    } = news;

    return (
      <Link to={`/articles/${_id}`}>
        <article className="card-news">
          <img
            className="card-preview"
            src={imgToUrl}
            alt={title}
          />

          <div className="card-content">
            <h2 className="card-title">
              {title}
            </h2>

            <p className="card-description">
              {description}
            </p>

            <span>
              { `${author} - ${new Date(publishedAt).toDateString()}` }
            </span>
          </div>
        </article>
      </Link>
    );
  }
}

CardNews.propTypes = {
  news: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imgToUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardNews;
