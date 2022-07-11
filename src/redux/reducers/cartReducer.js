import {logDOM} from "@testing-library/react";
import {API} from "../../api/cartAPI"

const ADD_NEW_PRODUCT = "cartReducer/ADD_PRODUCT"
const INCREASE_PRODUCT_COUNT = "cartReducer/INCREASE_PRODUCT_COUNT"
const CHANGE_PRODUCT_AMOUNT = "cartReducer/CHANGE_PRODUCT_AMOUNT"
const REMOVE_PRODUCT_CART = "cartReducer/REMOVE_PRODUCT_CART"
const CHANGE_INPUT_NAME_VALUE = "cartReducer/CHANGE_INPUT_NAME_VALUE"
const CHANGE_INPUT_PHONE_VALUE = "cartReducer/CHANGE_INPUT_PHONE_VALUE"
const CHANGE_INPUT_EMAIL_VALUE = "cartReducer/CHANGE_INPUT_EMAIL_VALUE"
const CHANGE_INPUT_ADDRESS_VALUE = "cartReducer/CHANGE_INPUT_ADDRESS_VALUE"
const SUBMIT_CART_FORM = "cartReducer/SUBMIT_CART_FORM"

let initialState = {
    cart: {
        name: "",
        email: "",
        phone: "",
        address: "",
        products: []

    }
}

const certReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: {
                    ...state.cart, products: state.cart.products.map((product) => {
                        if (product.product_id === action.product_id) {
                            product.count += 1
                        }
                        return product
                    })
                }

            }
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                productListLength: state.cart.products.push({...action.product, count: 1})
            }
        case CHANGE_PRODUCT_AMOUNT:
            return {
                ...state,
                cart: {
                    ...state.cart, products: state.cart.products.map((product) => {
                        if (product.product_id === action.product_id) {
                            product.count = action.count
                        }
                        return product
                    })
                }
            }
        case REMOVE_PRODUCT_CART:
            let answer = state.cart.products.filter((product) => {
                return product.product_id !== action.product_id
            })

            return {...state, cart: {...state.cart, products: answer}}
        case CHANGE_INPUT_NAME_VALUE:
            return {
                ...state,
                cart: {...state.cart, name: action.inputValue}
            }
        case CHANGE_INPUT_EMAIL_VALUE:
            return {
                ...state,
                cart: {...state.cart, email: action.inputValue}
            }
        case CHANGE_INPUT_PHONE_VALUE:
            return {
                ...state,
                cart: {...state.cart, phone: action.inputValue}
            }
        case CHANGE_INPUT_ADDRESS_VALUE:
            return {
                ...state,
                cart: {...state.cart, address: action.inputValue}
            }
        case SUBMIT_CART_FORM:
            return {
                ...state,
                cart: {...initialState.cart, products: []},
                productListLength: 0
            }
        default:
            return state
    }
}

const addNewProductAC = (product) => ({
    type: ADD_NEW_PRODUCT,
    product
})

const increaseProductCountAC = (product_id) => ({
    type: INCREASE_PRODUCT_COUNT,
    product_id
})

const changeProductAmountAC = (count, product_id) => ({
    type: CHANGE_PRODUCT_AMOUNT,
    count,
    product_id
})

const removeProductCartAC = (product_id) => ({
    type: REMOVE_PRODUCT_CART,
    product_id
})

const changeInputNameValueAC = (inputValue) => (
    {
        type: CHANGE_INPUT_NAME_VALUE,
        inputValue
    }
)

const changeInputPhoneValueAC = (inputValue) => ({
    type: CHANGE_INPUT_PHONE_VALUE,
    inputValue
})

const changeInputEmailValueAC = (inputValue) => ({
    type: CHANGE_INPUT_EMAIL_VALUE,
    inputValue
})

const changeInputAddressValueAC = (inputValue) => ({
    type: CHANGE_INPUT_ADDRESS_VALUE,
    inputValue
})

const submitCartFormAC = () => ({
    type: SUBMIT_CART_FORM
})

export const removeProductCart = (product_id) => async (dispatch) => {
    dispatch(removeProductCartAC(product_id))
}

export const changeProductAmount = (count, product_id) => async (dispatch) => {
    dispatch(changeProductAmountAC(count, product_id))
}


export const changeInputValue = (inputKey, inputValue) => (dispatch) => {
    switch (inputKey) {
        case "name":
            dispatch(changeInputNameValueAC(inputValue))
            break;
        case "phone":
            dispatch(changeInputPhoneValueAC(inputValue))
            break;
        case "email":
            dispatch(changeInputEmailValueAC(inputValue))
            break;
        case "address":
            dispatch(changeInputAddressValueAC(inputValue))
            break;
    }

}

export const addProduct = (product) => async (dispatch, getState) => {
    if (getState().cartPage.cart.products.find((elem) => {
        return elem.product_id === product.product_id
    })) {
        dispatch(increaseProductCountAC(product.product_id))
    } else {
        dispatch(addNewProductAC(product))
    }
}

export const submitCartForm = () => async (dispatch, getState) => {
    const order = getState().cartPage.cart
    if (order.products.length === 0) {
        alert("Your order is empty")
    } else {

        try {
            let orderToSend = {
                ...order, products: order.products.map((product) => {
                    let {image, ...rest } = product
                    return rest
                })
            }
            await API.submitOrder(orderToSend)
            dispatch(submitCartFormAC())
        } catch (e) {
            alert(e.message)
            dispatch(submitCartFormAC())
        }

    }
}

export default certReducer