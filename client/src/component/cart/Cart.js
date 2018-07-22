import React, {Component} from 'react';
import {deleteMenuItem} from "../../redux/actions/menuItemsActions";
import store from "../../redux/store";
import './Cart.css';

class Cart extends Component {

    componentDidMount() {
        setTimeout(() => this._cartRef.classList.remove('cart--hidden'), 100)
    }

    render() {
        const {menuItems} = store.getState();
        if (menuItems.length === 0) {
            return (
                <div className="cart cart--hidden" ref={ref => this._cartRef = ref}>
                    <p className="cart__title">Your cart is empty</p>
                </div>
            );
        }
        menuItems.sort((i1, i2) => i1.name > i2.name ? 1 : 0);
        return (
            <div className="cart cart--hidden" ref={ref => this._cartRef = ref}>
                <div className="cart__icon">
                    <i className={`fas fa-shopping-cart fa-4x`}/>
                </div>
                <div className="cart__title">
                    <h2>Cart</h2>
                </div>
                <div className="cart__items">
                    <table className="cart__items-table">
                        {menuItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="cart__items__item-info"
                                        onClick={() => store.dispatch(deleteMenuItem(item.id))}>
                                        <button className="far fa-trash-alt"/>
                                    </td>
                                    <td className="cart__items__item-info">{item.name}</td>
                                    <td className="cart__items__item-info">${item.price}</td>
                                    <td className="cart__items__item-info">{item.size}</td>
                                </tr>
                            );
                        })}
                        <tr style={{ borderTop: '1px solid white' }}>
                            <td className="cart__items__item-info">&nbsp;</td>
                            <td className="cart__items__item-info">&nbsp;</td>
                            <td className="cart__items__item-info">${menuItems.reduce((sum, item) => sum + item.price, 0)}</td>
                            <td className="cart__items__item-info">&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}

export default Cart;

Cart.propTypes = {};
