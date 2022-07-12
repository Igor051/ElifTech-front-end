import axios from "axios";

export const API = {
    async getOrdersByEmailPhoneAPI(email, phone) {
        const res = await axios.put("https://eliftech-back-end.herokuapp.com/history", {email, phone})
        return res.data
    }
}