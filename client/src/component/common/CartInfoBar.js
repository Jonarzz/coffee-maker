import React from 'react';
import PropTypes from 'prop-types';
import store from '../../redux/store';
import "./CartInfoBar.css";

const CartInfoBar = props => {

    const {changePage} = props;
    const {menuItems} = store.getState();

    return (
        <div className="cart-info-bar">
            <a onClick={() => changePage('div')} href="#" className="cart-info-bar__items-info">
                {menuItems.length} items - ${menuItems.reduce((sum, item) => sum + item.price, 0)}
            </a>
        </div>
    );

};

export default CartInfoBar;

CartInfoBar.propTypes = {
    changePage: PropTypes.func.isRequired
};
