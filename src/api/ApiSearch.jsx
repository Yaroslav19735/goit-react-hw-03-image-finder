import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '31321520-a449ef359707c8e5cdb01953a';

export const fetchImages = async (subject, page) => {
  const responce = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&per_page=12&q=${subject}&page=${page}`
  );
  return responce.data.hits;
};

fetchImages.propTypes = {
  subject: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};