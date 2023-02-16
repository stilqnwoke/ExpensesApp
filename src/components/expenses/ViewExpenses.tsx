import React, { useContext } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ViewExpenses = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div>
      <AnimatePresence>
        {expenses.map((expense) => (
          <motion.div
            key={expense.id}
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ y: "35%", opacity: 0 }}
          >
            <List
              sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemText
                  sx={{ width: 6 }}
                  primary={`${expense.amount} BGN`}
                />

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
                    ":hover": {
                      bgcolor: "gray",
                      color: "white",
                    },
                  }}
                >
                  Delete
                </Button>
              </ListItem>

              <Divider variant="fullWidth" component="li" />
            </List>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ViewExpenses;
