import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_POKEMON,
  pokemonLoading,
  pokemonSuccess,
  pokemonFail,
} from "../action/PokemonActionTypes";
const takeEveryUp: any = takeEvery;
export function* sagaWatcher() {
  yield takeEveryUp(REQUEST_POKEMON, sagaWorker);
}

function* sagaWorker({ pokemonName }: { pokemonName: any }) {
  try {
    yield put(pokemonLoading());
    const payload = yield call(
      axios.get,
      `https://pokeapi.co/api/v2/pokemon/${pokemonName ? pokemonName : "0"}`
    );
    yield put(pokemonSuccess(payload.data));
  } catch (e) {
    yield put(pokemonFail());
  }
}
