import { useMutation, useQueryClient } from 'react-query';
import { serverRequest, resolve } from '../utils/resolveRequest';

const addPlant = async (id, token) => {
  return await resolve(
    serverRequest
      .post(
        `/addPlant/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => res.data)
  );
};

export default function useAddPlant() {
  const queryClient = useQueryClient();
  return useMutation(({ id, token }) => addPlant(id, token), {
    onSettled: () => {
      queryClient.invalidateQueries('garden');
    },
  });
}
