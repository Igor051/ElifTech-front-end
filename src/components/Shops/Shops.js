import React, {useEffect} from "react";
import {getShopsWithProducts} from "../../redux/reducers/shopsReducer";
import {connect} from "react-redux";
import {compose} from "redux";

const Shops = ({getShopsWithProducts, data}) => {
    let listItems = null
    if (data){
        listItems = data.map((shop) =>
            <li key={shop._id}>
                {shop.name}
            </li>
        );
    }

    useEffect( () => {
        getShopsWithProducts()
    }, []);

    return (
        <div>
            {listItems}
        </div>
    )
}

let mapStateToProps = (state) => ({
    data: state.shopsPage.data
});

export default compose(connect(mapStateToProps, {getShopsWithProducts}))(Shops)