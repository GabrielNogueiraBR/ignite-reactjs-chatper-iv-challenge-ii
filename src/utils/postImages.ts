import { AxiosResponse } from 'axios';
import { api } from '../services/api';

export type PostImageData = {
  url: string;
  title: string;
  description: string;
};

const postImages = async (data: PostImageData): Promise<AxiosResponse> => {
  return api.post('/images', data);
};

export default postImages;
