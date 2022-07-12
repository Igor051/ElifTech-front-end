import React from "react";
import style from "./OrderList.module.css"
import OrdersContainer from "./OrdersContainer";

const OrderList = ({orders, message}) => {
    let content
    if (orders.length === 0) {
        content = <div className={style.message}>{message}</div>
    } else {
        content = <OrdersContainer orders={orders}/>
    }


    return (
        <div className={style.orderList}>
            {content}
        </div>
    )
}

export default OrderList