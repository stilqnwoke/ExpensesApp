import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import "./ListBudgets.css";
import ProgressBar from "../features/ProgressBar.tsx";
import ViewExpenses from "../expenses/ViewExpenses.tsx";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArticleIcon from "@mui/icons-material/Article";

const ListBudgets = () => {
  const {
    budgets,
    selectedBudget,
    getBudgetExpensesTotal,
    deleteBudget,
    showExpenses,
    showOrHideExpenses,
  } = useContext(ExpenseContext);

  // const [showExpenses, setShowExpenses] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [budgetName, setBudgetName] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  function clickedExpenses(budgetId, budgetName, budgetMax) {
    showOrHideExpenses(true);
    setSelectedId(budgetId);
    setBudgetName(budgetName);
    setBudgetMax(budgetMax);
  }

  return (
    <div>
      {showExpenses && (
        <ViewExpenses
          budgetId={selectedId}
          budgetName={budgetName}
          budgetMax={budgetMax}
        />
      )}
      {!showExpenses && (
        <div>
          <AnimatePresence>
            {budgets.map((budget) => {
              console.log(budget);
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
                        <ListItemText
                          sx={{ width: 6 }}
                          primaryTypographyProps={{
                            paddingLeft: "8px",
                            width: "150px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                          primary={budget.name}
                          secondary={
                            <div>
                              <Tooltip title="VIEW EXPENSES">
                                <IconButton
                                  onClick={() =>
                                    clickedExpenses(
                                      budget.id,
                                      budget.name,
                                      budget.max
                                    )
                                  }
                                >
                                  <ArticleIcon
                                    sx={{
                                      color: "#505050",

                                      ":hover": {
                                        color: "#13274F",
                                      },
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="DELETE BUDGET">
                                <IconButton
                                  onClick={() => deleteBudget(budget.id)}
                                >
                                  <DeleteOutlineIcon
                                    sx={{
                                      color: "#505050",

                                      ":hover": {
                                        color: "#8B0000",
                                      },
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                            </div>
                          }
                        />
                        <ListItemText
                          sx={{ width: 6 }}
                          primaryTypographyProps={{ textAlign: "center" }}
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
      )}
    </div>
  );
};

export default ListBudgets;
