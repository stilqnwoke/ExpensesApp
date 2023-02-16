import React, { useContext, useRef, useState } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { validateForm } from "../../utils/validationHelpers.ts";
import { MenuItem } from "@mui/material";

const AddExpense = () => {
  const { addExpense, budgets } = useContext(ExpenseContext);
  const [budgetCategory, setBudgetCategory] = useState("");
  const nameRef = useRef(null);
  const amountRef = useRef(null);

  let isValid = validateForm(
    nameRef.current?.value,
    amountRef.current?.value,
    budgetCategory
  );

  const handleChange = (event: SelectChangeEvent) => {
    setBudgetCategory(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    addExpense({
      name: nameRef.current.value,
      amount: amountRef.current.value,
      budgetId: budgetCategory,
    });

    nameRef.current.value = "";
    amountRef.current.value = "";
    setBudgetCategory("");
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "24ch" },
          border: "1px solid grey",
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          width: 280,
          padding: 2,
        }}
        onSubmit={onSubmit}
      >
        <h2>Add an Expense</h2>

        <TextField
          required
          id="outlined-required"
          inputRef={nameRef}
          label="Description"
          variant="outlined"
          size="small"
          type="text"
        />

        <TextField
          required
          id="outlined-required"
          InputProps={{
            endAdornment: <InputAdornment position="end">BGN</InputAdornment>,
          }}
          inputRef={amountRef}
          label="Amount"
          variant="outlined"
          size="small"
          type="number"
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-helper-label">
            Budget Category
          </InputLabel>

          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={budgetCategory}
            label="Budget Category"
            onChange={handleChange}
          >
            {budgets.map((budget) => (
              <MenuItem value={budget.id} key={budget.key}>
                <em>{budget.name}</em>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          disabled={!isValid}
          variant="contained"
          size="medium"
          startIcon={<PaidOutlinedIcon />}
          type="submit"
        >
          Add Expense
        </Button>
      </Box>
    </div>
  );
};

export default AddExpense;
