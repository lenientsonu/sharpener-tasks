import React from "react"
import './MealItemForm.css'

const MealItemForm = () => {
    return (
        <form className="form">
            <label>Amount</label>
            <input type="number" min='1' step='1' />
            <button type="submit">+Add</button>
        </form>
    )
}

export default MealItemForm