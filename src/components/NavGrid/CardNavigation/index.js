import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { CardNavigationTag, ItemImg, CardButton } from './styles';

const CardNavigation = ({
    title, image, path = '#!', onClick,
}) => (
    <CardButton>
        <CardNavigationTag
            as={Link}
            to={path}
            className="card-navigation"
            tabIndex="0"
            onClick={onClick}
        >

            <ItemImg
                src={image}
                alt={title}
                className="item-img"
            />

            <span>
                {title}
            </span>
        </CardNavigationTag>
    </CardButton>
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
