import { useMutation, useQueryClient } from 'react-query';
import { serverRequest, resolve } from '../utils/resolveRequest';

const logWatering = async (id, token) => {
  return await resolve(
    serverRequest
      .post(
        `/addWater/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => res.data)
  );
};

export default function useLogWatering() {
  const queryClient = useQueryClient();
  return useMutation(({ id, token }) => logWatering(id, token), {
    onSettled: () => {
      queryClient.invalidateQueries('garden');
    },
  });
}
