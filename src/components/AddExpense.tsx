import React, { useContext, useRef } from "react";
import { ExpenseContext } from "../store/expenses-reducer.tsx";

const AddExpense = () => {
  const { addExpenses, expenses } = useContext(ExpenseContext);
  const nameRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    addExpenses({ name: "dsad", amount: 33, id: 312321 });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={nameRef} />
        <button type="submit">Add</button>
      </form>

      {expenses.map((expense) => (
        <p key={expense.id}>{expense.name}</p>
      ))}
    </div>
  );
};

export default AddExpense;
