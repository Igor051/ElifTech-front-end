import React from "react";
import Product from "./Product/Product";

import "./products.css"
import {Navigate} from "react-router";

const ProductsList = ({products, shop_name, activeShopId}) => {
    if(activeShopId && products.length > 0 && products[0].shop_id !== activeShopId){
        return (
            <Navigate to="/shops" replace />
        )
    }

    let mappedProducts = null
    if(products){
        mappedProducts = products.map((product)=>{
            return (
                <Product key={product._id} shop_name={shop_name} product={product}/>
            )
        })
    }

    return (
        <div className="productsList">
            {mappedProducts}
        </div>
    )
}

export default ProductsList