import { useQuery } from 'react-query';
import { resolve, serverRequest } from '../utils/resolveRequest';

const getLibrary = async (token) => {
  return await resolve(
    serverRequest
      .get(`/getAllPlants`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
  );
};

export default function useLibrary(token) {
  return useQuery('library', () => getLibrary(token), {
    enabled: Boolean(token),
    cacheTime: 1000,
  });
}
