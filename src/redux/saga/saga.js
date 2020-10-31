import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_POKEMON,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
  POKEMON_LOADING,

} from "../action/PokemonActionTypes";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POKEMON, sagaWorker);
}

function* sagaWorker({ pokemonName }) {
  try {
    yield put({ type: POKEMON_LOADING });
    const payload = yield call(
      axios.get,
      `https://pokeapi.co/api/v2/pokemon/${pokemonName ? pokemonName : "0"}`
    );
    yield put({ type: POKEMON_SUCCESS, payload: payload.data });
  } catch (e) {
    yield put({ type: POKEMON_FAIL });
  }
}
