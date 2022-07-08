import axios from "axios";

export const API = {
    async getShopsWithProducts() {
        const res = await axios.get("https://eliftech-back-end.herokuapp.com/shopsAndProducts")
        return res.data;
    }
}