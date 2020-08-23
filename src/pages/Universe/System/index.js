import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { MeteorRainLoading } from 'react-loadingg';
import NavGrid from '../../../components/NavGrid';
import CardNavigation from '../../../components/NavGrid/CardNavigation';

import api from '../../../utils/axios';
import { Loading } from '../../../utils/styles/general';
import {
  PageHeader, HeaderTitle, DrawerInfo, DrawerButton,
} from './styles';
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
      ? <Loading><MeteorRainLoading /></Loading>
      : (
        <div>
          <PageHeader>
            <img
              src={land}
              alt="title"
            />
            <HeaderTitle>
              Come travel through the solar system
            </HeaderTitle>
          </PageHeader>

          <NavGrid>
            {
              planets.map(({ planet, drawer: drawerArr }, i) => {
                const { activePlanet } = this.state;
                const [drawer] = drawerArr;
                
                return (
                  <span key={i} style={{textTransform: "capitalize"}}>
                    <CardNavigation
                      title={planet}
                      image="https://image.flaticon.com/icons/svg/2590/2590482.svg"
                      onClick={() => this.onShowDrawer(planet)}
                    />

                    <Drawer
                      style={{textTransform: "capitalize"}}
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

                      <DrawerInfo>
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
                      </DrawerInfo>

                      <DrawerButton
                        as={Link}
                        to={`/universe/solarsystem/${planet}`}
                      >
                        Travel
                      </DrawerButton>
                    </Drawer>
                  </span>
                );
              })
            }
          </NavGrid>
        </div>
      );
  }
}
