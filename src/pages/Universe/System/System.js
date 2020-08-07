import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import './System.css';
import land from '../../../assets/images/land.svg';

export default class System extends React.Component {
  constructor() {
    super();
    this.state = {
      mercury: false,
      venus: false,
      earth: false,
      mars: false,
      jupiter: false,
      saturn: false,
      uranus: false,
      neptune: false,
    };
  }

  onCloseDrawer(planet) {
    this.setState({ [planet]: false });
  }

  onShowDrawer(planet) {
    this.setState({ [planet]: true });
  }

  render() {
    return (
      <div className="system">
        <div className="titlePlanets">
          <img
            src={land}
            alt="title"
          />

          <h2>Come travel through the solar system</h2>
        </div>

        <div className="planets">
          <div
            onClick={() => this.onShowDrawer('mercury')}
            className="mary"
          >
            <img src="https://image.flaticon.com/icons/svg/2590/2590482.svg" width="50px" />

            Mercury
          </div>

          <Drawer
            title="Mercury"
            placement="right"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('mercury')}
            visible={this.state.mercury}
          >
            <figure>
              <img
                src="http://s2.glbimg.com/BgWxSZbymvV_HhJaGOTQqMWHGZn2-TkZ9LdOdYB9vrBIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2013/02/21/mercurio.jpg"
                width="100%"
              />

              <figcaption>
                Color image of the first planet Mercury released by NASA (Photo: NASA / AFP)
              </figcaption>
            </figure>

            <div className="status">
              <strong>Day duration:</strong>
              {' '}
              58d 15h 30m
              <br />
              <strong>Orbital period:</strong>
              {' '}
              88 days
              <br />
              <strong>Radius:</strong>
              {' '}
              2,439.7 km
              <br />
              <strong>Gravity: </strong>
              3.7 m / s²
              <br />
              <strong>Mass: </strong>
              3,285 × 10 ^ 23 kg
              <br />
              <strong>Planet Type:</strong>
              {' '}
              Terrestrial
              <br />
            </div>

            <Link className="more" to="/universe/solarsystem/mercury">
              Travel
            </Link>
          </Drawer>

          <div
            onClick={() => this.onShowDrawer('venus')}
            className="mary"
          >
            <img src="https://image.flaticon.com/icons/svg/361/361756.svg" width="50px" />

            Venus
          </div>

          <Drawer
            title="Venus"
            placement="left"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('venus')}
            visible={this.state.venus}
          >
            <figure>
              <img
                src="https://solarsystem.nasa.gov/system/resources/detail_files/775_PIA00271_detail.jpg"
                width="100%"
              />

              <figcaption>
                Venus - Computer Simulated Global View of the Northern Hemisphere
              </figcaption>
            </figure>

            <div className="status">
              <strong>Day duration:</strong>
              {' '}
              116d 18h 0m
              <br />
              <strong>Planet Type:</strong>
              {' '}
              Terrestrial
              <br />
              <strong>Orbital period:</strong>
              {' '}
              225 days
              <br />
              <strong>Radius:</strong>
              {' '}
              6051,8 km
              <br />
              <strong>Gravity:</strong>
              {' '}
              8,87 m/s²
              <br />
              <strong>Mass:</strong>
              {' '}
              4,867 × 10^24 kg
              <br />
            </div>

            <Link className="more" to="/universe/solarsystem/venus">
              Travel
            </Link>
          </Drawer>

          <div
            className="mary"
            onClick={() => this.onShowDrawer('earth')}
          >
            <img src="https://image.flaticon.com/icons/svg/2909/2909523.svg" width="50px" />

            Earth
          </div>

