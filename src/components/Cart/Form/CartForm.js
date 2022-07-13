import React from "react";
import style from "./CartForm.module.css";
import {Field, Formik, Form} from "formik";

const CartForm = ({email, phone, name, address, changeInputValue, submitCartForm}) => {

    const onInputChange = (e) => {
        changeInputValue(e.target.name, e.target.value)
    }

    return (
        <Formik
            initialValues={{
                name: email,
                email: phone,
                phone: name,
                address: address
            }}
            onSubmit={async (values, { resetForm }) => {
                submitCartForm()
                resetForm();
            }}
        >
            <Form id="cart_form">
                <label className={style.label} htmlFor="cart_name">Name: </label>
                <Field required onChange={onInputChange} value={name} className={style.field} type="text" id="cart_name" name="name"/>
                <label className={style.label} htmlFor="cart_email">Email: </label>
                <Field required  onChange={onInputChange}  value={email} className={style.field} type="email" id="cart_email" name="email"/>
                <label className={style.label} htmlFor="cart_phone">Phone: </label>
                <Field required onChange={onInputChange} value={phone} className={style.field} type="tel" pattern="(\s(\d{10}|\d{12}))|(\d{10}|\d{12})" id="cart_phone" name="phone"/>
                <label className={style.label} htmlFor="cart_address">Address: </label>
                <Field required onChange={onInputChange} value={address} className={style.field} type="text" id="cart_address" name="address"/>
            </Form>
        </Formik>
    )
}

export default CartForm