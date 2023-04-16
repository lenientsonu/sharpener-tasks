import React, { useState } from "react";

import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Clothes from "./components/Clothes/Clothes";

function App() {
    const [isShowCart, setIsShowCart] = useState(false);

    const closeCartHandler = () => {
        setIsShowCart(false);
    };

    const showCartHandler = () => {
        setIsShowCart(true);
    };

    return (
        <CartProvider>
            {isShowCart && <Cart onCloseCart={closeCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Clothes />
            </main>
        </CartProvider>
    );
}

export default App;
