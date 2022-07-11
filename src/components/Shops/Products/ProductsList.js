import React from "react";
import Product from "./Product/Product";

import "./products.css"

const ProductsList = ({products, shop_name}) => {
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