/* eslint-disable */
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        const data = await fetchPokemon();
        setPokemon(data);
    };
    loadData();

  }, []);
  return { pokemon };
}