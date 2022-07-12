import {logDOM} from "@testing-library/react";
import {API} from "../../api/cartAPI"
import {activeShopIdToUndefinedAC} from "./shopsReducerFolder/AC"

import {
    CHANGE_INPUT_ADDRESS_VALUE, CHANGE_INPUT_EMAIL_VALUE,
    CHANGE_INPUT_PHONE_VALUE, CHANGE_INPUT_NAME_VALUE,
    CHANGE_PRODUCT_AMOUNT, ADD_NEW_PRODUCT,
    INCREASE_PRODUCT_COUNT, REMOVE_PRODUCT_CART,
    SUBMIT_CART_FORM
} from "./cartReducerFolder/constants"

import {
    submitCartFormAC, removeProductCartAC, addNewProductAC,
    changeInputAddressValueAC, changeInputEmailValueAC,
    changeInputNameValueAC, changeInputPhoneValueAC, increaseProductCountAC,
    changeProductAmountAC
} from "./cartReducerFolder/AC"

// load string from localStorage and convert into an Object
import {loadFromLocalStorageCartReducer as loadFromLocalStorage}
    from "./cartReducerFolder/loadFromLocalStorage"

let initialState = loadFromLocalStorage()

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

            return {...state, cart: {...state.cart, products: answer}, productListLength: state.productListLength - 1}
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
                cart: {email: '', name: '', address: '', phone: ' ', products: []},
                productListLength: 0
            }
        default:
            return state
    }
}

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
            dispatch(activeShopIdToUndefinedAC())
            let orderToSend = {
                ...order, products: order.products.map((product) => {
                    let {image, ...rest} = product
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