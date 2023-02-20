import React, { useContext } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { motion, AnimatePresence } from "framer-motion";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip, IconButton } from "@mui/material";

const ViewExpenses = ({ budgetId, budgetName, budgetMax }) => {
  const { expenses, deleteExpense, getBudgetExpensesTotal } = useContext(
    ExpenseContext
  );

  console.log(budgetId);

  const filteredExpenses =
    budgetId != "" ? getBudgetExpensesTotal(budgetId) : expenses;

  const amount = filteredExpenses.reduce(
    (sum, expense) => sum + +expense.amount,
    0
  );

  console.log(filteredExpenses);

  return (
    <div>
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 5,
          border: "1px solid gray",
          marginBottom: 1,
          backgroundColor: "#454545",
          color: "black",
        }}
      >
        <ListItem>
          <ListItemText
            secondaryTypographyProps={{
              color: "white",
              width: "150px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
            sx={{ width: 6 }}
            primary={"Name:"}
            secondary={budgetName}
          />
          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            sx={{ width: 6 }}
            primary={"Budget:"}
            secondary={`${budgetMax} BGN`}
          />

          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            sx={{ width: 6 }}
            primary={"Remaining:"}
            secondary={`${budgetMax - amount} BGN`}
          />

          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            sx={{ width: 6 }}
            primary={"Spent:"}
            secondary={`${amount} BGN`}
          />

          <ListItemText sx={{ width: 6 }} primary={"Filter by:"} />
        </ListItem>
      </List>

      {filteredExpenses.length == 0 && (
        <div>{`No expenses for  ${budgetName}`}</div>
      )}

      <AnimatePresence>
        {filteredExpenses.map((expense) => (
          <motion.div
            key={expense.id}
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ y: "35%", opacity: 0 }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 500,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 5,
                border: "1px solid gray",
                marginBottom: 1,
              }}
            >
              <ListItem>
                <ListItemText
                  sx={{ width: 6 }}
                  primary={`${expense.amount} BGN`}
                />

                <ListItemText
                  primary={expense.name}
                  secondary={`Date added: ${expense.dateAdded}`}
                />

                <Tooltip title="REMOVE">
                  <IconButton>
                    <DeleteOutlineIcon
                      sx={{
                        backgroundColor: "crimson",
                        borderRadius: 2,
                        boxShadow: 3,
                        display: "flex",
                        justifyContent: "end",
                        width: 36,
                        margin: 0,
                        fontSize: 30,
                        cursor: "pointer",
                        border: "1px solid gray",
                        ":hover": {
                          bgcolor: "gray",
                          color: "white",
                        },
                      }}
                      onClick={() => deleteExpense(expense.id)}
                    />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </List>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ViewExpenses;
