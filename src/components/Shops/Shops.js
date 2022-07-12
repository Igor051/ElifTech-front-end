import React, {useEffect, useState} from "react";
import {getShopsWithProducts} from "../../redux/reducers/shopsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import style from "./shops.module.css"
import {Link} from "react-router-dom"
import ProductsContainer from "./Products/ProductsContainer";

let classNames = require('classnames');

const Shops = ({getShopsWithProducts, ShopsList, activeShopId_}) => {
    const [activeShopId, SetActiveShop] = useState(undefined);

    useEffect(() => {
        getShopsWithProducts()
    }, []);

    let listItems = null
    if (ShopsList) {
        listItems = ShopsList.map((shop) => {
                let disabled = activeShopId_ && shop._id !== activeShopId_
                let liClass = classNames({
                    [style.active]: activeShopId === shop._id,
                });
                return (
                    <li disabled={disabled} className={liClass} key={shop._id} onClick={() => {
                        SetActiveShop(shop._id)
                    }}>
                        <Link to={`${shop.link}`}>
                            <span>{shop.name}</span>
                        </Link>

                    </li>
                )
            }
        );
    }



    return (
        <div className={style.shopsPageContainer}>
            <nav className={style.shopsNav}>
                <h5>
                    Shops
                </h5>
                <ul className={style.shopsList}>
                    {listItems}
                </ul>
            </nav>

            <ProductsContainer activeShopId={activeShopId_} data={ShopsList}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    ShopsList: state.shopsPage.ShopsList,
    activeShopId_: state.shopsPage.activeShopId
});

export default compose(connect(mapStateToProps, {getShopsWithProducts}))(Shops)