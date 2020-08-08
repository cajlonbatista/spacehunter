import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class CardsGrid extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="grid-wrapper">
        { children }
      </div>
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
