import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CartItem from "./CartItem";

import "./Cart.css";

const cartProducts = [
    {
        title: "Colors",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
    },
];

const Cart = (props) => {
    const [show, setShow] = useState(false);

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
                    {cartProducts.map((product) => (
                        <CartItem 
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}
                        />
                    ))}
                    <div className='total'>
                        <span>Total</span>
                        $0
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
