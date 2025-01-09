'use client';

import React from 'react';
import usePokemons from '../hooks/use-pokemons';

const App = () => {
  const { pokemons, loading } = usePokemons();

  return (
    <>
      <h1>Route /</h1>
      <div>
        {loading && <p>Loading...</p>}
        {pokemons && pokemons.map((p) => <div key={p.name}>{p.name}</div>)}
      </div>
    </>
  );
};

export default App;
