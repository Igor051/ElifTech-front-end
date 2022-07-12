import React from "react";

const Names = ({products}) => {
    let names = products.map((product)=>{
        return (
            <div>
                {product.name}
            </div>
        )
    })

    return(
        <div>
            {names}
        </div>
    )
}

export default Names