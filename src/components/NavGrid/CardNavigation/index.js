import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconButton, CardContent } from '@material-ui/core';
import { CardNavigationTag, ItemImg } from './styles';

const CardNavigation = ({
    title, image, path = '#!', onClick,
}) => (
    <>
        <CardNavigationTag
            as={Link}
            to={path}
            tabIndex="0"
            onClick={onClick}
        >

            <ItemImg
                src={image}
                alt={title}
            />

            <span>
                {title}
            </span>
        </CardNavigationTag>
    </>
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
