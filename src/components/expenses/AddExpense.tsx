import React, { useContext, useRef, useState } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);
  const nameRef = useRef(null);
  const amountRef = useRef(null);
  const [budgetCategory, setBudgetCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setBudgetCategory(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    addExpense({
      name: nameRef.current.value,
      amount: amountRef.current.value,
    });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "24ch" },
          border: "1px dashed grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 300,
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          required
          id="outlined-required"
          ref={nameRef}
          label="Description"
          variant="outlined"
          size="small"
        />

        <TextField
          required
          id="outlined-required"
          InputProps={{
            endAdornment: <InputAdornment position="end">BGN</InputAdornment>,
          }}
          ref={amountRef}
          label="Amount"
          variant="outlined"
          size="small"
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" size="medium">
          Add Expense
        </Button>
      </Box>
    </div>
  );
};

export default AddExpense;
