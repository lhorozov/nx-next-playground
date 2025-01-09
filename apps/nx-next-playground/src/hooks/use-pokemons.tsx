'use client';
import { useEffect, useState } from 'react';

const usePokemons = ({ limit = 20, offset = 20 } = {}) => {
  const [pokemons, setPokemons] = useState<{
    count: number;
    next: string;
    previous: string;
    results: { name: string; url: string }[];
  }>({ count: 0, next: '', previous: '', results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setPokemons(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [limit, offset]);

  return { pokemons: pokemons.results, loading };
};

export default usePokemons;
