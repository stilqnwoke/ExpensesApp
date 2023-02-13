import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ExpenseContext = createContext({
  expenses: [],
  addExpenses: (expense) => {
    return;
  },
});

const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useState([]);

  function addExpenses({ name, amount, id }) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { name, amount, id: uuidv4() },
    ]);
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpenses }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpensesProvider;
export { ExpenseContext };
