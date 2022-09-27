/* eslint-disable */
import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      try {
        const data = await fetchPokemon(selectedType);
        setPokemon(data);
        setTimeout(() => setLoading(false), 1000);
      } catch (e) {
        console.error(e);
      }
    };
    loadData();
  }, [selectedType]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadTypes();
  }, []);

  return { pokemon, types, setSelectedType, loading };
}