import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    CardNew, Span, CardPreview, CardContent, CardPreviewVideo, CardTitle, NewMark
} from '../CardNews/styles';

class CardNews extends PureComponent {
    render() {
        const { apod, news } = this.props;
        const {
            title,
            date,
            url,
            media_type
        } = apod;

        if (media_type == "video") {
            return (
                <Link to={`/apod/${date}`}>
                    <CardNew>
                        <CardPreviewVideo
                            src={url}
                            alt={title}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <CardContent>
                            <CardTitle>
                                {title}
                                <div style={{ position: "absolute", top: "-30", padding: 20 }}>
                                    <NewMark src={news} width="50px" />
                                </div>
                            </CardTitle>
                            <Span>
                                {`${date.split('-')
                                        .reverse()
                                        .join('/')
                                    }`}
                            </Span>
                        </CardContent>
                    </CardNew>
                </Link>);
        } else {
            return (
                <Link to={`/apod/${date}`}>
                    <CardNew style={{ position: "relative" }}>
                        <CardPreview
                            src={url}
                            alt={title}
                        />
                        <div style={{ position: "absolute", top: "-30", padding: 20 }}>
                            <NewMark src={news} width="50px" />
                        </div>
                        <CardContent>

                            <CardTitle>
                                {title}
                            </CardTitle>
                            <Span>
                                {
                                    date.split('-')
                                        .reverse()
                                        .join('/')
                                }
                            </Span>
                        </CardContent>
                    </CardNew>
                </Link>
            );
        }

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
