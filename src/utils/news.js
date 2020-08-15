import axios from 'axios';

function error(message) {
  throw new Error(message);
}

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL_NEWS || error('No API url provided'),
});
