import {ACTIVE_SHOP_ID_TO_UNDEFINED, SET_ACTIVE_SHOP_ID, SET_SHOPS_WITH_PRODUCTS} from "./constants"

export const setShopsWithProductsAC = (data) => ({
    type: SET_SHOPS_WITH_PRODUCTS,
    data
})

export const setActiveShopAC = (shop_id) => ({
        type: SET_ACTIVE_SHOP_ID,
        shop_id
    }
)

export const activeShopIdToUndefinedAC = () => ({
    type: ACTIVE_SHOP_ID_TO_UNDEFINED
})