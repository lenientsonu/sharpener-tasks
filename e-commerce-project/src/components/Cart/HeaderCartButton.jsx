import Cart from "./Cart";

import "./HeaderCartButton.css";

const HeaderCartButton = () => {
    return (
        <>
            <Cart title={"Cart"} color={"outline-info"} />
            <span>0</span>
        </>
    );
};

export default HeaderCartButton;
