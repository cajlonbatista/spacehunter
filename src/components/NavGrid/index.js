import React from 'react';
import PropTypes from 'prop-types';
import CardNavigation from './CardNavigation';
import { Navigator } from './styles';

class NavGrid extends React.PureComponent {
  render() {
    const { items, children } = this.props;

    return (
      <Navigator>
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
      </Navigator>
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
