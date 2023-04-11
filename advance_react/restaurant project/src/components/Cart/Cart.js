import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = () => {
    return (
        <Modal>
            cartItems
            <div className='total'>
                <span>Total Amount</span>
                <span>35.67</span>
            </div>
            <div className='actions'>
                <button className="button--alt">Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
