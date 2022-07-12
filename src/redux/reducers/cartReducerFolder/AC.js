import {
    ADD_NEW_PRODUCT, CHANGE_INPUT_ADDRESS_VALUE, CHANGE_INPUT_EMAIL_VALUE,
    CHANGE_INPUT_NAME_VALUE, CHANGE_INPUT_PHONE_VALUE,
    CHANGE_PRODUCT_AMOUNT,
    INCREASE_PRODUCT_COUNT,
    REMOVE_PRODUCT_CART, SUBMIT_CART_FORM
} from "./constants";

export const addNewProductAC = (product) => ({
    type: ADD_NEW_PRODUCT,
    product
})

export const increaseProductCountAC = (product_id) => ({
    type: INCREASE_PRODUCT_COUNT,
    product_id
})

export const changeProductAmountAC = (count, product_id) => ({
    type: CHANGE_PRODUCT_AMOUNT,
    count,
    product_id
})

export const removeProductCartAC = (product_id) => ({
    type: REMOVE_PRODUCT_CART,
    product_id
})

export const changeInputNameValueAC = (inputValue) => ({
        type: CHANGE_INPUT_NAME_VALUE,
        inputValue
    }
)

export const changeInputPhoneValueAC = (inputValue) => ({
    type: CHANGE_INPUT_PHONE_VALUE,
    inputValue
})

export const changeInputEmailValueAC = (inputValue) => ({
    type: CHANGE_INPUT_EMAIL_VALUE,
    inputValue
})

export const changeInputAddressValueAC = (inputValue) => ({
    type: CHANGE_INPUT_ADDRESS_VALUE,
    inputValue
})

export const submitCartFormAC = () => ({
    type: SUBMIT_CART_FORM
})