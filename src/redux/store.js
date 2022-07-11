import {applyMiddleware, combineReducers, createStore,} from "redux";
import thunkMiddleware from "redux-thunk"


import shopsReducer from "./reducers/shopsReducer"
import certReducer from "./reducers/cartReducer";


let reducers = combineReducers({
    shopsPage: shopsReducer,
    cartPage: certReducer
});

let store = createStore(reducers,  applyMiddleware(thunkMiddleware));

export default store

