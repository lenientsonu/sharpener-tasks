import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__description">
          {props.locationOfExpenditure}
        </div>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
