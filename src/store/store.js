import { createStore } from "redux";
import { reducers } from "../reducers/animes";
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from 'redux-thunk'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
    reducers: reducers,
})
export default store;






// const store = createStore(reducers);
// export { store }
//////////