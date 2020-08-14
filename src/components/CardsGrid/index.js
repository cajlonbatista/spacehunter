import React from 'react';
import PropTypes from 'prop-types';

import styles from  './styles';
const { GridWrapper } = styles;

class CardsGrid extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <GridWrapper className="grid-wrapper">
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
