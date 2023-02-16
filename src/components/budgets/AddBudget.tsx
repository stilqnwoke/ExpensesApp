import React, { useContext, useRef } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";

const AddBudget = () => {
  const { addBudget } = useContext(ExpenseContext);
  const nameRef = useRef(null);
  const maxRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: maxRef.current.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={nameRef} required />
        <input ref={maxRef} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBudget;
