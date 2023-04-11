import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
    return (
        <button className='button' onClick={props.showCart}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>0</span>
        </button>
    );
};

export default HeaderCartButton;
