import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Expense Title</label>
            <input type="text" onChange={(e)=>{console.log(e.target.value)}}></input>
        </div>
        <div className="new-expense__control">
            <label>Expense Amount</label>
            <input type="number" onChange={(e)=>{console.log(e.target.value)}}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" onChange={(e)=>{console.log(e.target.value)}}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div> 
    </form>
  );
};

export default ExpenseForm;
