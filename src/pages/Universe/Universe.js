import React from 'react';
import NavGrid from '../../components/NavGrid';

export default class Universe extends React.Component {
  constructor() {
    super();

    this.state = {
      menus: [
        {
          path: '/universe/solarsystem',
          image: 'https://image.flaticon.com/icons/svg/547/547415.svg',
          title: 'Solar System',
        },
        {
          path: '/universe',
          image: 'https://image.flaticon.com/icons/svg/2949/2949023.svg',
          title: 'Stars',
        },
        {
          path: '/universe',
          image: 'https://image.flaticon.com/icons/svg/2590/2590225.svg',
          title: 'Black Holes',
        },
        {
          path: '/universe',
          image: 'https://image.flaticon.com/icons/svg/947/947674.svg',
          title: 'Galaxys',
        },
        {
          path: '/universe',
          image: 'https://image.flaticon.com/icons/svg/2910/2910184.svg',
          title: 'Asteroids',
        },
        {
          path: '/universe',
          image: 'https://image.flaticon.com/icons/svg/3061/3061828.svg',
          title: 'Constellations',
        },
        {
          path: '/universe',
          image: 'https://image.flaticon.com/icons/svg/1396/1396329.svg',
          title: 'Exoplanets',
        },
      ],
    };
  }

  render() {
    const { menus } = this.state;

    return <NavGrid items={menus} />;
  }
}
