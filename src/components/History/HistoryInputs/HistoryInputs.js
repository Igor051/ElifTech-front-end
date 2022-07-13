import React from "react"
import style from "./HistoryInputs.module.css"
import {Field, Formik, Form} from "formik";

const HistoryInputs = ({getOrdersByEmailPhone}) => {
    return (
        <div className={style.historyInputs}>
            <div className={style.formBtnContainer}>
                <Formik initialValues={{
                    history_email: "",
                    history_phone: ""
                }}
                        onSubmit={async (values, {resetForm}) => {
                            getOrdersByEmailPhone(values.history_email, values.history_phone)
                            resetForm()
                        }}
                >
                    <Form className={style.form} id="history_form">
                        <label htmlFor="history_order_email">Email: </label>
                        <Field required type="email" id="history_order_email" name="history_email"/>
                        <label htmlFor="history_order_phone">Phone: </label>
                        <Field required type="tel" pattern="(\s(\d{10}|\d{12}))|(\d{10}|\d{12})" id="history_order_phone" name="history_phone"/>
                    </Form>
                </Formik>

                <button className={style.historyFromSubmit} type="submit" form="history_form">Search</button>
            </div>

        </div>
    )
}

export default HistoryInputs