import React, { useContext, useState } from "react";
import { ExpenseContext } from "../../store/expenses-reducer.tsx";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import { validateBudgetForm } from "../../utils/validationHelpers.ts";

const AddBudget = () => {
  const { addBudget } = useContext(ExpenseContext);
  const [budgetName, setBudgetName] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  let isValid = validateBudgetForm(budgetName, budgetMax);

  const onSubmit = (event) => {
    event.preventDefault();

    addBudget({
      name: budgetName,
      max: budgetMax,
    });

    setBudgetName("");
    setBudgetMax("");
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
          value={budgetName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setBudgetName(event.target.value);
          }}
          label="Name"
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
          value={budgetMax}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setBudgetMax(event.target.value);
          }}
          label="Max Budget"
          variant="outlined"
          size="small"
          type="number"
        />

        <Button
          disabled={!isValid}
          variant="contained"
          size="medium"
          startIcon={<BusinessCenterOutlinedIcon />}
          type="submit"
        >
          Add Expense
        </Button>
      </Box>
    </div>
  );
};

export default AddBudget;
