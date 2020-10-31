import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import PokemonReducer from "./reducers/PokemonReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaWatcher } from "./saga/saga";

const saga = createSagaMiddleware();
const reducers = combineReducers({
  pokemon: PokemonReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));
saga.run(sagaWatcher);
export type RootStore = ReturnType<typeof reducers>;

export default store;
