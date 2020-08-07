import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class NavGrid extends React.Component {
  render () {
    return (
      <div className="navigator">
        {
          this.props.items.map(({ path, image, title }, i) => (
            <Link
              key={i}
              to={path}
              className="item"
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
          ))
        }
      </div>
    )
  }
}
