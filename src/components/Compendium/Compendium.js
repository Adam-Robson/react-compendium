import Select from '../Controls/Select/Select';
import { usePokemon } from '../Hooks/usePokemon';

import './Compendium.css';

export default function Compendium() {
  const { pokemon, types, setSelectedType, loading } = usePokemon();
  if (loading) return <div className="loader"></div>;
  return (
    <div>
      <Select options={types} changeHandler={setSelectedType} />
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <h1>{poke.pokemon}</h1>
          <h3>{poke.type_1}</h3>
          <h3>{poke.type_2}</h3>
        </div>
      ))}
    </div>
  );
}
