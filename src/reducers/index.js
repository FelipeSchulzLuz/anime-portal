import { combineReducers } from 'redux'
import { reducers as animeReducers } from './anime';


const reducers = combineReducers(
    animeReducers
);

export { reducers }