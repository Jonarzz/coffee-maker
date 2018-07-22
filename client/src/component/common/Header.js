import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => {

    return (
        <h1 className="header">
            {props.text}
        </h1>
    );

};

export default Header;

Header.propTypes = {
    text: PropTypes.string.isRequired
};
