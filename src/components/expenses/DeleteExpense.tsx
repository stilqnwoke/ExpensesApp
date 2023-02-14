import React, { useContext } from "react";
import { ExpenseContext } from "../../store/expenses-reducer";

const DeleteExpense = (id) => {
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <div>
      <button onClick={() => deleteExpense(id)}>Delete</button>
    </div>
  );
};

export default DeleteExpense;
