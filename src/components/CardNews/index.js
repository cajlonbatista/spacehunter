import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  CardNew, Span, CardDescription, CardPreview, CardContent, CardTitle,
} from './styles';

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
      <Link to={`/news/${_id}`}>
        <CardNew>
          <CardPreview
            src={imgToUrl}
            alt={title}
          />

          <CardContent>
            <CardTitle>
              {title}
            </CardTitle>

            <CardDescription>
              {description}
            </CardDescription>

            <Span>
              {`${author} - ${new Date(publishedAt).toDateString()}`}
            </Span>
          </CardContent>
        </CardNew>
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
