import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
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
      <h1>Expense Items</h1>
       {/* <Expenses items={expenses} /> */}
       <ExpenseForm />
    </div>
  );
}

export default App;
