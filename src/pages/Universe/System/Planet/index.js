import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SolarSystemLoading } from 'react-loadingg';
import PropTypes from 'prop-types';

import api from '../../../../utils/axios';
import './styles.css';

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
      ? <div className="loading"><SolarSystemLoading /></div>
      : (
        <div className="planet">
          <PageBack title={planet} />

          <div className="planet-content">
            <div
              className="overview"
              style={{
                backgroundImage: `url(${planetImage})`,
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
