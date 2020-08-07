import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import ArrowLeft from '../../../../assets/images/arrowleft.svg';
import CardInfo from '../../../../components/CardInfo';
import CardsGrid from '../../../../components/CardsGrid';

export default class Mercury extends React.PureComponent {
  constructor() {
    super();
    this.state = {
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
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="planetMercury">
        <div className="headerMercury">
          <Link className="backMercury" to="/universe/solarsystem">
            <img src={ArrowLeft} alt="Voltar" />
          </Link>
          <div className="titleMercury">
            <h2>Mercury</h2>
          </div>
        </div>
        <div className="contentMercury">
          <div className="overviewMercury">
            <p>The Swiftest Planet</p>
          </div>
          <p className="descriptionMercury">From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmospher.</p>
          <CardsGrid>
            {
              cards.map(({ title, content }) => (
                <CardInfo
                  title={title}
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
