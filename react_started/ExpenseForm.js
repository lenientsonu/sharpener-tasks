import React from 'react';
import './NewExpense.css';

const ExpenseForm = () => {
    return <form>
        <div>
            <label>Expense Title</label>
            <input type='text'></input>
        </div>
        <div>
            <label>Expense Amount</label>
            <input type='number'></input>
        </div>
        <div>
            <label>Date</label>
            <input type='date'></input>
        </div>
        <button>Add Expense</button>
    </form>
}

export default ExpenseForm;