import React from 'react';
import usePokemonQuery from '../../hooks/usePokemonQuery';

const Card = ({ id }) => {
  const { status, data, error, isFetching } = usePokemonQuery(id);

  return (
    <div>
      {/* <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div> */}
      {!id || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.name}</h1>

          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
};

export default Card;
