import React from "react"
import style from "./OrderList.module.css"
import Names from "./orderBody/Names"
import Amounts from "./orderBody/Amounts"
import Prices from "./orderBody/Prices"
import TotalPrice from "./totalPrice/TotalPrice";


const Order = ({order}) => {
    return (
        <div className={style.order}>
            <div className={style.orderHeader}>
                <p>name</p><p>amount</p><p>price</p>
            </div>
            <div className={style.orderBody}>
                <Names products={order.products}/>
                <Amounts products={order.products}/>
                <Prices products={order.products}/>
            </div>
            <TotalPrice products={order.products}/>
        </div>
    )
}

export default Order