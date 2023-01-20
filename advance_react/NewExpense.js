import React, {useState} from 'react';
import './NewExpense.css';
// import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);
    const onAddHandler  = () => {
        setIsEditing(true);
    }
    const onCancelHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={onAddHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}  />}
        </div>
    );
}

export default NewExpense;