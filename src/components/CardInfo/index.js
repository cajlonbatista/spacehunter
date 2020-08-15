import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle } from './styles';

class CardInfo extends React.PureComponent {
  render() {
    const { title, content } = this.props;

    return (
      <Card>
        <CardTitle>
          { title }
        </CardTitle>

        <p>
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
