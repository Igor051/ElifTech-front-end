import React from "react";
import style from "./History.module.css"
import HistoryInputs from "./HistoryInputs/HistoryInputs";
import OrderList from "./OrderList/OrderList"
import {compose} from "redux";
import {connect} from "react-redux";
import {getOrdersByEmailPhone} from "../../redux/reducers/historyReducer"

const History = ({orders,message, getOrdersByEmailPhone}) => {

    return(
        <div className={style.historyPage}>
            <HistoryInputs getOrdersByEmailPhone={getOrdersByEmailPhone}/>
            <OrderList orders={orders} message={message}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    orders: state.historyPage.orders,
    message: state.historyPage.messageIfNoOrders
});

export default compose(connect(mapStateToProps, {getOrdersByEmailPhone}))(History)
