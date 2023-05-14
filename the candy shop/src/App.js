import React, { useState } from "react";

import CartProvider from "./store/CartProvider";
import CandyProvider from "./store/CandyProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AddCandy from "./components/AddCandy/AddCandy";
import Candies from "./components/Candies/Candies";

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
            <CandyProvider>
                {isShowCart && <Cart onCloseCart={closeCartHandler} />}
                <Header onShowCart={showCartHandler} />
                <main>
                    <AddCandy />
                    <Candies />
                </main>
            </CandyProvider>
        </CartProvider>
    );
}

export default App;
