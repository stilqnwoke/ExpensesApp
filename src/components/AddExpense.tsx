import React, { useContext, useRef } from "react";
import { ExpenseContext } from "../store/expenses-reducer.tsx";

const AddExpense = () => {
  const { addExpenses, expenses } = useContext(ExpenseContext);
  const nameRef = useRef(null);
  const amountRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    addExpenses({
      name: nameRef.current.value,
      amount: amountRef.current.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={nameRef} required />
        <input ref={amountRef} required />
        <button type="submit">Add</button>
      </form>

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

export default AddExpense;
