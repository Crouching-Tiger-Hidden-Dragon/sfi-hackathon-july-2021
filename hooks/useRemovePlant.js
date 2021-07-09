import { useMutation, useQueryClient } from 'react-query';
import { resolve, serverRequest } from '../utils/resolveRequest';

const removePlant = async (id, token) => {
  return await resolve(
    serverRequest
      .delete(`/removePlant/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data)
  );
};

export default function useRemovePlant() {
  const queryClient = useQueryClient();
  return useMutation(({ id, token }) => removePlant(id, token), {
    onSettled: () => {
      queryClient.invalidateQueries('garden');
    },
  });
}
