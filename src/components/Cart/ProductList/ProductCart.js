import React, {useState} from "react";
import style from "./ProductList.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {removeProductCart} from "../../../redux/reducers/cartReducer";

const ProductCart = ({product, changeProductAmount, removeProductCart}) => {
    const [count, changeCount] = useState(product.count)

    return (
        <div className={style.productCart}>
            <img src={`data:image/png;base64,${product.image}`} alt="product photo"/>
            <div className={style.productCartInfo}>
                <div>{product.name}</div>
                <div>Price: {product.price_per_unit * product.count}</div>
                <input min="1" className={style.input} type="number" value={product.count} onChange={(e)=>{
                    let value =  Number.parseInt(e.target.value)
                    changeProductAmount(value, product.product_id)
                    changeCount(value)
                }}/>
                <button className={style.removeProductBtn} onClick={async ()=>{
                    await removeProductCart(product.product_id)
                }}>Remove</button>
            </div>

        </div>
    )
}

export default compose(connect(undefined, {removeProductCart}))(ProductCart)