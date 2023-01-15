import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [title,enteredTitle] = useState('');
    const [amount,enteredAmount] = useState('');
    const [date,enteredDate] = useState('');

    const titleChangeHandler = (e) => {
        enteredTitle(e.target.value);
    };
    const amountChangeHandler = (e) => {
        enteredAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        enteredDate(e.target.value);
    };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Expense Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Expense Amount</label>
            <input type="number" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div> 
    </form>
  );
};

export default ExpenseForm;
