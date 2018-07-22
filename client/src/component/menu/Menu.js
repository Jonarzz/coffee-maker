import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {addMenuItem} from "../../redux/actions/menuItemsActions";
import store from "../../redux/store";
import './Menu.css';

class Menu extends PureComponent {

    constructor(props) {
        super(props);
        this._sizeToPriceRefs = [];
    }

    componentDidMount() {
        setTimeout(() => this._menuRef.classList.remove('menu--hidden'), 100)
    }

    render() {
        return (
            <div className="menu menu--hidden" ref={ref => this._menuRef = ref}>
                <div className="menu__icon">
                    <i className={`fas fa-${this.props.icon} fa-4x`}/>
                </div>
                <div className="menu__title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="menu__items">
                    {this.props.items.map((item, index) => {
                        const {name} = item;
                        return (
                            <div className="menu__items-item">
                                <div className="menu__items-item-row">
                                    <button onClick={e => this._onMenuItemClick(item, index, e)} key={index}>
                                        {name}
                                        {item.sizeToPrice &&
                                            <i className="fas fa-sort-down"
                                               style={{transform: 'translateY(-3px)', marginLeft: 5 }}/>
                                        }
                                    </button>
                                    {item.price &&
                                        <p className="menu__items-item-row__price">${item.price}</p>
                                    }
                                </div>
                                <div className="menu__items-item__sizes menu__items-item__sizes--hidden"
                                     ref={ref => this._sizeToPriceRefs.push(ref)}>
                                    {this._createSizeToPriceDiv(item, name)}
                                </div>
                            </div>
                        );
                    })}
                    {this.props.hasCustomItem &&
                        <div className="menu__items-item">
                            <button>Custom</button>
                        </div>
                    }
                </div>
            </div>
        );
    }

    _onMenuItemClick(item, index, onClickEvent) {
        if (item.sizeToPrice) {
            this._sizeToPriceRefs.forEach((ref, refIndex) => {
                this._sizeToPriceRefs[index].classList.remove('menu__items-item__sizes--hidden');
                if (refIndex !== index) {
                    this._sizeToPriceRefs[refIndex].classList.add('menu__items-item__sizes--hidden');
                }
            });
        } else if (item.price) {
            this._addItemToCart(onClickEvent, item.name, item.price);
        }
    }

    _createSizeToPriceDiv(item) {
        const sizeToPrice = item.sizeToPrice || {};
        return Object.keys(sizeToPrice).map((size, sizeIndex) => {
            const price = sizeToPrice[size];
            return (
                <div key={sizeIndex} className="menu__items-item__sizes-row">
                    <button onClick={e => this._addItemToCart(e, item.name, price, size)}>
                        {size}
                    </button>
                    <p>${price}</p>
                </div>
            );
        });
    }

    _addItemToCart(onClickEvent, name, price, size) {
        const startEvent = { top: onClickEvent.clientY + 'px', left: onClickEvent.clientX + 'px' };
        const cartInfoCoords = document.querySelector('.cart-info-bar__items-info').getBoundingClientRect();
        const endEvent = { top: cartInfoCoords.top + 'px', left: cartInfoCoords.left + 'px' };

        const flyingElement = document.createElement('p');
        flyingElement.innerText = size ? `${name} - ${size} - $${price}` : `${name} - $${price}`;
        flyingElement.classList.add('flying-element');
        document.body.appendChild(flyingElement);
        setTimeout(() => document.body.removeChild(flyingElement), 300);

        flyingElement.animate([startEvent, endEvent], 300);

        store.dispatch(addMenuItem({name, size, price}));
    }
}

export default Menu;

Menu.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hasCustomItem: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        sizeToPrice: PropTypes.shape({
            size: PropTypes.oneOf('S', 'M', 'L', 'XL').isRequired,
            price: PropTypes.number.isRequired
        })
    })).isRequired
};