import { useQuery } from 'react-query';
import { request, resolve } from './utils/resolveRequest';

const getLibrary = async () => {
  return await resolve(request.get(`/library`).then((res) => res.data));
};

export default function useLibrary() {
  return useQuery('library', getLibrary);
}
