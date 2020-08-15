import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ArrowLeft from '../../assets/images/arrowleft.svg';
import { Back, LinkBack, BackTitle } from './styles';

class PageBack extends React.PureComponent {
  render() {
    const { history, title } = this.props;

    return (
      <Back>
        <LinkBack
          type="button"
          onClick={() => history.goBack()}
        >
          <img
            src={ArrowLeft}
            alt="Voltar"
          />
        </LinkBack>
        <BackTitle>
          { title }
        </BackTitle>
      </Back>
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
