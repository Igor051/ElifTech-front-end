import React from "react"
import style from "./TotalPrice.module.css"

const TotalPrice = ({products}) => {
    let totalPrice = 0

    products.forEach((product) => {
        totalPrice += product.price_per_unit * product.count
    })

    return (
        <div className={style.totalPrice}>
            <div>&nbsp;</div>
            <div>Total price: {totalPrice}</div>
        </div>
    )
}

export default TotalPrice