import React, {useState} from "react";
import style from "./ProductList.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {removeProductCart} from "../../../redux/reducers/cartReducer";
import {setActiveShopId} from "../../../redux/reducers/shopsReducer";

const ProductCart = ({product, changeProductAmount, removeProductCart, productListLength, setActiveShopId}) => {
    const [count, changeCount] = useState(product.count)

    return (
        <div className={style.productCart}>
            <img src={`data:image/png;base64,${product.image}`} alt="product photo"/>
            <div className={style.productCartInfo}>
                <div>{product.name}</div>
                <div>Price: {product.price_per_unit * product.count}</div>
                <input className={style.input} type="number" min="1" max="100" step="1" value={product.count}
                       onChange={(e) => {
                           let value = Number.parseInt(e.target.value)
                           changeProductAmount(value, product.product_id)
                           changeCount(value)
                       }}

                       onKeyDown={(e) => {
                           if (e.key === 'Backspace' && product.count.toString().length === 1) {
                               e.preventDefault();
                           }
                       }}
                />
                <button className={style.removeProductBtn} onClick={async () => {
                    if (productListLength === 1) {
                        await setActiveShopId(undefined)
                    }
                    await removeProductCart(product.product_id)
                }}>Remove
                </button>
            </div>

        </div>
    )
}


export default compose(connect(undefined, {removeProductCart, setActiveShopId}))(ProductCart)