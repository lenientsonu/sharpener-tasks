import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={props.amount} />
      </div>
    </div>
  );
}

export default ExpenseItem;
