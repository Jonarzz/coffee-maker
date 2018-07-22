import React from 'react';
import PropTypes from 'prop-types';
import store from '../../redux/store';
import "./CartInfoBar.css";

const CartInfoBar = props => {

    const {changePage} = props;
    const {menuItems} = store.getState();

    return (
        <div className="cart-info-bar">
            <a onClick={() => changePage('div')} className="cart-info-bar__items">
                {menuItems.length} items
            </a>
        </div>
    );

};

export default CartInfoBar;

CartInfoBar.propTypes = {
    changePage: PropTypes.func.isRequired
};
