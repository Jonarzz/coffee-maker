import React from 'react';
import PropTypes from 'prop-types';
import store from '../../redux/store';
import "./CartInfoBar.css";
import Cart from "../cart/Cart";

const CartInfoBar = props => {

    const {changePage} = props;
    const {menuItems} = store.getState();

    return (
        <div className="cart-info-bar">
            <button onClick={() => changePage(Cart)} className="cart-info-bar__items-info">
                <i className={`fas fa-shopping-cart`} style={{ marginRight: 10 }}/>
                {menuItems.length} items - ${menuItems.reduce((sum, item) => sum + item.price, 0)}
            </button>
        </div>
    );

};

export default CartInfoBar;

CartInfoBar.propTypes = {
    changePage: PropTypes.func.isRequired
};
