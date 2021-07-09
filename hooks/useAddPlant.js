import { useMutation, useQuery } from 'react-query';
import { request, resolve } from './utils/resolveRequest';

const addPlant = async (req) => {
  return await resolve(request.post(`/garden`, req).then((res) => res.data));
};

export default function useAddPlant() {
  return useMutation(({ userId, plantId, name, image }) =>
    addPlant({ userId, plantId, name, image })
  );
}
