import { useMutation, useQuery } from 'react-query';
import { request, resolve } from './utils/resolveRequest';

const removePlant = async (id) => {
  return await resolve(request.delete(`/garden/${id}`).then((res) => res.data));
};

export default function useAddPlant() {
  return useMutation((id) => removePlant(id));
}
