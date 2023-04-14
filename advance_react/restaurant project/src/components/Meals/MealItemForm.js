import React, { useContext } from "react";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";
import "./MealItemForm.css";

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addItem = (event) => {
        event.preventDefault();
        const quantity = document.getElementById("amount_" + props.id).value;
        cartCtx.addItem({ ...props.meal, quantity: quantity });
        console.log(cartCtx);
    };

    return (
        <form className='form'>
            <Input
                label='Amount'
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button type='submit' onClick={addItem}>
                +Add
            </button>
        </form>
    );
};

export default MealItemForm;
