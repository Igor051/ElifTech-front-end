import React from "react";

import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/shops">Shops</Link>
                    </li>
                    <li>
                        <Link to="/cart">Shopping Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


// <NavLink to="/shops">Shops</NavLink>
// <NavLink to="/cart">Shopping  Cart</NavLink>
export default Header;