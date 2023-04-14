import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + Number(item.quantity);
    }, 0);

    // const numberOfCartItems = cartCtx.items.length

    // let numberOfCartItems = 0;
    // cartCtx.items.forEach(item=>{
    //     numberOfCartItems += Number(item.quantity)
    // })

    return (
        <button className='button' onClick={props.onShowCart}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
