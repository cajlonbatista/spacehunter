import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const CardNavigation = ({
  title, image, path = '#!', onClick,
}) => (
  <Link
    to={path}
    className="card-navigation"
    tabIndex="0"
    onClick={onClick}
  >
    <img
      src={image}
      alt={title}
      className="item-img"
    />

    <span>
      { title }
    </span>
  </Link>
);

CardNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

CardNavigation.defaultProps = {
  path: '#!',
  onClick: null,
};

export default CardNavigation;
