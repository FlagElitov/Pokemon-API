import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_LOADING,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from "./../action/PokemonActionTypes";
interface initialStateT {
  loading: boolean;
  pokemon?: PokemonType;
}

const initialState: initialStateT = {
  loading: false,
};

const PokemonReducer = (
  state: initialStateT = initialState,
  action: PokemonDispatchTypes
) => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        loading: true,
      };

    case POKEMON_FAIL:
      return {
        loading: false,
      };

    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};

export default PokemonReducer;
