import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { MeteorRainLoading } from 'react-loadingg';

import api from '../../../utils/axios';
import './index.css';
import land from '../../../assets/images/land.svg';

export default class System extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      planets: [],
      activePlanet: '',
    };
  }

  componentDidMount() {
    api.get('/planets')
      .then(({ data }) => this.setState({ planets: data }))
      .catch(console.error)
      .finally(() => this.setState({ loading: false }));
  }

  onCloseDrawer() {
    this.setState({ activePlanet: '' });
  }

  onShowDrawer(planet) {
    this.setState({ activePlanet: planet });
  }

  render() {
    const { planets, loading } = this.state;

    return loading
      ? <MeteorRainLoading />
      : (
        <div className="system">
          <div className="titlePlanets">
            <img
              src={land}
              alt="title"
            />

            <h2>Come travel through the solar system</h2>
          </div>

          <div className="planets">
            {
              planets.map(({ planet, drawer: drawerArr }) => {
                const { activePlanet } = this.state;
                const [drawer] = drawerArr;

                return (
                  <>
                    <div
                      className="mary"
                      role="button"
                      tabIndex="0"
                      onClick={() => this.onShowDrawer(planet)}
                      onKeyDown={(e) => e.keyCode === 13 && this.onShowDrawer(planet)}
                    >
                      <img
                        src="https://image.flaticon.com/icons/svg/2590/2590482.svg"
                        alt={planet}
                        width="50px"
                      />

                      { planet }
                    </div>

                    <Drawer
                      title={planet}
                      placement="right"
                      closable={false}
                      className="planet"
                      onClose={() => this.onCloseDrawer()}
                      visible={activePlanet === planet}
                    >
                      <figure>
                        <img
                          src={drawer.imgDrawer}
                          alt={planet}
                          width="100%"
                        />

                        <figcaption>
                          { drawer.descriptionDrawer }
                        </figcaption>
                      </figure>

                      <div className="status">
                        <strong>Day duration:</strong>
                        {' '}
                        { drawer.dayDuration }
                        <br />
                        <strong>Orbital period:</strong>
                        {' '}
                        { drawer.orbitalPeriod }
                        <br />
                        <strong>Radius:</strong>
                        {' '}
                        { drawer.radius }
                        <br />
                        <strong>Gravity: </strong>
                        { drawer.gravity }
                        <br />
                        <strong>Mass: </strong>
                        { drawer.mass }
                        <br />
                        <strong>Planet Type:</strong>
                        {' '}
                        { drawer.type }
                        <br />
                      </div>

                      <Link
                        className="more"
                        to={`/universe/solarsystem/${planet}`}
                      >
                        Travel
                      </Link>
                    </Drawer>
                  </>
                );
              })
            }
          </div>
        </div>
      );
  }
}
