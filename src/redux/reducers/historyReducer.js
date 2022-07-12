import {API} from "../../api/historyAPI"

const SET_ORDERS = "historyReducer/SET_ORDERS"
const SET_NO_ORDERS_MESSAGE = "historyReducer/SET_NO_ORDERS_MESSAGE"

const initialState = {
    orders: [],
    messageIfNoOrders: ""
}

const historyReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders,
                messageIfNoOrders: ""
            }
        case SET_NO_ORDERS_MESSAGE:
            return {
                ...state,
                orders: [],
                messageIfNoOrders: "There are no orders with such credentials"
            }
        default:
            return state
    }
}

const setOrdersAC = (orders) => ({
    type: SET_ORDERS,
    orders
})

const setNoOrdersMessageAC = () => ({
    type: SET_NO_ORDERS_MESSAGE
})

export const getOrdersByEmailPhone = (email, phone) => async (dispatch, getState) => {
    try{
        const data = await API.getOrdersByEmailPhoneAPI(email, phone)
        if(data){
            dispatch(setOrdersAC(data))
        }else {
            dispatch(setNoOrdersMessageAC())
        }
    }catch (e) {
        alert(e.message)
    }
}

export default historyReducer