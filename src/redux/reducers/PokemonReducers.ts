import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_LOADING,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from "./../action/PokemonActionTypes";
export interface initialStateT {
  loading: boolean;
  faile?: boolean;
  pokemon?: PokemonType;
}

const initialState: initialStateT = {
  loading: false,
  faile: false,
};

const PokemonReducer = (
  state: initialStateT = initialState,
  action: PokemonDispatchTypes
) => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        ...state,
        faile: false,
        loading: true,
      };

    case POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        faile: true,
      };

    case POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};

export default PokemonReducer;
