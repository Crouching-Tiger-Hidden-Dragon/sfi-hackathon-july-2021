import request from './utils/request';
import resolve from './utils/resolve';

export const getPokemonByNum = async (id) => {
  return await resolve(request.get(`pokemon/${id}`).then((res) => res.data));
};
