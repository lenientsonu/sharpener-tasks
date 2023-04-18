import React, { useState, useContext } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

import "./Cart.css";

const Cart = (props) => {
    const [show, setShow] = useState(false);

    const CartCtx = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={props.color} onClick={handleShow}>
                {props.title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='list'>
                        <Stack direction='horizontal' gap={3}>
                            <span>Item</span>
                            <span>Price</span>
                            <span>Quantity</span>
                        </Stack>
                        <hr />
                    </div>
                    {CartCtx.items.map((product) => (
                        <CartItem
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                    <div className='total'>
                        <span>Total</span>
                        <span>{CartCtx.totalAmount}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Purchase
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;
