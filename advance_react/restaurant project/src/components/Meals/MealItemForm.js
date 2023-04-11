import React from "react";
import Input from "../UI/Input";
import "./MealItemForm.css";

const MealItemForm = () => {
    return (
        <form className='form'>
            <Input
                label='Amount'
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button type='submit'>+Add</button>
        </form>
    );
};

export default MealItemForm;