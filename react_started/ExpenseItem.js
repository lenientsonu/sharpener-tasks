import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";


const ExpenseItem = (props) => {
  const clickHandler = () => {
    //code to delete the ExpenseItem
  }

  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs. {props.amount}</div>
        <button onClick={clickHandler}>Delete</button>
      </Card>
    </div>
  );
}

export default ExpenseItem;
