import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "./store/cartSlice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitital = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.cart.showCart);
    const items = useSelector((state) => state.items);
    const notification = useSelector((state) => state.cart.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                cartActions.showNotification({
                    status: "pending",
                    title: "Sending",
                    message: "Sending cart data",
                })
            );
            const response = await fetch(
                "https://cart-5876f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(items) }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }

            dispatch(
                cartActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully",
                })
            );
        };

        if (isInitital) {
            isInitital = false;
            return;
        }

        sendCartData().catch((error) => {
            dispatch(
                cartActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed",
                })
            );
        });
    }, [items, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
