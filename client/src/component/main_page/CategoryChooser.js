import React from 'react';
import {changePage} from "../../redux/actions/pageChangerActions";
import store from "../../redux/store";
import Menu from "../menu/Menu";
import './CategoryChooser.css';

// TODO: request to API - categories from database
const CATEGORIES = [{
    title: 'Coffee',
    description: 'Grab one of our great coffees or make your own composition',
    icon: 'coffee',
    hasCustomItem: true,
    items: [{
        name: 'Espresso',
        sizeToPrice: { S: 3, M: 5 }
    }, {
        name: 'Americano',
        sizeToPrice: { M: 4, L: 6, XL: 7 }
    }, {
        name: 'Cappuccino',
        sizeToPrice: { M: 5, L: 7, XL: 8 }
    }, {
        name: 'Latte',
        sizeToPrice: { M: 5, L: 7, XL: 9 }
    }, {
        name: 'Latte Macchiato',
        sizeToPrice: { M: 6, L: 8, XL: 9 }
    }, {
        name: 'Mocha',
        sizeToPrice: { M: 7, L: 8, XL: 9 }
    }]
}, {
    title: 'Sweet',
    description: 'Pair it up with the coffee and enjoy the full experience',
    icon: 'cookie-bite',
    items: [{
        name: 'Croissant',
        price: 5
    }, {
        name: 'Chocolate muffin',
        price: 5
    }, {
        name: 'Strawberry muffin',
        price: 5
    }, {
        name: 'Brownie',
        sizeToPrice: { M: 5, L: 8, XL: 10 }
    }, {
        name: 'Apple pie',
        sizeToPrice: { M: 5, L: 8, XL: 10 }
    }, {
        name: 'Cheesecake',
        sizeToPrice: { M: 5, L: 8, XL: 10 }
    }]
}, {
    title: 'Food',
    description: 'Satisfy your hunger with one of our delicious sandwiches',
    icon: 'utensils',
    items: [{
        name: 'Bagel with ham',
        price: 7
    }, {
        name: 'Bagel with eggs',
        price: 6
    }, {
        name: 'Veggie bagel',
        price: 9
    }, {
        name: 'English breakfast',
        price: 12
    }, {
        name: 'Spaghetti Carbonara',
        sizeToPrice: { M: 8, L: 10, XL: 12 }
    }]
}, {
    title: 'Drink',
    description: 'Quench your thirst with our cold beverages',
    icon: 'glass-martini',
    items: [{
        name: 'Black tea',
        sizeToPrice: { S: 3, M: 4, L: 5, XL: 6 }
    },{
        name: 'Green tea',
        sizeToPrice: { S: 4, M: 6, L: 7, XL: 8 }
    }, {
        name: 'Ice tea',
        sizeToPrice: { S: 4, M: 6, L: 7, XL: 8 }
    }, {
        name: 'Orange juice',
        sizeToPrice: { S: 3, M: 4, L: 5, XL: 6 }
    }, {
        name: 'Apple juice',
        sizeToPrice: { S: 3, M: 4, L: 5, XL: 6 }
    }, {
        name: 'Water',
        sizeToPrice: { S: 1, M: 2, L: 3, XL: 4 }
    }]
}];

const CategoryChooser = () => {

    const categoriesRefs = [];

    return (
        <div>
            {CATEGORIES.map((category, index) => {
                const {title, description, icon, items, hasCustomItem} = category;
                const menuProps = {
                    icon: icon,
                    title: title,
                    items: items, // TODO: request to API - items for category from database
                    hasCustomItem: hasCustomItem
                };
                return (
                    <div className="category"
                         onClick={() => {
                             setTimeout(() => store.dispatch(changePage(Menu, menuProps)), 100);
                             categoriesRefs.forEach(ref => {
                                 ref.classList.add('category--hiding');
                             });
                         }}
                         ref={ref => categoriesRefs.push(ref)}
                         key={index}>
                        <div className="category-icon">
                            <i className={`fas fa-${icon} fa-3x`}/>
                        </div>
                        <div className="category-info">
                            <h2 className="category-info__title">
                                {title}
                            </h2>
                            <p className="category-info__description">
                                {description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );

};

export default CategoryChooser;

CategoryChooser.propTypes = {};
