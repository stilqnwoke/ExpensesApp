import React from "react";
import AddBudget from "./budgets/AddBudget.tsx";
import AddExpense from "./expenses/AddExpense.tsx";
import "./Main.css";
import ListBudgets from "./budgets/ListBudgets.tsx";
import PieChart from "./features/PieChart.tsx";

const Main = () => {
  return (
    <div className="main__wrapper">
      <div className="budgets__wrapper">
        <ListBudgets />
      </div>
      <div className="side__wrapper">
        <div className="forms__wrapper">
          <AddBudget />
          <AddExpense />
        </div>
        <div className="pie">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Main;
