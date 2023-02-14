import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../utils/localStorageHook.ts";

const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ name, amount }) => {
    return;
  },

  deleteExpense: (id) => {
    return;
  },
});

const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [budgets, setBudgets] = useLocalStorage("budgets", []);

  function addExpense({ name, amount }) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        name,
        amount,
        id: uuidv4(),
        dateAdded: new Date().toLocaleDateString(),
      },
    ]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((item) => item.id !== id));
  }

  function editExpense(id) {
    setExpenses(expenses.filter((item) => item.id !== id));
  }

  function addBudget({ name, max, id }) {
    setBudgets((prevBudgets) => [
      ...prevBudgets,
      {
        name,
        max,
        id: uuidv4(),
      },
    ]);
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpensesProvider;
export { ExpenseContext };
