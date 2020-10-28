import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PokemonReducer from "./reducers/PokemonReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  pokemon: PokemonReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof reducers>;

export default store;
