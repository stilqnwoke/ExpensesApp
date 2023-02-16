import React, { useContext } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ViewExpenses = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div>
      {expenses.map((expense) => (
        <List
          key={expense.id}
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemText sx={{ width: 6 }} primary={`${expense.amount} BGN`} />

            <ListItemText
              primary={expense.name}
              secondary={expense.dateAdded}
            />

            <Button
              variant="contained"
              size="medium"
              startIcon={<DeleteOutlineIcon />}
              onClick={() => deleteExpense(expense.id)}
              sx={{
                backgroundColor: "red",
                hover: { backgroundColor: "gray" },
              }}
            >
              Delete
            </Button>
          </ListItem>

          <Divider variant="fullWidth" component="li" />
        </List>
      ))}
    </div>
  );
};

export default ViewExpenses;
