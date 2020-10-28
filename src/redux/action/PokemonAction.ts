import axios from "axios";
import { Dispatch } from "redux";
import {
  PokemonDispatchTypes,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
  POKEMON_LOADING,
} from "./PokemonActionTypes";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({ type: POKEMON_LOADING });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({ type: POKEMON_SUCCESS, payload: res.data });
    console.log(res.data);
  } catch (e) {
    dispatch({ type: POKEMON_FAIL });
  }
};
