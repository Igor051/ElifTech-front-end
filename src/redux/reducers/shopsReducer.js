import {API} from "../../api/shopsAPI"
import {setShopsWithProductsAC, setActiveShopAC} from "./shopsReducerFolder/AC"
import {ACTIVE_SHOP_ID_TO_UNDEFINED, SET_ACTIVE_SHOP_ID, SET_SHOPS_WITH_PRODUCTS} from "./shopsReducerFolder/constants"

import {loadFromLocalStorageShopsPage as loadFromLocalStorage}
    from "./shopsReducerFolder/loadFromLocalStorage"


let initialState = {
    ShopsList: null,
    activeShopId: loadFromLocalStorage()
};

const shopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPS_WITH_PRODUCTS:
            return {
                ...state,
                ShopsList: action.data
            }
        case SET_ACTIVE_SHOP_ID:
            return {
                ...state,
                activeShopId: action.shop_id
            }
        case ACTIVE_SHOP_ID_TO_UNDEFINED:
            return {
                ...state,
                activeShopId: undefined
            }
        default:
            return state
    }
}

export const getShopsWithProducts = () => async (dispatch) => {
    const data = await API.getShopsWithProducts()
    dispatch(setShopsWithProductsAC(data))
}

export const setActiveShopId = (shop_id) => async (dispatch) => {
    dispatch(setActiveShopAC(shop_id))
}

export default shopsReducer


