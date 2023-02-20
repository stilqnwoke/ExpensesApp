import React, { useContext } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";

const DeleteBudget = (id) => {
  const { deleteBudget } = useContext(ExpenseContext);

  return (
    <div>
      <button onClick={() => deleteBudget(id)}>Delete</button>
    </div>
  );
};

export default DeleteBudget;
