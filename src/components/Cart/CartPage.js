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

const CartPage = ({cart, changeProductAmount, changeInputValue, submitCartForm}) => {
    let totalPrice  = 0
    cart.products.forEach((product)=>{
        totalPrice += product.price_per_unit * product.count
    })

    return (
        <div className={style.cartPage}>
            <div className={style.cartPageContent}>
                <div className={style.formContainer}>
                    <CartForm submitCartForm={submitCartForm} changeInputValue={changeInputValue} email={cart.email} name={cart.name} phone={cart.phone} address={cart.address}/>
                    {/*<form action="" name="cartForm" id='cart/form'>*/}
                    {/*    <label htmlFor="cart/name">Name: </label>*/}
                    {/*    <input type="text" id="cart/name" name="name"/>*/}
                    {/*    <label htmlFor="cart/email">Email: </label>*/}
                    {/*    <input type="email" id="cart/email" name="email"/>*/}
                    {/*    <label htmlFor="cart/phone">Phone: </label>*/}
                    {/*    <input type="tel" id="cart/phone" name="phone"/>*/}
                    {/*    <label htmlFor="cart/address">Address: </label>*/}
                    {/*    <input type="text" id="cart/address" name="address"/>*/}
                    {/*</form>*/}
                </div>
           <ProductList products={cart.products} changeProductAmount={changeProductAmount}/>
            </div>

            <div className={style.buttonContainer}>
                <span>Total price: {totalPrice}</span>
               <button type="submit" form="cart_form">Submit</button>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => ({
    cart: state.cartPage.cart
});

export default compose(connect(mapStateToProps, {submitCartForm, changeInputValue, changeProductAmount, removeProductCart}))(CartPage)
