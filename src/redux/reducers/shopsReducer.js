import {API} from  "../../api/shopsAPI"


// consts
const SET_SHOPS_WITH_PRODUCTS = "shopsReducer/SET_SHOPS_WITH_PRODUCTS"

let initialState = {
    data: null
};

const shopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPS_WITH_PRODUCTS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

const setShopsWithProducts = (data) => ({
    type: SET_SHOPS_WITH_PRODUCTS,
    data
})

export const getShopsWithProducts = () => async (dispatch) => {
    const data = await API.getShopsWithProducts()
    dispatch(setShopsWithProducts(data))
}


export default shopsReducer


