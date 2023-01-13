import { api } from '../services/api';

interface fetchImagesProps {
  pageParam: number;
}

const fetchImages = async ({
  pageParam = null,
}: fetchImagesProps): Promise<any> => {
  const data = api.get('/images', { params: { after: pageParam } });

  return data;
};

export default fetchImages;
