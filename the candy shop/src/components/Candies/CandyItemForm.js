import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CandyItemForm.css";

const CandyItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addOne = (event) => {
        event.preventDefault();
        // console.log(event.target.id);
        cartCtx.addItem(props.candy, event.target.id);
    };

    const addFive = (event) => {
        event.preventDefault();
        cartCtx.addItem(props.candy, event.target.id);

    };

    const addTen = (event) => {
        event.preventDefault();
        cartCtx.addItem(props.candy, event.target.id);

    };

    return (
        <form className='form'>
            <button type='submit' id='one' onClick={addOne}>
                Buy 1 Candy
            </button>
            <button type='submit' id='five' onClick={addFive}>
                Buy 5 Candies
            </button>
            <button type='submit' id='ten' onClick={addTen}>
                Buy 10 Candies
            </button>
        </form>
    );
};

export default CandyItemForm;
