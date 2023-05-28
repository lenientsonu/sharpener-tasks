import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const toggleCart = (event) => {
        event.preventDefault();
        dispatch(cartActions.toggleCart());
    };

    return (
        <button className={classes.button} onClick={toggleCart}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
