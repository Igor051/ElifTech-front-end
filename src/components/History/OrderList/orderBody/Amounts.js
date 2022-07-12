import React from "react";

const Amounts = ({products}) => {
    let amounts = products.map((product)=>{
        return (
            <div>
                {product.count}
            </div>
        )
    })

    return(
        <div>
            {amounts}
        </div>
    )
}

export default Amounts