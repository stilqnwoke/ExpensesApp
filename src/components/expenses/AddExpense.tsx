import React, { useContext, useRef } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";

const AddExpense = () => {
  const { addExpense, expenses, deleteExpense } = useContext(ExpenseContext);
  const nameRef = useRef(null);
  const amountRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    addExpense({
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
    </div>
  );
};

export default AddExpense;
