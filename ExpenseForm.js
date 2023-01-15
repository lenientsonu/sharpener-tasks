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

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title : title,
            amount: amount,
            date: new Date(date)
        };
        console.log(expenseData);
        enteredTitle('');
        enteredAmount('');
        enteredDate('');
    };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Expense Title</label>
            <input type="text" value={title} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Expense Amount</label>
            <input type="number" value={amount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={date} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div> 
    </form>
  );
};

export default ExpenseForm;
