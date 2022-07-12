import React from "react";
import style from "./header.module.css"
import {useLocation} from 'react-router-dom'
import classNames from "classnames";

import {NavLink} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    let shopsStyle = classNames({[style.active]: location.pathname.includes("/shops")})
    let cartStyle = classNames({[style.active]: location.pathname.includes("/cart")})
    let historyStyle = classNames({[style.active]: location.pathname.includes("/history")})

    return (
        <header className={style.header}>
            <nav className={style.headerNavMenu}>
                <ul>
                    <li className={style.verticalLineRight}>
                        <NavLink className={shopsStyle} to="/shops">Shops</NavLink>
                    </li>
                    <li className={style.verticalLineRight}>
                        <NavLink className={cartStyle} to="/cart">Shopping Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className={historyStyle} to="/history">History</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


// <NavLink to="/shops">Shops</NavLink>
// <NavLink to="/cart">Shopping  Cart</NavLink>
export default Header;