import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    return (
        <Modal onClose={props.onCloseCart}>
            <ul className='cart-items'>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div className='total'>
                <span>Total Amount</span>
                <span>₹{cartCtx.totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onCloseCart}>
                    Close
                </button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
