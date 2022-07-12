import React from "react";
import {Route, Routes} from "react-router-dom";

import ProductsList from "./ProductsList"

const ProductsContainer = ({data, activeShopId}) => {
    let productsComponents = null
    if (data){
        productsComponents = data.map((shop) => <Route key={shop._id} path={`/${shop.link}`} element={<ProductsList activeShopId={activeShopId} shop_name={shop.name} products={shop.products}/>}/>
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