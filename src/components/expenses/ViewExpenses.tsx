import React, { useContext, useCallback, useState, useEffect } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { motion, AnimatePresence } from "framer-motion";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip, IconButton } from "@mui/material";
import "./ViewExpenses.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["", "Biggest Expense", "Smallest Expense", "Date Added"];

const ViewExpenses = ({ budgetId, budgetName, budgetMax }) => {
  const { expenses, deleteExpense, getBudgetExpensesTotal } = useContext(
    ExpenseContext
  );
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    setFilteredExpenses(
      budgetId != "" ? getBudgetExpensesTotal(budgetId) : expenses
    );
  }, [filteredExpenses, expenses]);

  const amount = filteredExpenses.reduce(
    (sum, expense) => sum + +expense.amount,
    0
  );

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
          backgroundImage: "linear-gradient(to bottom, #2155, #da9486)",
          color: "black",
        }}
      >
        <ListItem>
          <ListItemText
            secondaryTypographyProps={{
              color: "white",
              width: "150px",
            }}
            sx={{ width: 6, margin: 0 }}
            primary={"Name:"}
            secondary={budgetName}
          />
          <ListItemText
            sx={{ width: 6, margin: 0 }}
            primary={
              <div>
                <Autocomplete
                  value={value}
                  onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);

                    switch (newInputValue) {
                      case "Biggest Expense":
                        const tempArrayDesc = filteredExpenses.sort(
                          (a, b) => b.amount - a.amount
                        );
                        setFilteredExpenses(tempArrayDesc);

                        console.log(filteredExpenses);
                        break;
                      case "Smallest Expense":
                        const tempArrayAsc = filteredExpenses.sort(
                          (a, b) => a.amount - b.amount
                        );
                        setFilteredExpenses(tempArrayAsc);
                        console.log(filteredExpenses);

                        break;
                      case "Date Added":
                        const tempArrayDate = filteredExpenses.sort(
                          (a, b) => a.dateAdded - b.dateAdded
                        );
                        setFilteredExpenses(tempArrayDate);
                        console.log(filteredExpenses);

                        break;
                      default:
                        const temp = filteredExpenses;
                        setFilteredExpenses(temp);
                        break;
                    }
                  }}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Filter By" />
                  )}
                />
              </div>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            sx={{ width: 6, margin: 0 }}
            primary={"Budget:"}
            secondary={`${budgetMax} BGN`}
          />

          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            sx={{ width: 6, margin: 0 }}
            primary={"Remaining:"}
            secondary={`${budgetMax - amount} BGN`}
          />

          <ListItemText
            secondaryTypographyProps={{
              color: "white",
            }}
            sx={{ width: 6, margin: 0 }}
            primary={"Spent:"}
            secondary={`${amount} BGN`}
          />
        </ListItem>
      </List>

      {filteredExpenses.length == 0 && (
        <div className="no__expenses">{`No expenses for  ${budgetName}`}</div>
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
