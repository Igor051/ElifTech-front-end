import {applyMiddleware, combineReducers, createStore,} from "redux";
import thunkMiddleware from "redux-thunk"


import shopsReducer from "./reducers/shopsReducer"
import certReducer from "./reducers/cartReducer";


let reducers = combineReducers({
    shopsPage: shopsReducer,
    cartPage: certReducer
});

function saveCartToLocalStorage(state) {
    try {
        const cartPage = JSON.stringify(state.cartPage);
        localStorage.setItem("cart", cartPage);
    } catch (e) {
        console.warn(e);
    }
}

function saveActiveShopIdToLocalStorage(state) {
    try{
        const activeShopId = JSON.stringify(state.shopsPage.activeShopId);
        localStorage.setItem("activeShopId", activeShopId)
    }catch (e) {
        console.warn(e);
    }
}

// // load string from localStorage and convert into an Object
// // invalid output must be undefined
// function loadFromLocalStorage() {
//     try {
//         const serialisedState = localStorage.getItem("persistentState");
//         if (serialisedState === null) return undefined;
//         return JSON.parse(serialisedState);
//     } catch (e) {
//         console.warn(e);
//         return undefined;
//     }
// }

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

store.subscribe(() => saveCartToLocalStorage(store.getState()));
store.subscribe(()=> saveActiveShopIdToLocalStorage(store.getState()))
export default store

