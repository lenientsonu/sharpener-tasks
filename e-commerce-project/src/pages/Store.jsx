import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

import "./Store.css";

const HomePage = () => {
    return (
        <CartProvider>
            <>
                <Header />
                <Products />
                <Cart title={"See the Cart"} color={"primary"} />
                <Footer />
            </>
        </CartProvider>
    );
};

export default HomePage;
