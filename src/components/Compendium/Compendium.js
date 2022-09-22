import Select from '../Controls/Select/Select';
import { usePokemon } from '../Hooks/usePokemon';
import Loader from '../Loader/Loader';

import './Compendium.css';

export default function Compendium() {
  const { pokemon, types, setSelectedType, loading } = usePokemon();
  if (loading) return <Loader />;
  return (
    <div>
      <Select options={types} changeHandler={setSelectedType} />
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <div className="container">
            <img src={poke.url_image} />
            <div className="middle">
              <div className="text">
                <h1>{poke.pokemon}</h1>
                <h3>type: {poke.type_1}</h3>
                <h3>health: {poke.hp}</h3>
                <h3>attack: {poke.attack}</h3>
                <h3>defense: {poke.defense}</h3>
                <h3>speed: {poke.speed}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
