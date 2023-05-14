import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
import "./HeaderCartButton.css";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className='header'>
                <h1>The Candy Shop</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
        </React.Fragment>
    );
};

export default Header;
