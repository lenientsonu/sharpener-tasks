import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
import "./HeaderCartButton.css";
import mealsImage from "./meals.jpg";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className='header'>
                <h1>Little Lemon</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt='Header' />
            </div>
        </React.Fragment>
    );
};

export default Header;
