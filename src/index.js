import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ExpensesProvider from "./store/expenses-reducer.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </React.StrictMode>
);
