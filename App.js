import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure : 'Delhi'
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      locationOfExpenditure : 'banglore' 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure : 'mumbai'
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure : 'gurugram'
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <h1>Expense Item</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} locationOfExpenditure={expenses[0].locationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} locationOfExpenditure={expenses[1].locationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} locationOfExpenditure={expenses[2].locationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} locationOfExpenditure={expenses[3].locationOfExpenditure}></ExpenseItem>
      
    </div>
  );
}

export default App;