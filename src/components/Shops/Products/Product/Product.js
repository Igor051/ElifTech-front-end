import React from "react";

import style from "./Product.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {addProduct} from "../../../../redux/reducers/cartReducer";

const Product = ({product, shop_name, addProduct}) => {
    return  (
        <div className={style.productBlock}>
            <img src={`data:image/png;base64,${product.image}`} alt="product photo"/>
            <span>{product.name}</span>
            <button onClick={()=> {
                addProduct({
                    product_id: product._id,
                    ...product,
                    shop_name,
                })
            }}>
                add to Cart
            </button>
        </div>
    )
}

export default compose(connect(undefined, {addProduct}))(Product)