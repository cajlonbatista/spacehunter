import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

import PageBack from '../../../../components/PageBack';
import CardInfo from '../../../../components/CardInfo';
import CardsGrid from '../../../../components/CardsGrid';

class Planet extends PureComponent {
  constructor() {
    super();
    this.state = {
      planet: '',
      cards: [],
      planetTitle: '',
      planetImage: '',
      description: '',
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    // get dada from API
    const planetInfo = {
      planet: params.planet,
      planetTitle: 'The Swiftest Planet',
      description: 'From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmospher.',
      planetImage: 'url(https://solarsystem.nasa.gov/system/resources/detail_files/2266_PIA19216_1280.jpg)',
      cards: [
        {
          title: 'SMALLEST',
          content: 'Mercury is the smallest planet in our solar system—only slightly larger than Earth\'s Moon.',
        },
        {
          title: 'INSIDER',
          content: `It is the closest planet to the Sun at a distance of about 36 million miles (58 million 
            kilometers) or 0.39 AU.`,
        },
        {
          title: 'LONG DAYS, SHORT YEARS',
          content: `One day on Mercury (the time it takes for Mercury to rotate or spin once with respect
            to the stars) takes 59 Earth days. One day-night cycle on Mercury takes 175.97 Earth
            days. Mercury makes a complete orbit around the Sun (a year in Mercury time) in just
            88 Earth days.`,
        },
        {
          title: 'ROUGH SURFACE',
          content: `Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid,
            cratered surface, much like the Earth's moon.`,
        },
        {
          title: 'CAN\'T BREATHE IT',
          content: `Mercury's thin atmosphere, or exosphere, is composed mostly of oxygen (O2), sodium
            (Na), hydrogen (H2), helium (He), and potassium (K). Atoms that are blasted off the
            surface by the solar wind and micrometeoroid impacts create Mercury's exosphere.`,
        },
        {
          title: 'MOONLESS',
          content: 'Mercury has no moons.',
        },
        {
          title: 'RINGLESS',
          content: 'There are no rings around Mercury.',
        },
        {
          title: 'TOUGH PLACE TO LIVE',
          content: ` No evidence for life has been found on Mercury. Daytime Temperatures can reach 430
            degrees Celsius (800 degrees Fahrenheit) and drop to -180 degrees Celsius
            (-290 degrees Fahrenheit) at night. It is unlikely life (as we know it) could survive
            on this planet.`,
        },
        {
          title: 'BIG SUN',
          content: `Standing on Mercury's surface at its closest approach to the Sun, our star would
            appear more than three times larger than it does on Earth.`,
        },
        {
          title: 'ROBOTIC VISITORS',
          content: `The two spacecraft of ESA-JAXA's BepiColombo are en route to Mercury. NASA's Mariner
            10 was the first mission to explore Mercury. NASA's MESSENGER was the first to orbit
            the innermost planet.`,
        },
      ],
    };

    this.setState({
      ...planetInfo,
    });
  }

  render() {
    const {
      cards,
      planet,
      planetTitle,
      planetImage,
      description,
    } = this.state;

    return (
      <div className="planet">
        <PageBack title={planet} />

        <div className="planet-content">
          <div
            className="overview"
            style={{
              backgroundImage: planetImage,
            }}
          >
            <p>{ planetTitle }</p>
          </div>

          <p className="description">
            { description }
          </p>

          <CardsGrid>
            {
              cards.map(({ title, content }, i) => (
                <CardInfo
                  title={title}
                  key={i}
                  content={content}
                />
              ))
            }
          </CardsGrid>
        </div>
      </div>
    );
  }
}

Planet.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      planet: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Planet);
