import React from "react";
import AddBudget from "./budgets/AddBudget.tsx";
import AddExpense from "./expenses/AddExpense.tsx";
import "./Main.css";
import ListBudgets from "./budgets/ListBudgets.tsx";

const Main = () => {
  return (
    <div className="main__wrapper">
      <div className="budgets__wrapper">
        <ListBudgets />
      </div>
      <div className="forms__wrapper">
        <AddBudget />
        <AddExpense />
      </div>
    </div>
  );
};

export default Main;
