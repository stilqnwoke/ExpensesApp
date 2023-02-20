import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Divider, List, ListItem, ListItemText } from "@mui/material";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import "./ListBudgets.css";
import ProgressBar from "../features/ProgressBar.tsx";

const ListBudgets = () => {
  const { budgets, selectedBudget, getBudgetExpensesTotal } = useContext(
    ExpenseContext
  );

  return (
    <div>
      <AnimatePresence>
        {budgets.map((budget) => {
          console.log(getBudgetExpensesTotal(budget.id));
          const amount = getBudgetExpensesTotal(budget.id).reduce(
            (sum, expense) => sum + +expense.amount,
            0
          );

          const percentage = Math.round((100 * amount) / budget.max);

          return (
            <motion.div
              key={budget.id}
              initial={{ y: "50%", opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              exit={{ y: "35%", opacity: 0 }}
            >
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 5,

                    marginBottom: 1,
                  }}
                  className={
                    selectedBudget == budget.id ? "selected" : "stack__item"
                  }
                >
                  <ListItem>
                    <ListItemText primary={budget.name} />
                    <ListItemText
                      sx={{ width: 6 }}
                      primary={`${+amount}/${budget.max} BGN`}
                      secondary={<ProgressBar progress={percentage} />}
                    />
                  </ListItem>
                </List>
              </Stack>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ListBudgets;
