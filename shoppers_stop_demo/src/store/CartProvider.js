import React, {useState} from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        setItems((prevItems) => {
            // Check if the item already exists in the cart
            const existingItem = prevItems.find((i) => i.id === item.id);
    
            if (existingItem) {
                // If the item already exists, update its quantity
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // If the item doesn't exist, add it to the cart
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    
        setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
    }

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
