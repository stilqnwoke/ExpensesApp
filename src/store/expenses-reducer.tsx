import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../utils/localStorageHook.ts";

const ExpenseContext = createContext({
  expenses: [],
  budgets: [],
  selectedBudget: "",
  addExpense: ({ name, amount, budgetId }) => {
    return;
  },

  deleteExpense: (id) => {
    return;
  },

  addBudget: ({ name, max }) => {
    return;
  },

  deleteBudget: (id) => {
    return;
  },

  highlightedBudget: (budgetId) => {
    return;
  },
});

const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [selectedBudget, setSelectedBudget] = useState("");

  function addExpense({ name, amount, budgetId }) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        name,
        amount,
        budgetId,
        id: uuidv4(),
        dateAdded: new Date().toLocaleDateString(),
      },
    ]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => [
      ...prevBudgets,
      {
        name,
        max,
        id: uuidv4(),
      },
    ]);
  }

  function deleteBudget(id) {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  }

  function highlightedBudget(budgetId) {
    setSelectedBudget(budgetId);
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        deleteBudget,
        addBudget,
        budgets,
        selectedBudget,
        highlightedBudget,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpensesProvider;
export { ExpenseContext };
