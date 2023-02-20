import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  IconButton,
} from "@mui/material";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import "./ListBudgets.css";

const ListBudgets = () => {
  const { budgets, selectedBudget } = useContext(ExpenseContext);

  return (
    <div>
      <AnimatePresence>
        {budgets.map((budget) => (
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
                  <ListItemText
                    sx={{ width: 6 }}
                    primary={`${budget.max} BGN`}
                  />

                  <ListItemText primary={budget.name} />

                  {/* <Tooltip title="REMOVE">
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
                          // onClick={() => deleteExpense(budget.id)}
                        />
                      </IconButton>
                    </Tooltip> */}
                </ListItem>
              </List>
            </Stack>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListBudgets;
