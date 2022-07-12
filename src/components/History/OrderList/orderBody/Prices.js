import React from "react";

const Prices = ({products}) => {
    let prices = products.map((product)=>{
        return (
            <div>
                {product.price_per_unit * product.count}
            </div>
        )
    })

    return(
        <div>
            {prices}
        </div>
    )
}

export default Prices