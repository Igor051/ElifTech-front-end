import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import style from "./cartPage.module.css"
import CartForm from "./Form/CartForm"
import ProductList from "./ProductList/ProductList";
import {
    changeInputValue,
    changeProductAmount,
    removeProductCart,
    submitCartForm
} from "../../redux/reducers/cartReducer"

const CartPage = ({cart, changeProductAmount, changeInputValue, submitCartForm, productListLength}) => {
    let totalPrice  = 0
    cart.products.forEach((product)=>{
        totalPrice += product.price_per_unit * product.count
    })

    return (
        <div className={style.cartPage}>
            <div className={style.cartPageContent}>
                <div className={style.formContainer}>
                    <CartForm submitCartForm={submitCartForm} changeInputValue={changeInputValue} email={cart.email} name={cart.name} phone={cart.phone} address={cart.address}/>

                </div>
           <ProductList productListLength={productListLength} products={cart.products} changeProductAmount={changeProductAmount}/>
            </div>

            <div className={style.buttonContainer}>
                <span>Total price: {totalPrice}</span>
               <button type="submit" form="cart_form">Submit</button>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => ({
    cart: state.cartPage.cart,
    productListLength: state.cartPage.productListLength
});

export default compose(connect(mapStateToProps, {submitCartForm, changeInputValue, changeProductAmount, removeProductCart}))(CartPage)
