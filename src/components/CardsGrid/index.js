import React from 'react';
import PropTypes from 'prop-types';

import { GridWrapper } from './styles';

class CardsGrid extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <GridWrapper>
        { children }
      </GridWrapper>
    );
  }
}

CardsGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CardsGrid;
