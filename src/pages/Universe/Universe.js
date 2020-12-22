import React from "react";

import NavGrid from "../../components/NavGrid";
import { Helmet } from 'react-helmet';

import {
    UniverseContainer
} from './styles';

export default class Universe extends React.Component {
  constructor() {
    super();

    this.state = {
      menus: [
        {
          path: "/universe/solarsystem",
          image: "https://www.flaticon.com/svg/static/icons/svg/3049/3049498.svg",
          title: "Solar System",
        },
      ],
    };
  }

  render() {
    const { menus } = this.state;

    return (
      <UniverseContainer>
        <h1>Discover the Universe</h1>
        <Helmet>
          <title>Universe | Space Hunter</title>
        </Helmet>
        <NavGrid items={menus} />
      </UniverseContainer>
    );
  }
}

/*
{
  path: "/universe",
  image: "https://image.flaticon.com/icons/svg/2949/2949023.svg",
  title: "Stars",
},
{
  path: "/universe",
  image: "https://image.flaticon.com/icons/svg/2590/2590225.svg",
  title: "Black Holes",
},
{
  path: "/universe",
  image:
    "https://www.flaticon.com/svg/static/icons/svg/3462/3462888.svg",
  title: "Properties",
},
{
  path: "/universe",
  image:
    "https://www.flaticon.com/svg/static/icons/svg/3061/3061864.svg",
  title: "Source",
},
{
  path: "/universe",
  image: "https://image.flaticon.com/icons/svg/947/947674.svg",
  title: "Galaxies",
},
{
  path: "/universe",
  image: "https://image.flaticon.com/icons/svg/2910/2910184.svg",
  title: "Asteroids",
},
{
  path: "/universe",
  image: "https://image.flaticon.com/icons/svg/3061/3061828.svg",
  title: "Constellations",
},
{
  path: "/universe",
  image: "https://image.flaticon.com/icons/svg/1396/1396329.svg",
  title: "Exoplanets",
},
*/