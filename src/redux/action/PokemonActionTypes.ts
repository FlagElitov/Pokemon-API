export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const REQUEST_POKEMON = "REQUEST_POKEMON";

export const pokemonLoading = () => ({ type: POKEMON_LOADING });
export const pokemonFail = () => ({ type: POKEMON_FAIL });
export const pokemonSuccess = (payload: PokemonType) => ({
  type: POKEMON_SUCCESS,
  payload,
});
export const pokemonRequest = (payload: string) => ({
  type: REQUEST_POKEMON,
  payload,
});

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStats[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};
export type PokemonSprites = {
  front_default: string;
};
export type PokemonStats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}
export interface PokemonFail {
  type: typeof POKEMON_FAIL;
}
export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}
export interface RequestPokemon {
  type: typeof REQUEST_POKEMON;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;
