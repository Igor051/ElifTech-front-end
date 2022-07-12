import React from "react";
import Order from "./Order";
import style from "./OrderList.module.css"

const OrdersContainer = ({orders}) => {
    let content = orders.map((order) => {
        return <Order order={order}/>
    })

    return (
        <div className={style.ordersContainer}>
            {content}
        </div>
    )
}
export default OrdersContainer