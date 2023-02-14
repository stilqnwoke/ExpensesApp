import React, { useContext } from "react";
import { ExpenseContext } from "../../store/expenses-reducer";

const ViewExpenses = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>{expense.name}</p>
          <span>{expense.amount}</span>
          <span>{expense?.dateAdded}</span>
        </div>
      ))}
    </div>
  );
};

export default ViewExpenses;
