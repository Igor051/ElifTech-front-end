import React, {useEffect, useState} from "react";
import {getShopsWithProducts} from "../../redux/reducers/shopsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import style from "./shops.module.css"
import {Link} from "react-router-dom"
import ProductsContainer from "./Products/ProductsContainer";
let classNames = require('classnames');

const Shops = ({getShopsWithProducts, ShopsList}) => {
    const [activeShopId, SetActiveShop] = useState(undefined);



    let listItems = null
    if (ShopsList){
        listItems = ShopsList.map((shop) =>
        {
            let liClass = classNames({
                [style.active] : shop._id === activeShopId
            });

            return (
                <li className={liClass} key={shop._id} onClick={()=>{
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

    useEffect( () => {
        getShopsWithProducts()
    }, []);

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

            <ProductsContainer data={ShopsList}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    ShopsList: state.shopsPage.ShopsList
});

export default compose(connect(mapStateToProps, {getShopsWithProducts}))(Shops)