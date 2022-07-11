import React from "react";
import {Route, Routes} from "react-router-dom";
import Shops from "../Shops";

import ProductsList from "./ProductsList"

const ProductsContainer = ({data}) => {
    let productsComponents = null
    if (data){
        productsComponents = data.map((shop) => <Route key={shop._id} path={`/${shop.link}`} element={<ProductsList shop_name={shop.name} products={shop.products}/>}/>
        );
    }

    return (
        <div>
            <Routes>
                {productsComponents}
            </Routes>
        </div>
    )
}

export default ProductsContainer