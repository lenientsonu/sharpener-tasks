import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <Modal onClose={props.onCloseCart}>
            <ul className='cart-items'>
                {cartCtx.items.map((item) => (
                    <li className='cart-item'>
                        <div>
                            <h2> {item.title} </h2>
                            <div className='detail'>
                                <span className='price'>{item.price}</span>
                                <span className='quantity'>
                                    ×{item.quantity}
                                </span>
                            </div>
                        </div>
                    </li>
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
