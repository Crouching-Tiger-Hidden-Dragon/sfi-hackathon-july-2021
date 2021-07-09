import { useQuery } from 'react-query';
import { request, resolve } from './utils/resolveRequest';

const getGarden = async (userId) => {
  // ADD BACK `garden/${userId}`
  return await resolve(request.get(`/garden`).then((res) => res.data));
};

export default function useGarden(userId) {
  return useQuery(['garden', { userId }], () => getGarden(userId));
}
