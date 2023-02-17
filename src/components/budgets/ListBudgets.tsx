import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Divider } from "@mui/material";
import { ExpenseContext } from "../../store/expenses-reducer";

const ListBudgets = () => {
  const { budgets } = useContext(ExpenseContext);

  return (
    <div>
      <AnimatePresence>
        {budgets.map((expense) => (
          <motion.div
            key={expense.id}
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
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </Stack>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListBudgets;
