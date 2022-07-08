import {applyMiddleware, combineReducers, createStore,} from "redux";
import thunkMiddleware from "redux-thunk"


import shopsReducer from "./reducers/shopsReducer"


let reducers = combineReducers({
    shopsPage: shopsReducer
});

let store = createStore(reducers,  applyMiddleware(thunkMiddleware));

export default store

