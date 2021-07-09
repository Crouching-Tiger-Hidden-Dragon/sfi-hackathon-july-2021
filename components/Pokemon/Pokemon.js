import React, { useState } from 'react';
import Card from './Card';
import IdInput from './IdInput';

const Pokemon = () => {
  const [pokemonId, setPokemonId] = useState(null);
  return (
    <div>
      <IdInput setId={setPokemonId} />
      {pokemonId && <Card id={pokemonId} />}
    </div>
  );
};

export default Pokemon;
