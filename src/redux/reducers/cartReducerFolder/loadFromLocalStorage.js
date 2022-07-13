export function loadFromLocalStorageCartReducer() { // load string from localStorage and convert into an Object
    try {
        const serialisedState = localStorage.getItem("cart");
        if (serialisedState === null) {
            return {
                cart: {
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    products: []

                },
                productListLength: 0,
                disableSubmitBtn: false
            }
        }
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e.message);
        return {
            cart: {
                name: "",
                email: "",
                phone: "",
                address: "",
                products: []

            },
            productListLength: 0,
            disableSubmitBtn: false
        }
    }
}