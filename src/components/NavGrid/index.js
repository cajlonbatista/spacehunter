import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CardNavigation from './CardNavigation';

class NavGrid extends React.PureComponent {
  render() {
    const { items, children } = this.props;

    return (
      <div className="navigator">
        {
          children || items.map(({ path, image, title }, i) => (
            <CardNavigation
              key={i}
              path={path}
              image={image}
              title={title}
            />
          ))
        }
      </div>
    );
  }
}

NavGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    path: PropTypes.string,
  })),
  children: PropTypes.node,
};

NavGrid.defaultProps = {
  items: [],
  children: null,
};

export default NavGrid;
