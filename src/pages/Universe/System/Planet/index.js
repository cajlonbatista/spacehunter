import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SolarSystemLoading } from 'react-loadingg';
import PropTypes from 'prop-types';

import api from '../../../../utils/axios';
import { Loading } from '../../../../utils/styles/general';
import {
  Description, Overview, PlanetTag, PlanetContent, Title,
} from './styles';

import PageBack from '../../../../components/PageBack';
import CardInfo from '../../../../components/CardInfo';
import CardsGrid from '../../../../components/CardsGrid';

class Planet extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      planet: '',
      cards: [],
      planetTitle: '',
      planetImage: '',
      description: '',
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    api.get(`/planets/${params.planet}`)
      .then(({ data }) => this.setState({ ...data }))
      .catch(console.error)
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const {
      loading,
      cards,
      planet,
      planetTitle,
      planetImage,
      description,
    } = this.state;

    return loading
      ? <Loading><SolarSystemLoading /></Loading>
      : (
        <PlanetTag>
          <PageBack title={planet} />

          <PlanetContent>
            <Overview src={planetImage}>
              <Title>{ planetTitle }</Title>
            </Overview>

            <Description>
              { description }
            </Description>

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
          </PlanetContent>
        </PlanetTag>
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
