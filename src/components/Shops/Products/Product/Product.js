import React from "react";

import style from "./Product.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {addProduct} from "../../../../redux/reducers/cartReducer";
import {setActiveShopId} from "../../../../redux/reducers/shopsReducer"

const Product = ({product, shop_name, addProduct, setActiveShopId}) => {
    return  (
        <div className={style.productBlock}>
            <img src={`data:image/png;base64,${product.image}`} alt="product photo"/>
            <span>{product.name}</span>
            <button onClick={()=> {
                setActiveShopId(product.shop_id)
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

export default compose(connect(undefined, {addProduct, setActiveShopId}))(Product)