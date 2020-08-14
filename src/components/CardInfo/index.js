import React from 'react';
import PropTypes from 'prop-types';

import styles from "./styles";
const { Card } = styles;
class CardInfo extends React.PureComponent {
  render() {
    const { title, content } = this.props;

    return (
      <Card className="card-info">
        <h3 className="card-title">
          { title }
        </h3>

        <p className="card-content">
          { content }
        </p>
      </Card>
    );
  }
}

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardInfo;
