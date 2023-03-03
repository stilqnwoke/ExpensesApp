import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { budgets, expenses, getBudgetExpensesTotal } = useContext(
    ExpenseContext
  );
  // console.log(budgets);
  const getLabels = budgets.map((budget) => budget.name);
  const getExpenses = budgets.map((budget) =>
    getBudgetExpensesTotal(budget.id)
  );

  let getBudgetExpenses = getExpenses.map((item) => {
    return item.reduce((sum, expense) => sum + +expense.amount, 0);
  });

  console.log(getBudgetExpenses);

  const data = {
    labels: getLabels,
    datasets: [
      {
        label: "Total expenses",
        data: getBudgetExpenses,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
    },
  };

  return (
    <div className="pie__wrapper">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
