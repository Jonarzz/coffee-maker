import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStroopwafel, faUtensils, faGlassMartini } from '@fortawesome/free-solid-svg-icons';
import './CategoryChooser.css';

const CATEGORIES = [{
    title: 'Coffee',
    description: 'Grab one of our great coffees or make your own composition',
    icon: <FontAwesomeIcon icon={faCoffee} size="3x"/>
}, {
    title: 'Sweet',
    description: 'Pair it up with the coffee and enjoy the full experience',
    icon: <FontAwesomeIcon icon={faStroopwafel} size="3x"/>
}, {
    title: 'Food',
    description: 'Satisfy your hunger with one of our delicious sandwiches',
    icon: <FontAwesomeIcon icon={faUtensils} size="3x"/>
}, {
    title: 'Drink',
    description: 'Quench your thirst with our cold beverages',
    icon: <FontAwesomeIcon icon={faGlassMartini} size="3x"/>
}];

const CategoryChooser = () => {

    return (
        <div>
            {CATEGORIES.map((category, index) => {
                return (
                    <div key={index} className="category" onClick={() => alert(category.title)}>
                        <div className="category-icon">
                            {category.icon}
                        </div>
                        <div className="category-info">
                            <h2 className="category-info__title">
                                {category.title}
                            </h2>
                            <p className="category-info__description">
                                {category.description}
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
