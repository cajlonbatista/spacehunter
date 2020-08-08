import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './index.css';

import ArrowLeft from '../../assets/images/arrowleft.svg';

class PageBack extends React.PureComponent {
  render() {
    const { history, title } = this.props;

    return (
      <div className="page-back">
        <button
          type="button"
          className="page-back-link"
          onClick={() => history.goBack()}
        >
          <img
            src={ArrowLeft}
            alt="Voltar"
          />
        </button>

        <h2 className="page-back-title">
          { title }
        </h2>
      </div>
    );
  }
}

PageBack.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default withRouter(PageBack);
