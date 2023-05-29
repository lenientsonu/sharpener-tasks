import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
    const showCart = useSelector((state) => state.cart.showCart);
    const items = useSelector((state) => state.items);

    useEffect(() => {
        fetch(
            "https://cart-5876f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
            { method: "PUT", body: JSON.stringify(items) }
        );
    }, [items]);

    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
