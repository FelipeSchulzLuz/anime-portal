import { createStore } from "redux";
import { reducers } from "../reducers/animes";

const store = createStore(reducers);
export { store };