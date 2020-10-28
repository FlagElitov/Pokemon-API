import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./redux/redux-store";
import "./App.css";
import { GetPokemon } from "./redux/action/PokemonAction";

const App = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = React.useState<string>("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleClick = () => dispatch(GetPokemon(pokemonName));
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon?.abilities.map((ability) => {
            return <p key={ability.ability.name}>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
