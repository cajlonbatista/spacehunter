import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import api from '../../utils/axios';

class NewsSingle extends PureComponent {
  constructor() {
    super();
    this.state = {
      news: {},
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    // api.get(`/articles/${params.id}`)
    //   .then(({ data: news }) =>{
    //     this.setState({ news });
    //   })
    //   .catch(() => {
    //     //
    //   });
    // { data: news }
    fetch(`https://kauton.herokuapp.com/api/articles/${params.id}`)
      .then((res) => res.json())
      .then((news) => {
        this.setState({ news });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    const { news } = this.state;

    return (
      <div>
        eae
        { news.title }
      </div>
    );
  }
}

NewsSingle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NewsSingle;
