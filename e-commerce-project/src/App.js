import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
    return (
        <CartProvider>
            <div className='app'>
                <Header />
                <Products />
                <Cart title={"See the Cart"} color={"primary"} />
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
