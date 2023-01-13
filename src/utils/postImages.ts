import { api } from '../services/api';

const postImages = async data => {
  return api.post('/images', data);
};

export default postImages;
