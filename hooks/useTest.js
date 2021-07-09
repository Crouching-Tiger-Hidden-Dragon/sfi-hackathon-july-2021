import { useQuery } from 'react-query';
import { resolve, serverRequest } from '../utils/resolveRequest';

const getTest = async (token) => {
  return await resolve(
    serverRequest
      .get(`/test`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
  );
};

export default function useTest(token) {
  return useQuery('test', () => getTest(token), { enabled: false });
}