          <Drawer
            title="Earth"
            placement="right"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('earth')}
            visible={this.state.earth}
          >
            <figure>
              <img
                src="https://www.ccvalg.pt/astronomia/sistema_solar/terra/globe_east_full.jpg"
                width="100%"
              />

              <figcaption>Image of Earth, our home </figcaption>
            </figure>

            <div className="status">
              <strong>Day duration:</strong> 58d 15h 30m
              <br />
              <strong>Orbital period:</strong> 365,25 days
              <br />
              <strong>Radius:</strong> 6371 km
              <br />
              <strong>Gravity: </strong> 9,807 m/s²
              <br />
              <strong>Mass: </strong> 3,285 × 10 ^ 23 kg
              <br />
              <strong>Planet Type:</strong> Terrestrial
              <br />
              <strong>Moon: </strong> 1
              <br />
            </div>

            <Link className="more" to="/universe/solarsystem/earth">
              Travel
            </Link>
          </Drawer>

          <div
            className="mary"
            onClick={() => this.onShowDrawer('mars')}
          >
            <img src="https://image.flaticon.com/icons/svg/124/124582.svg" width="50px" />

            Mars
          </div>

          <Drawer
            title="Mars"
            placement="left"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('mars')}
            visible={this.state.mars}
          >
            <figure>
              <img
                src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg"
                width="100%"
              />

              <figcaption>
                Image of Mars, our next home ?
              </figcaption>
            </figure>

            <div className="status">
              <strong>Day duration:</strong>
              {' '}
              24,6 hours
              <br />
              <strong>Orbital period:</strong>
              {' '}
              686,971 dias
              <br />
              <strong>Equatorial diameter:</strong>
              {' '}
              6792,4 km
              <br />
              <strong>Gravity: </strong>
              3,711 m/s²
              <br />
              <strong>Mass: </strong>
              6,4174×1023 kg
              <br />
              <strong>Planet Type:</strong>
              {' '}
              Terrestrial
              <br />
              <strong>Moons: </strong>
              {' '}
              Fobos, Deimos
              <br />
            </div>

            <Link className="more" to="">
              Travel
            </Link>
          </Drawer>

          <div
            className="mary"
            onClick={() => this.onShowDrawer('jupiter')}
          >
            <img src="https://image.flaticon.com/icons/svg/1266/1266581.svg" width="50px" />

            Jupiter
          </div>

          <Drawer
            title="Mars"
            placement="right"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('jupiter')}
            visible={this.state.jupiter}
          >
            <figure>
              <img
                src="https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg"
                width="100%"
              />

              <figcaption>
                Hubble's New Portrait of Jupiter
              </figcaption>
            </figure>

            <div className="status">
              <strong>Atmospheric pressure: </strong>
              20-200 KPa
              <br />
              <strong>Orbital period: </strong>
              4 331,572 days
              <br />
              <strong>Equatorial diameter:</strong>
              {' '}
              142 984 ± 8 km
              <br />
              <strong>Gravity: </strong>
              3,711 m/s²
              <br />
              <strong>Mass: </strong>
              318 Earths
              <br />
              <strong>Planet Type:</strong>
              {' '}
              Gas Giant
              <br />
              <strong>Moons: </strong>
              53 confirmed | 26 provisional (79 total)
              <br />
            </div>
            <Link className="more" to="">Travel</Link>
          </Drawer>

          <div
            onClick={() => this.onShowDrawer('saturn')}
            className="mary"
          >
            <img src="https://image.flaticon.com/icons/svg/2949/2949024.svg" width="50px" />

            Saturn
          </div>

          <Drawer
            title="Saturn"
            placement="left"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('saturn')}
            visible={this.state.saturn}
          >
            <figure>
              <img
                src="https://solarsystem.nasa.gov/system/resources/detail_files/2490_stsci-h-p1943a-f_1200.jpg"
                width="100%"
              />

              <figcaption>
                Saturn's Rings Shine in Hubble Portrait
              </figcaption>
            </figure>

            <div className="status">
              <strong>Radius: </strong>
              58232 km
              <br />
              <strong>Orbital period: </strong>
              29 years
              <br />
              <strong>Surface area: </strong>
              4,27 × 10^10 km²
              <br />
              <strong>Gravity: </strong>
              10,44 m/s²
              <br />
              <strong>Mass: </strong>
              318 Earths
              <br />
              <strong>Planet Type: </strong>
              {' '}
              Gas Giant
              <br />
              <strong>Day: </strong>
              0d 10h 42m
              <br />
              <strong>Moons: </strong>
              53 confirmed | 29 provisional
              <br />
            </div>

            <Link className="more" to="">
              Travel
            </Link>
          </Drawer>

          <div
            onClick={() => this.onShowDrawer('uranus')}
            className="mary"
          >
            <img src="https://image.flaticon.com/icons/svg/2531/2531049.svg" width="50px" />

            Uranus
          </div>

          <Drawer
            title="Uranus"
            placement="right"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('uranus')}
            visible={this.state.uranus}
          >
            <figure>
              <img
                src="https://solarsystem.nasa.gov/system/resources/detail_files/599_PIA18182.jpg"
                width="100%"
              />

              <figcaption>
                Uranus as seen by NASA's Voyager 2
              </figcaption>
            </figure>

            <div className="status">
              <strong>Radius: </strong>
              25362 km
              <br />
              <strong>Orbital period: </strong>
              84 years
              <br />
              <strong>Surface area: </strong>
              8,083 × 10^9 km²
              <br />
              <strong>Gravity: </strong>
              8,69 m/s²
              <br />
              <strong>Mass: </strong>
              14,5 Terras
              <br />
              <strong>Planet Type: </strong>
              Ice Giant
              <br />
              <strong>Day: </strong>
              0d 10h 42m
              <br />
              <strong>Moons: </strong>
              27
              <br />
            </div>

            <Link className="more" to="">
              More
            </Link>
          </Drawer>

          <div
            className="mary"
            onClick={() => this.onShowDrawer('neptune')}
          >
            <img src="https://image.flaticon.com/icons/svg/1086/1086088.svg" width="40px" />

            Neptune
          </div>

          <Drawer
            title="Neptune"
            placement="right"
            closable={false}
            className="planet"
            onClose={() => this.onCloseDrawer('neptune')}
            visible={this.state.neptune}
          >
            <figure>
              <img
                src="https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg"
                width="100%"
              />

              <figcaption>
                Neptune Full Disk View
              </figcaption>
            </figure>

            <div className="status">
              <strong>Radius: </strong>
              24622 km
              <br />
              <strong>Orbital period: </strong>
              165 years
              <br />
              <strong>Surface area: </strong>
              7,6183×109 km²
              <br />
              <strong>Gravity: </strong>
              11,15 m/s²
              <br />
              <strong>Mass: </strong>
              1,0243×1026kg
              <br />
              <strong>Planet Type: </strong>
              Ice Giant
              <br />
              <strong>Day: </strong>
              0d 16h
              <br />
              <strong>Moons: </strong>
              14
              <br />
            </div>

            <Link
              className="more"
              to="/"
            >
              More
            </Link>
          </Drawer>
        </div>
      </div>
    );
  }
}