import React from "react";
import style from "./ProductList.module.css";
import ProductCart from "./ProductCart"

const ProductList = ({products, changeProductAmount, productListLength}) =>{
    let ProductList = products.map((product)=>{
        return (
            <ProductCart productListLength={productListLength}  key={product.product_id} product={product} changeProductAmount={changeProductAmount}/>
        )
    })

    return (
        <div className={style.productsList}>
            {ProductList}
        </div>
    )
}

export default ProductList