import Products from "../components/Products/Products";

import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

import "./Store.css";

const StorePage = (props) => {
    return (
        <CartProvider>
            <>
                <Products products={props.products} />
                <Cart title={"See the Cart"} color={"primary"} />
            </>
        </CartProvider>
    );
};

export default StorePage;
