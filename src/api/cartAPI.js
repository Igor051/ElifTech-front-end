import axios from 'axios'

export const API = {
    async submitOrder(order) {
            await axios.post("https://eliftech-back-end.herokuapp.com/order", {order})
    }
}