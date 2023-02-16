import "./App.css";
import AddExpense from "./components/expenses/AddExpense.tsx";
import ViewExpenses from "./components/expenses/ViewExpenses.tsx";
import AddBudget from "./components/budgets/AddBudget.tsx";

function App() {
  return (
    <div className="App">
      <AddExpense />
      <ViewExpenses />
      <AddBudget />
    </div>
  );
}

export default App;
