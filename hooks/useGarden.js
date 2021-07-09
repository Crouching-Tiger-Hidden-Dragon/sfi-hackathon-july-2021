import { useQuery } from 'react-query';
import { serverRequest, resolve } from '../utils/resolveRequest';

const getGarden = async (token) => {
  return await resolve(
    serverRequest
      .get(`/getMyGarden`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
  );
};

export default function useGarden(token) {
  return useQuery(['garden', { token }], () => getGarden(token), {
    enabled: Boolean(token),
    cacheTime: 1000,
  });
}
