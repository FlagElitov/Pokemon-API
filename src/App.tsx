import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./redux/redux-store";
import "./App.css";
import { REQUEST_POKEMON } from "./redux/action/PokemonActionTypes";
import Loader from "./assest/loader";
import { initialStateT } from "./redux/reducers/PokemonReducers";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = React.useState<string | null>("0");
  const pokemonState: initialStateT = useSelector(
    (state: RootStore) => state.pokemon
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleClick = () => dispatch({ type: REQUEST_POKEMON, pokemonName });
  return (
    <div className="App">
      {pokemonState.faile && (
        <div className="alert alert-danger" role="alert">
          Введите правильно запрос!
        </div>
      )}
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {pokemonState.loading && (
        <div>
          <Loader />
        </div>
      )}
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
