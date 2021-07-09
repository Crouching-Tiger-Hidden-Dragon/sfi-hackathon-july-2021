import { useQuery } from 'react-query';
import { getPokemonByNum } from '../api/pokemon';

const usePokemonQuery = (id) => {
  return useQuery(['pokemon', { id }], () => getPokemonByNum(id));
};

export default usePokemonQuery;
